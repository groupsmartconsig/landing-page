import { isValidDate } from "@/utils/mask/mask-date";
import { FieldError } from "react-hook-form";

export const validateBirthDate = (value: unknown):FieldError | undefined =>{
    if(isValidDate(value) === false) {
        return { type: 'pattern', message: 'Data de aniversário é obrigatório'}
    }
}

export const validatePoliticallyExposedPositionDate = (value: unknown):FieldError | undefined =>{
    if(!value) {
        return { type: 'required', message: 'O campo é obrigatório.'}
    }
}