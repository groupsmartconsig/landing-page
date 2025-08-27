import { FieldError } from "react-hook-form";

export const validateCellphone = (value: unknown):FieldError | undefined =>{
    const phoneDigits = value ? String(value).replace(/\D/g, '').trim() : '';

    if(phoneDigits.length < 10){
        return { type: 'min', message: 'O celular deve ter no mínimo 10 dígitos (com DDD).'}
    }else if(phoneDigits.length > 11){
        return { type: 'max', message: 'O celular deve ter no máximo 11 dígitos (com DDD).'}
    }
}