import { AddressTypes } from "@/app/(partners)/brasilcard/consts/adresses-types-const";
import { States } from "@/app/(partners)/brasilcard/consts/states-const";
import { FieldError } from "react-hook-form";

export const validateCEP = (value: unknown):FieldError | undefined =>{
    const cepDigits = value ? String(value).replace(/\D/g, '') : '';

    if(cepDigits.length !== 8){
        return { type: 'length', message: 'O CEP deve conter 8 dígitos.'}
    }
}

export const validateCity = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value === 'string' && value.trim().length < 2)) {
        return { type: 'min', message: 'A cidade é obrigatória.'}
    }
}

export const validateState = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value !== 'string')) {
        return { type: 'length', message: 'A UF é obrigatório.'}
    }else if(States.findIndex(state => state.codigo === value) === -1){
        return { type: 'custom', message: 'UF inválida.'}
    }
}

export const validateTypeStreet = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value !== 'string')) {
        return { type: 'required', message: 'O tipo de logradouro é obrigatório.'}
    }else if(AddressTypes.findIndex(type => type.id_tipo_logradouro.toString() === value) === -1){
        return { type: 'custom', message: 'Tipo de logradouro inválido.'}
    }
}

export const validateAddress = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value === 'string' && value.trim().length < 3)) {
        return { type: 'min', message: 'O logradouro é obrigatório.'}
    }
}

export const validateNeighborhood = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value === 'string' && value.trim().length < 3)) {
        return { type: 'min', message: 'O bairro é obrigatório.'}
    }
}
