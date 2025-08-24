import { NextRequest, NextResponse } from "next/server";

import axios from "axios"

export async function GET(request: NextRequest) {
  try {
    const response = await axios.get('https://correspondente.agil.com.br/api/web-manager/state');
    
    return NextResponse.json(response.data);
    
  } catch (error) {
    return NextResponse.json({ error }, {status: 500});
  }
}
