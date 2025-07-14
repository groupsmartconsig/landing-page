import { isValidCpf } from "@/utils/mask/mask-cpf";
import { z } from "zod";

export const publicServerCustomerInfoFormSchema = z.object({
  publicServerType: z.enum([
    "1", // Federal = 1
    "2", // State = 2
    "3", // Municipal = 3
    "4"  // ArmedForces = 4
  ], { message: "Escolha um tipo de servidor público." }),
  isStatePublicServer: z.enum([
    "1", // MilitaryPoliceOfSaoPaulo = 1
    "2", // FinanceAndPlanningSecretary = 2
    "3", // RetiredEmployees = 3
    "4", // HospitalClinicsFMUSP = 4
    "5", // HospitalClinicsFMRP = 5
    "6", // MedicalAssistanceInstituteSP = 6
    "7"  // Others = 7
  ], { message: "Escolha uma autarquia." }).optional(),
  isFederalPublicServer: z.enum([
    "1", // CivilServant = 1
    "2", // PermanentActive = 2
    "3", // RetiredOrPensioner = 3
    "4", // CltCeletista = 4
    "5", // CommissionedPosition = 5
    "6", // TemporaryPosition = 6
    "7"  // Other = 7
  ], { message: "Escolha uma esfera federal." }).optional(),
  isMunicipalPublicServer: z.enum([
    "1", // PermanentEmployee = 1
    "2", // PermanentActive = 2
    "3", // RetiredOrPensioner = 3
    "4", // CLTEmployee = 4
    "5", // CommissionedPosition = 5
    "6", // TemporaryPosition = 6
    "7"  // Other = 7
  ], { message: "Escolha uma esfera municipal." }).optional(),
  isArmedForcesPublicServer: z.enum([
    "1", // ActiveMilitary = 1
    "2", // RetiredReserve = 2
    "3", // Retired = 3
    "4", // Pensioners = 4
    "5"  // Others = 5
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