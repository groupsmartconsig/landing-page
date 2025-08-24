import z from "zod";

import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { clientAnalyseBrasilcard } from "../functions/client-analyse.ts";
import { preApprovalBrasilcard } from "../functions/pre-approval-brasilcard.ts";
import { handleCheckRequestJWT } from "../handlers/handle-check-request-jwt.ts";
import { SimulationProposalSchema } from "../schemas/simulation-proposal-schema.ts";

export const simulationProposalRoute: FastifyPluginAsyncZod = async (server) => {
  server.post("/brasilcard/simulate", {
    preHandler: [
      handleCheckRequestJWT
    ],
    schema: {
      tags: ["brasilcard"],
      summary: "Simular Proposta Brasilcard",
      description: "Requer autenticação via token JWT.",
      body: SimulationProposalSchema,
      response: {
        200: z.object({
          pre_approved: z.boolean(),
          card_limit: z.number(),
          status: z.string(),
          message: z.string()
        }),
        400: z.object({
          released_value: z.string(),
          message: z.string(),
          status: z.string(),
        }),
        401: z.object({
          message: z.string(),
        }),
      }
    },
  }, async (request, reply) => {
    const body = request.body;
    const token = request.headers.authorization;

    if (!token) {
      return reply.status(401).send({ message: "User not authorized." });
    }

    const preApprovalData = {
      cpf: body.cpf,
      employment_status: body.employment_status,
      uf: body.uf
    };

    const preApprovalRequest = await preApprovalBrasilcard(preApprovalData, token);

    if (preApprovalRequest.released_value === 0) {
      return reply.status(400).send({
        released_value: "0.00",
        message: "Possui registros de restricao acima do limite da Agil",
        status: "rejected"
      });
    }

    const analyseData = {
      cpf: body.cpf,
      employment_status: body.employment_status,
      uf: body.uf,
      birth_day: body.birth_day,
    }

    const analyseRequest = await clientAnalyseBrasilcard(analyseData, token);

    return reply.status(200).send(analyseRequest);
  });
}
