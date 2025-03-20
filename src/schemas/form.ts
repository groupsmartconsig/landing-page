import { isValidCpf } from "@/utils/mask/mask-cpf";
import { z } from "zod";

export type FormData = z.infer<typeof formSchema>;

export const formSchema = z.object({
  name: z
    .string()
    .min(4, "O nome completo é um campo obrigatório."),
  cpf: z
    .string()
    .min(14, "O CPF é obrigatório! Informe um CPF válido.")
    .refine((cpf: string) => isValidCpf(cpf), {
      message: "Informe um CPF válido.",
    }),
  phoneNumber: z
    .string()
    .min(15, "Informe um telefone válido."),
})