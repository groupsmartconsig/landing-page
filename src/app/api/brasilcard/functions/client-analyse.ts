import type {
  ClientAnalyseRequest,
  ClientAnalyseResponse
} from "../types/customer-analyse.ts";

export async function clientAnalyseBrasilcard(
  data: ClientAnalyseRequest,
  token: string
): Promise<Omit<ClientAnalyseResponse, 'clienDetails'>> {
  const url = `${process.env.NEXT_PUBLIC_BRASIL_CARD_URL}/visa/client-analyse`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });

    if(!response.ok){
      throw new Error(`Erro ao realizar a analise no sistema visa: ${response.statusText}`)
    }

    const result = (await response.json()) as Omit<ClientAnalyseResponse, "clienDetails">;
    return result;
  } catch (error) {
    
    throw error;
  }
}
