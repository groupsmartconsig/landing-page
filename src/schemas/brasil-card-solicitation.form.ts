import { occupations } from "@/utils/enums/occupations-enum";
import { UFs } from "@/utils/enums/ufs-enum";
import { isValidCpf } from "@/utils/mask/mask-cpf";
import { z } from "zod";

export type BrasilCartSolicitationFormData = z.infer<typeof BrasilCartSolicitationFormSchema>;

export const BrasilCartSolicitationFormSchema = z.object({
    cpf: z
        .string()
        .min(14, "O CPF é obrigatório! Informe um CPF válido.")
        .refine((cpf: string) => isValidCpf(cpf), {
            message: "Informe um CPF válido.",
        }),
    uf: z
        .string()
        .length(2, "UF é obrigatória")
        .refine(
            value=>{
                return UFs.find((uf)=> uf.toLocaleUpperCase() === value.toLocaleUpperCase())
            },
            "Escolha uma UF válida"
        ),
    occupation: z
        .string()
        .min(1, "Sitaução empregatíca é obrigatória")
        .refine(
            value => {
                return occupations.find((occupation)=> occupation.toLocaleLowerCase() === value.toLocaleLowerCase())
            },
            "Selecione uma situação empregatícia válida."
        ),
    birthday: z
        .string()
        .min(6, "Data de Nascimento é obriatório")
})