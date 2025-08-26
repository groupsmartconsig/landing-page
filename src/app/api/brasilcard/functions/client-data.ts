import { ClientDataResponse } from "../types/client-data";

export async function clientDataBrasilcard(
  document: string,
  token: string
): Promise<ClientDataResponse> {
  const url = `${process.env.NEXT_PUBLIC_BRASIL_CARD_URL}/personal-loan-shopkeeper/customer?cpf=${document}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });

    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
