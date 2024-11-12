import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DATA_API,
});

export class DataService {
  static async getContractsByCustomerDocument(document: string) {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token não encontrado. Faça login novamente.");
      }

      const { data } = await httpClient.get(
        `/contratos/elegiveis-vanguard?Cpf=${document}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data;
    } catch (error: any) {
      console.error("Erro ao buscar contratos:", error);
      throw new Error("Erro ao realizar simulação, tente novamente.");
    }
  }

  static async createCustomer(
    name: string,
    phoneNumber: string,
    cpf: string,
    isWhatsappPhoneNumber?: true,
  ) {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token não encontrado. Faça login novamente.");
      }

      const { data } = await httpClient.post(
        `/customer`,
        {
          name,
          phoneNumber,
          cpf,
          isWhatsappPhoneNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(data)
      return data;
    } catch (error: any) {
      console.error("Erro ao cadastrar cliente:", error);
      throw new Error("Erro ao realizar cadastro do cliente, tente novamente.");
    }
  }
}
