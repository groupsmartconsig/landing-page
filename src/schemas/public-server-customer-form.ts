import { isValidCpf } from "@/utils/mask/mask-cpf";
import { z } from "zod";

export const publicServerCustomerInfoFormSchema = z.object({
  isStatePublicServer: z.enum([
    "pmsp",
    "sefaz",
    "spprev",
    "hcgmusp",
    "hcrp",
    "iamspe",
    "others"
  ], { message: "Escolha uma autarquia." }),
  isFederalPublicServer: z.enum([
    "publicServant",
    "permanentAssets",
    "retiredOrPensioner",
    "clt",
    "commissionedPosition",
    "temporaryPosition",
    "others"
  ], { message: "Escolha uma esfera federal." }),
  isMunicipalPublicServer: z.enum([
    "competitiveExam",
    "permanentAssets",
    "retiredOrPensioner",
    "CLT/Celetista",
    "commissionedPosition",
    "temporaryPosition",
    "others"
  ], { message: "Escolha uma esfera municipal." }),
  isArmedForcesPublicServer: z.enum([
    "activeMilitar",
    "paidReservation",
    "retired",
    "pensioners",
    "others"
  ], { message: "Escolha uma categoria das forças armadas." })
});

export const publicServerCustomerFinancialSchema = z.object({
  hasAPayrollCard: z.boolean({ message: "Escolha uma opção." }),
  currentBank: z.string().min(1, "Informe o banco que está descontando.")
});

export const publicServerCustomerPersonalSchema = z.object({
  name: z
    .string()
    .min(4, "O nome completo é um campo obrigatório.")
    .refine(
      value => {
        const names = value.trim().split(" ");
        return names.length >= 2;
      },
      "Você deve preencher o primeiro e o último nome."
    ),
  phoneNumber: z
    .string()
    .min(15, "Informe um telefone válido."),
  cpf: z
    .string()
    .min(14, "O CPF é obrigatório! Informe um CPF válido.")
    .refine((cpf: string) => isValidCpf(cpf), {
      message: "Informe um CPF válido.",
    }),
});