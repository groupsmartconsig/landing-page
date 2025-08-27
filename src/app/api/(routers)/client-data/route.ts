import { env } from "@/utils/env";
import { NextRequest, NextResponse } from "next/server";
import { ClientDataRequest } from "../../brasilcard/types/client-data";
import { clientDataBrasilcard } from "../../brasilcard/functions/client-data";
import { loginBrasilcard } from "../../brasilcard/functions/login-brasilcard";

export async function GET(request: NextRequest){
    try {
        const body = request.nextUrl.searchParams.get('cpf');

        if(!body){
            return NextResponse.json({ error: "Documento não fornecido" }, {status: 400} );
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

        const clientData = await clientDataBrasilcard(body, login.access_token);
       
        return NextResponse.json(clientData, {status: 200});

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Erro ao processar a requisição" }, {status: 500} );
    }
}