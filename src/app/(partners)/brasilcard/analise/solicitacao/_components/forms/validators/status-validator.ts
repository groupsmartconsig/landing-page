import { MaritalStatus } from "@/app/(partners)/brasilcard/consts/marital-status-const"
import { FieldError } from "react-hook-form"

export const validateMaritalStatus = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value !== 'string')) {
        return { type: 'required', message: 'O estado civil é obrigatório.'}
    }else if(MaritalStatus.findIndex(status => status.codigo.toString() === value) === -1){
        return { type: 'custom', message: 'Estado civil inválido.'}
    }
}

export const validateEmploymentStatus = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value !== 'string')) {
        return { type: 'required', message: 'A situação empregatícia é obrigatória.'}
    }
}
