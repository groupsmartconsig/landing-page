import axios from "axios";

import { CreateCustomerRequest } from "@/types/customer";
import { InteractionResponse } from "@/types/interaction";
import { toast } from "sonner";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DATA_API,
});

export class DataService {
  static async createCustomer(formData: CreateCustomerRequest) {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token não encontrado. Faça login novamente.");

      const { data } = await httpClient.post(`/customer`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
      const operatorId = localStorage.getItem("operator_id") || "";
      const operatorName = localStorage.getItem("operator_name") || "";
      const operatorUsername = localStorage.getItem("operator_username") || "";
      const operatorContact = localStorage.getItem("operator_contact") || "";

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
        assignedOperatorRequest: {
          id: operatorId,
          name: operatorName,
          username: operatorUsername,
          phonenumber: operatorContact,
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

  static async createInteractionWithOperator() {
    try {
      const token = localStorage.getItem("token");
      const name = localStorage.getItem("nome");
      const cpf = localStorage.getItem("cpf");
      const phonenumber = localStorage.getItem("contato");

      if (!token || !name || !cpf || !phonenumber) {
        throw new Error("Dados necessários não encontrados. Tente novamente");
      }

      const payload = {
        customer: {
          name: name,
          cpf: cpf,
          phoneNumber: phonenumber
        }
      }

      const { data } = await httpClient.post<InteractionResponse>(`/interaction`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Internal server error!");
    }
  }
}