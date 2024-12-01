import axios from "axios";

import { toast } from "sonner";

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
        `/contratos/detalhamento-vanguard?Cpf=${document}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data;
    } catch (error: any) {
      console.error("Erro ao buscar contratos:", error);
      const name = localStorage.getItem("nome");
      const contact = localStorage.getItem("contato");
      const document = localStorage.getItem("cpf");

      if (!name || !contact || !document) {
        throw new Error("Dados do formulário não encontrados! tente novamente.");
      }

      await DataService.createCustomer(name, contact, document);

      toast.warning("NENHUMA PROPOSTA ENCONTRADA PARA O CPF INFORMADO", {
        description: "Infelizmente no momento não encontramos propostas de portabilidade para você.",
        duration: 7000,
      });
    }
  }

  static async createCustomer(
    name: string,
    phoneNumber: string,
    cpf: string,
    amountContractsElegible?: number,
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
          amountContractsElegible
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
    }
  }
}
