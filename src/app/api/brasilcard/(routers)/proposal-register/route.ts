import { env } from "@/utils/env";
import { NextRequest, NextResponse } from "next/server";
import { loginBrasilcard } from "../../functions/login-brasilcard";
import { clientRegisterProposalBrasilcard } from "../../functions/client-register-proposal";
import { clientRegisterThirdBrasilcard } from "../../functions/client-register-third";
import { ClientRegisterProposalRequest } from "../../types/client-register-proposal";
import { ClientRegisterThirdRequest } from "../../types/client-register-third";

export async function POST(request: NextRequest) {
  try {
    const client: ClientRegisterThirdRequest = await request.json();

    if (!client) {
      return new Response("Bad Request", { status: 400 });
    }
    
    const login = await loginBrasilcard({
        relative: env.NEXT_PUBLIC_BRASIL_CARD_RELATIVE,
        username: env.NEXT_PUBLIC_BRASIL_CARD_USERNAME,
        password: env.NEXT_PUBLIC_BRASIL_CARD_PASSWORD,
        captcha: env.NEXT_PUBLIC_BRASIL_CARD_CAPTCHA
    })

    if(!login.access_token){
        return NextResponse.json({ error: "Erro ao autenticar na Brasilcard" }, {status: 401} );
    }

    const proposalResponse = await clientRegisterThirdBrasilcard(client, login.access_token)

    if(!proposalResponse){
      return NextResponse.json(proposalResponse, {status: 500} );
    }

    const proposalFinal: ClientRegisterProposalRequest = {
        ...client,
        id_relative: env.NEXT_PUBLIC_BRASIL_CARD_RELATIVE,
        id_client: proposalResponse.id_client,
        id_user: login.user_id
    }

    const proposalFinalResponse = await clientRegisterProposalBrasilcard(proposalFinal, login.access_token)

    return NextResponse.json( proposalFinalResponse, {status: 200} );

  } catch (error) {
    return NextResponse.json({ error }, {status: 500} );
  }
}