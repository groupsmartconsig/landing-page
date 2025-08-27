/*
import { z } from "zod";

import { isValidCpf } from "@/utils/mask/mask-cpf";

export const BrasilCardSolicitationSchema = z.object({
    name: z
        .string()
        .min(4, "O nome completo é um campo obrigatório.")
        .refine(
          value => {
            const names = value.trim().split(" ");
            return names.length >= 2;
          },
          "Você deve preencher o seu nome completo."
        ),
    cpf: z
        .string()
        .min(14, "O CPF é obrigatório! Informe um CPF válido.")
        .refine((cpf: string) => isValidCpf(cpf), {
          message: "Informe um CPF válido.",
        }), 
    identity_document_number: z
        .string(),
    identity_document_state: z
        .string(),
    cellphone: z
        .string()
        .min(15, "Informe um telefone válido."),
    email: z
        .string(),
    birth_date: z
        .string()
        .min(6, "Data de Nascimento é obriatório"),
    sex: z
        .string(),
    marital_status: z
        .string(),
    mother_name: z
        .string()
        .min(4, "O nome completo é um campo obrigatório.")
        .refine(
          value => {
            const names = value.trim().split(" ");
            return names.length >= 2;
          },
          "Você deve preencher o seu nome completo."
        ),
    job: z
        .string(),
    job_company: z 
        .string(),
    employment_status: z
        .string()
        .length(4, "Situação empregatícia é obrigatória"),
    income: z
        .number()
        .min(0, "Renda é obrigatório"),
    zipcode: z
        .string(),
    city: z
        .string(),
    state: z
        .string(),
    type_street: z
        .string(),
    address: z
        .string(),
    number: z
        .string(),
    complement: z
        .string(),
    neighborhood: z
        .string(),
    politically_exposed_position: z
        .boolean(),
    politically_exposed_position_date: z
        .string(),
    politically_exposed_relative: z
        .boolean(),
    
})

export type BrasilCardSolicitationFormData = z.infer<typeof BrasilCardSolicitationSchema>
*/

import { z } from "zod";

function validaCpf(cpf: string): boolean {
    if (typeof cpf !== 'string') return false;
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
    const cpfDigits = cpf.split('').map(el => +el);
    const rest = (count: number): number => (cpfDigits.slice(0, count).reduce((soma, el, index) => soma + el * (count + 1 - index), 0) * 10) % 11 % 10;
    return rest(9) === cpfDigits[9] && rest(10) === cpfDigits[10];
}

export const SolicitationSchema = z.object({
    name: z.string().min(3, "O nome completo é obrigatório."),
    cpf: z.string()
        .length(11, "O CPF deve conter 11 dígitos.")
        .refine(validaCpf, "CPF inválido."),
    identity_document_number: z.string().min(5, "O número do RG é obrigatório."),
    identity_document_state: z.string().length(2, "A UF do RG deve ter 2 caracteres."),
    cellphone: z.string()
        .min(10, "O celular deve ter no mínimo 10 dígitos (com DDD).")
        .max(11, "O celular deve ter no máximo 11 dígitos (com DDD)."),
    email: z.string()
        .min(1, "O e-mail é obrigatório.")
        .email("Formato de e-mail inválido."),
    birth_date: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "Use o formato DD/MM/AAAA."),
    sex: z.string().min(1, "O gênero é obrigatório."),
    mother_name: z.string().min(3, "O nome completo da mãe é obrigatório."),
    zipcode: z.string().length(8, "O CEP deve conter 8 dígitos."),
    city: z.string().min(2, "A cidade é obrigatória."),
    state: z.string().length(2, "O estado (UF) é obrigatório."),
    type_street: z.string().min(2, "O tipo de logradouro é obrigatório."),
    address: z.string().min(3, "O logradouro é obrigatório."),
    number: z.string().min(1, "O número é obrigatório."),
    neighborhood: z.string().min(2, "O bairro é obrigatório."),
    complement: z.string().optional(),
    marital_status: z.string().min(1, "O estado civil é obrigatório."),
    job: z.string().min(2, "A profissão é obrigatória."),
    job_company: z.string().min(2, "A empresa é obrigatória."),
    employment_status: z.string().min(1, "A situação empregatícia é obrigatória."),
    income: z.string().min(1, "A renda é obrigatória."),
    politically_exposed_position: z.boolean(),
    politically_exposed_position_date: z.string().optional(),
    politically_exposed_relative: z.boolean(),
})
.superRefine((data, ctx) => {
    if (data.politically_exposed_position && !data.politically_exposed_position_date) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['politically_exposed_position_date'],
            message: 'A data é obrigatória para pessoas politicamente expostas.',
        });
    }
});

export type SolicitationFormData = z.infer<typeof SolicitationSchema>;