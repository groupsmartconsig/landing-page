import { env } from "@/utils/env";
import { NextRequest, NextResponse } from "next/server";
import { AnalysisForm } from "@/app/(partners)/brasilcard/_components/forms/analysis/analysis-form";
import { loginBrasilcard } from "../../brasilcard/functions/login-brasilcard";
import { preApprovalBrasilcard } from "../../brasilcard/functions/pre-approval-brasilcard";
import { clientAnalyseBrasilcard } from "../../brasilcard/functions/client-analyse";
import { authInternal } from "@/app/api/internal/functions/auth";
import { internalCustomerRegister } from "../../internal/functions/customer-save";
import { CustomerOrigin, MarketingDetails } from "@/types/customer";
import { clientDataBrasilcard } from "../../brasilcard/functions/client-data";
import { ClientAnalyseResponse } from "../../brasilcard/types/customer-analyse";
import { error } from "console";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if(body){
      const client: AnalysisForm = body.customer
      const marketingDetails: MarketingDetails = body.marketingDetails

      client.birth_date = client.birth_date.split("/").reverse().join("-")
      client.cpf = client.cpf.replaceAll(".",'').replaceAll("-","")
            
      const credentialBrasilCard = await loginBrasilcard({
        relative: env.NEXT_PUBLIC_BRASIL_CARD_RELATIVE,
        username: env.NEXT_PUBLIC_BRASIL_CARD_USERNAME,
        password: env.NEXT_PUBLIC_BRASIL_CARD_PASSWORD,
        captcha: env.NEXT_PUBLIC_BRASIL_CARD_CAPTCHA
      })

      if(!credentialBrasilCard.access_token){
        return NextResponse.json({ error: "Erro ao autenticar na Brasilcard" }, {status: 401} );
      }

      const credentialInternalApi = await authInternal({
        username: env.NEXT_PUBLIC_USERNAME,
        password: env.NEXT_PUBLIC_PASSWORD
      })

      if(!credentialInternalApi){
        return NextResponse.json({error: "Erro ao autenticar na Smart Consig"}, {status: 401})
      }
      
      const clientDetails = await clientDataBrasilcard(client.cpf, credentialBrasilCard.access_token)
      
      await internalCustomerRegister({
        token: credentialInternalApi.accessToken,
        customer:{
          customerOrigin: CustomerOrigin.BrasilCard,
          name: clientDetails.name || '',
          cpf: clientDetails.cpf || client.cpf,
          phonenumber: clientDetails.cellphone || '',
          amountContractsElegible: 0,
          marketingDetails: marketingDetails,
        }
      })
      
      const preAnalyseResponse = await preApprovalBrasilcard(client, credentialBrasilCard.access_token)

      if(preAnalyseResponse.released_value <= 0){
        return NextResponse.json(
          {
            pre_approved: false,
            card_limit: 0,
            status: "rejected",
            message: "Cliente não foi aprovado"
          }
        );
      }
      /*
      const analysisReponse = await clientAnalyseBrasilcard(client, credentialBrasilCard.access_token)
      
      if(!analysisReponse){
        return NextResponse.json("Ocorreu um erro ao realizar a análise no sistema visa", {status: 500} )
      }

      */
      const response: ClientAnalyseResponse = {
        status: "approved",
        card_limit: 1000,
        message: "",
        pre_approved: true,
        clientDetails: clientDetails
      } 
      return NextResponse.json(response);
    }
    
  } catch (error) {
    return NextResponse.json({ error }, {status: 500} );
  }
}
