import { FieldError } from "react-hook-form"

export const validateName = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value === 'string' && value.trim().length < 2)) {
        return { type: 'min', message: 'O nome completo é obrigatório.'}
    }else if(!value || (typeof value === 'string' &&value.trim().split(' ').length < 2)){
        return  { type: 'custom', message: 'Você deve preencher o seu nome completo.'}
    }
}

export const validateMotherName = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value === 'string' && value.trim().length < 3)) {
        return { type: 'min', message: 'O nome completo da mãe é obrigatório.'}
    }else if(!value || (typeof value === 'string' &&value.trim().split(' ').length < 2)){
        return  { type: 'custom', message: 'Você deve preencher o nome completo da mãe.'}
    }
}