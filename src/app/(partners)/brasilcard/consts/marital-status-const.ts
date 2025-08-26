export type maritalStatus = {
    codigo: string
    descricao: string
}

export const MaritalStatus: maritalStatus[] = [
    {
        codigo: "A",
        descricao: "AMASIADO"
    },
    {
        codigo: "C",
        descricao: "CASADO"
    },
    {
        codigo: "D",
        descricao: "DIVORCIADO"
    },
    {
        codigo: "E",
        descricao: "DESQUITADO"
    },
    {
        codigo: "O",
        descricao: "OUTROS"
    },
    {
        codigo: "S",
        descricao: "SOLTEIRO"
    },
    {
        codigo: "V",
        descricao: "VIUVO"
    }
]