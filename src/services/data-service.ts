import { CreateCustomerRequest } from "@/types/customer";
import axios from "axios";

import { toast } from "sonner";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DATA_API,
});

export class DataService {
  static async createCustomer({
    customerOrigin: {
      creationOrigin,
      creationDate,
      marketingDetails: {
        utmCampaign,
        utmContent,
        utmSource,
        utmId
      }
    },
    name,
    phonenumber,
    cpf,
    isWhatsappPhoneNumber = true,
    amountContractsElegible,
  }: CreateCustomerRequest) {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token não encontrado. Faça login novamente.");
      }

      const payload = {
        customerOrigin: {
          creationOrigin,
          ...(creationDate && { creationDate }),
          marketingDetails: {
            utmCampaign,
            utmContent,
            utmSource,
            utmId,
          },
        },
        name,
        phonenumber,
        cpf,
        isWhatsappPhoneNumber,
        amountContractsElegible,
      };

      const { data } = await httpClient.post(`/customer`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(data);
      return data;
    } catch (error: any) {
      console.error("Erro ao cadastrar cliente:", error);
    }
  }

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
    } catch {
      const name = localStorage.getItem("nome");
      const phonenumber = localStorage.getItem("contato");
      const cpf = localStorage.getItem("cpf");
      const utmSource = localStorage.getItem("utm_source") || "";
      const utmCampaign = localStorage.getItem("utm_campaign") || "";
      const utmId = localStorage.getItem("utm_id") || "";
      const utmContent = localStorage.getItem("utm_content") || "";

      if (!name || !phonenumber || !cpf) {
        throw new Error("Dados do formulário não encontrados! Tente novamente.");
      }

      await DataService.createCustomer({
        customerOrigin: {
          creationOrigin: "Api",
          marketingDetails: {
            utmSource,
            utmCampaign,
            utmId,
            utmContent,
          },
        },
        name,
        phonenumber,
        cpf,
        amountContractsElegible: 0,
      });

      toast.warning("NENHUMA PROPOSTA ENCONTRADA PARA O CPF INFORMADO", {
        description: "Infelizmente no momento não encontramos propostas de portabilidade para você.",
        duration: 7000,
      });
    }
  }
}
