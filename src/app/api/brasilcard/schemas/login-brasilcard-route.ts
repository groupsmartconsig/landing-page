import z from "zod";

import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { loginBrasilcard } from "../functions/login-brasilcard.ts";
import { LoginBrasilcardSchema } from "../schemas/login-brasilcard-schema.ts";

export const loginBrasilcardRoute: FastifyPluginAsyncZod = async (server) => {
  server.post("/brasilcard/login", {
    schema: {
      tags: ["brasilcard"],
      summary: "Login Brasilcard",
      body: LoginBrasilcardSchema,
      response: {
        200: z.object({
          uac: z.boolean(),
          user_id: z.string(),
          relative_id: z.string(),
          user_name: z.string(),
          relative_name: z.string(),
          email: z.string(),
          access_token: z.string(),
          redirect: z.any(),
        }),
        401: z.object({
          statusCode: z.number(),
          error: z.string(),
          message: z.string(),
        })
      }
    },
  }, async (request, reply) => {
    const body = request.body;
    const response = await loginBrasilcard(body);

    if (!response) {
      return reply.status(401).send({
        statusCode: 401,
        error: "Unauthorized",
        message: "Access denied. Invalid authentication credentials"
      })
    }

    return reply.status(200).send(response);
  });
}
