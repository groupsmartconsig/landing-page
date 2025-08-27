import { CreateCustomerRequest } from "@/types/customer";
import { env } from "@/utils/env";

export type InternalCustomerRegisterRequest = {
    customer: CreateCustomerRequest,
    token: string
}

export async function internalCustomerRegister (request: InternalCustomerRegisterRequest){
    const url = `${env.NEXT_PUBLIC_DATA_API}/customers` 

    try {
        const response = await fetch(url, {
            headers:{
                "Content-Type": "application/json;",
                Authorization: `Bearer ${request.token}`,
            },
            body: JSON.stringify(request.customer),
            method: "POST"
        })

        if(!response.ok){
            throw new Error(`Erro ao registrar o cliente no sistema da Smart Consig: ${response.statusText} ${response.status}`)
        }

        const result = await response.json()
        return result
    } catch (error) {
        throw error;
    }
}