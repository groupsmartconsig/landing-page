import { isValidCpf } from "@/utils/mask/mask-cpf";
import { FieldError } from "react-hook-form";

export const validateCPF = (value: unknown):FieldError | undefined =>{
    const cpfDigits = value ? String(value).replace(/\D/g, '') : '';

    if(cpfDigits.length !== 11){
        return { type: 'length', message: 'O CPF deve conter 11 dígitos.'}
    }else if(!isValidCpf(cpfDigits)){
        return { type: 'custom', message: 'CPF inválido.'}
    }
}