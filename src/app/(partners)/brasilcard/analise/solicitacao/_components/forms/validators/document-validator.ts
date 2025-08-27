import { FieldError } from "react-hook-form"

export const validateDocumentNumber = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value === 'string' && value.trim().length < 5)) {
        return { type: 'min', message: 'O número do RG é obrigatório.'}
    }
}

export const validateDocumentState = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value === 'string' && value.trim().length !== 2)) {
        return { type: 'length', message: 'A UF do RG deve ter 2 caracteres.'}
    }
}