import { NextRequest, NextResponse } from "next/server";

import axios from "axios"
import { BrasilCartSolicitationFormData, BrasilCartSolicitationFormSchema } from "@/schemas/brasil-card-solicitation.form";

export async function POST(request: NextRequest) {
  try {

    const body = await request.json();
    const { success, error, data: form } = BrasilCartSolicitationFormSchema.safeParse(body);

    if (!success) {
      return NextResponse.json(
        { error: error.issues },
        { status: 400 },
      );
    }

    if(form){
      const client: BrasilCartSolicitationFormData = form
      const response = await axios.post('https://correspondente.agil.com.br/api/web-manager/visa/client-analyse', client);
      
      return NextResponse.json(response.data);
    }

    
  } catch (error) {
    return NextResponse.json({ error }, {status: 500});
  }
}
