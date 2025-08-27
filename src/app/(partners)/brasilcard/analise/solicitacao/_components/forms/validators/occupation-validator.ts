import { Occupations } from "@/app/(partners)/brasilcard/consts/occupations-const"
import { FieldError } from "react-hook-form"

export const validateJob = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value === 'string' && value.trim().length < 2)) {
        return { type: 'min', message: 'A profissão é obrigatória.'}
    }else if(Occupations.findIndex(occupation => occupation.codigo.toString() === value.toString()) === -1){
        return { type: 'custom', message: 'Profissão inválida.'}
    }
}

export const validateIncome = (value: unknown):FieldError | undefined =>{
    if(!value) {
        return { type: 'required', message: 'A renda é obrigatória.'}
    }
}