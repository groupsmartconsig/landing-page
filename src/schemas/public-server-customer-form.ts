import { isValidCpf } from "@/utils/mask/mask-cpf";
import { z } from "zod";

export const publicServerCustomerInfoFormSchema = z.object({
  publicServerType: z.enum([
    "federal",
    "state",
    "municipal",
    "armedForces"
  ], { message: "Escolha um tipo de servidor público." }),
  isStatePublicServer: z.enum([
    "pmsp",
    "sefaz",
    "spprev",
    "hcgmusp",
    "hcrp",
    "iamspe",
    "others"
  ], { message: "Escolha uma autarquia." }).optional(),
  isFederalPublicServer: z.enum([
    "publicServant",
    "permanentAssets",
    "retiredOrPensioner",
    "clt",
    "commissionedPosition",
    "temporaryPosition",
    "others"
  ], { message: "Escolha uma esfera federal." }).optional(),
  isMunicipalPublicServer: z.enum([
    "competitiveExam",
    "permanentAssets",
    "retiredOrPensioner",
    "CLT/Celetista",
    "commissionedPosition",
    "temporaryPosition",
    "others"
  ], { message: "Escolha uma esfera municipal." }).optional(),
  isArmedForcesPublicServer: z.enum([
    "activeMilitar",
    "paidReservation",
    "retired",
    "pensioners",
    "others"
  ], { message: "Escolha uma categoria das forças armadas." }).optional()
});

export const publicServerCustomerFinancialSchema = z.object({
  hasAPayrollCard: z.enum(["yes", "no"], { message: "Escolha uma opção." }),
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

export const publicServerCustomerDocumentUploadSchema = z.object({
  file: z
    .instanceof(File, {
      message: "É obrigatório anexar um arquivo"
    })
    .refine(
      (file) => file.type === "application/pdf",
      {
        message: "Apenas arquivos PDF são permitidos"
      }
    )
    .refine(
      (file) => file.size <= 10 * 1024 * 1024, // 10MB
      {
        message: "O arquivo deve ter no máximo 10MB"
      }
    )
});

export const PublicServerCustomerSchema = z.object({
  publicServerCustomerInfoForm: publicServerCustomerInfoFormSchema,
  publicServerCustomerFinancial: publicServerCustomerFinancialSchema,
  publicServerCustomerPersonal: publicServerCustomerPersonalSchema,
  publicServerCustomerDocumentUpload: publicServerCustomerDocumentUploadSchema
});

export type PublicServerCustomerSchema = z.infer<typeof PublicServerCustomerSchema>;