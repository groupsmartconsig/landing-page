import { NextResponse } from "next/server";
import { clientAddressStatesDataBrasilcard } from "../../functions/client-address-states-data";

export async function GET() {
    try {
        const states = await clientAddressStatesDataBrasilcard()

        if (!states) {
            return NextResponse.json(
                { error: "Erro ao buscar estados" },
                { status: 500 }
            );
        }

        return NextResponse.json(states)
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}