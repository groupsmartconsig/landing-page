import { FieldError } from "react-hook-form"

export const validateEmail = (value: unknown):FieldError | undefined =>{
    if(!value){
        return { type: 'required', message: 'O e-mail é obrigatório.'}
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(String(value))){
        return { type: 'pattern', message: 'Formato de e-mail inválido.'}
    }
}