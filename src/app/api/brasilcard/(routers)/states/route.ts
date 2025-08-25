import { NextResponse } from "next/server";
import { clientAddressStatesDataBrasilcard } from "../../functions/client-address-states-data";
import { ClientStatesResponse } from "../../types/client-states";

export async function GET(): Promise<NextResponse<ClientStatesResponse | { error: string }> | void> {
    try {
        const States = await clientAddressStatesDataBrasilcard()
        
        if(!States){
            return NextResponse.json({ error: "Erro ao buscar estados" }, {status: 500})
        }

        NextResponse.json(States)

    } catch (error) {
        NextResponse.json({ error }, {status: 500} );
    }
}