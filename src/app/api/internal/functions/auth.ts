import { env } from "@/utils/env"
import { AuthInternalRequest } from "../types/auth";

export async function authInternal(request: AuthInternalRequest) {
    const url = `${env.NEXT_PUBLIC_AUTH_API}/users/login`
    const tenant = env.NEXT_PUBLIC_TENANT
    
    try {
        const response = await fetch(url, {
            headers:{
                "Content-Type": "application/json;",
                Tenant: `${tenant}`
            },
            method: "POST",
            body: JSON.stringify(request)
        })

        if (!response.ok) {
            throw new Error(`Erro na requisição de login da Smart Consig: ${response.statusText}`);
        }

        const result = (await response.json())
        return result
    } catch (error) {
        console.error(error);
        throw error;
    }

}