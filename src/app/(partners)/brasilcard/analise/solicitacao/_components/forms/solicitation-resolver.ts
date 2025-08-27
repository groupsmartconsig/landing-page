import { AddressTypes } from '@/app/(partners)/brasilcard/consts/adresses-types-const';
import { MaritalStatus } from '@/app/(partners)/brasilcard/consts/marital-status-const';
import { Occupations } from '@/app/(partners)/brasilcard/consts/occupations-const';
import { States } from '@/app/(partners)/brasilcard/consts/states-const';
import { isValidCpf } from '@/utils/mask/mask-cpf';
import { isValidDate } from '@/utils/mask/mask-date';

import type { Resolver, FieldErrors, FieldError } from 'react-hook-form';

export interface SolicitationFormData {
    name: string;
    cpf: string;
    identity_document_number: string;
    identity_document_state: string;
    cellphone: string;
    email: string;
    birth_date: string;
    sex: string;
    mother_name: string;
    zipcode: string;
    city: string;
    state: string;
    type_street: string;
    address: string;
    number: string;
    neighborhood: string;
    complement?: string; 
    marital_status: string;
    job: string;
    job_company: string;
    employment_status: string;
    income: string;
    politically_exposed_position: boolean;
    politically_exposed_position_date?: string;
    politically_exposed_relative: boolean;
}

const validateName = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value === 'string' && value.trim().length < 2)) {
        return { type: 'min', message: 'O nome completo é obrigatório.'}
    }else if(!value || (typeof value === 'string' &&value.trim().split(' ').length < 2)){
        return  { type: 'custom', message: 'Você deve preencher o seu nome completo.'}
    }
}

const validateCPF = (value: unknown):FieldError | undefined =>{
    const erros: FieldErrors<SolicitationFormData> = {};
    const cpfDigits = value ? String(value).replace(/\D/g, '') : '';

    if(cpfDigits.length !== 11){
        return { type: 'length', message: 'O CPF deve conter 11 dígitos.'}
    }else if(!isValidCpf(cpfDigits)){
        return { type: 'custom', message: 'CPF inválido.'}
    }
}

const validateDocumentNumber = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value === 'string' && value.trim().length < 5)) {
        return { type: 'min', message: 'O número do RG é obrigatório.'}
    }
}

const validateDocumentState = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value === 'string' && value.trim().length !== 2)) {
        return { type: 'length', message: 'A UF do RG deve ter 2 caracteres.'}
    }
}

const validateCellphone = (value: unknown):FieldError | undefined =>{
    const phoneDigits = value ? String(value).replace(/\D/g, '').trim() : '';

    if(phoneDigits.length < 10){
        return { type: 'min', message: 'O celular deve ter no mínimo 10 dígitos (com DDD).'}
    }else if(phoneDigits.length > 11){
        return { type: 'max', message: 'O celular deve ter no máximo 11 dígitos (com DDD).'}
    }
}

const validateEmail = (value: unknown):FieldError | undefined =>{
    if(!value){
        return { type: 'required', message: 'O e-mail é obrigatório.'}
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(String(value))){
        return { type: 'pattern', message: 'Formato de e-mail inválido.'}
    }
}

const validateBirthDate = (value: unknown):FieldError | undefined =>{
    if(isValidDate(value) === false) {
        console.log(!isValidDate(value));
        return { type: 'pattern', message: 'Data de aniversário é obrigatório'}
    }
}

const validateMotherName = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value === 'string' && value.trim().length < 3)) {
        return { type: 'min', message: 'O nome completo da mãe é obrigatório.'}
    }else if(!value || (typeof value === 'string' &&value.trim().split(' ').length < 2)){
        return  { type: 'custom', message: 'Você deve preencher o nome completo da mãe.'}
    }
}

const validateCEP = (value: unknown):FieldError | undefined =>{
    const cepDigits = value ? String(value).replace(/\D/g, '') : '';

    if(cepDigits.length !== 8){
        return { type: 'length', message: 'O CEP deve conter 8 dígitos.'}
    }
}

const validateCity = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value === 'string' && value.trim().length < 2)) {
        return { type: 'min', message: 'A cidade é obrigatória.'}
    }
}

const validateState = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value !== 'string')) {
        return { type: 'length', message: 'A UF é obrigatório.'}
    }else if(States.findIndex(state => state.codigo === value) === -1){
        return { type: 'custom', message: 'UF inválida.'}
    }
}

const validateTypeStreet = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value !== 'string')) {
        return { type: 'required', message: 'O tipo de logradouro é obrigatório.'}
    }else if(AddressTypes.findIndex(type => type.id_tipo_logradouro.toString() === value) === -1){
        return { type: 'custom', message: 'Tipo de logradouro inválido.'}
    }
}

const validateAddress = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value === 'string' && value.trim().length < 3)) {
        return { type: 'min', message: 'O logradouro é obrigatório.'}
    }
}

const validateNeighborhood = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value === 'string' && value.trim().length < 3)) {
        return { type: 'min', message: 'O bairro é obrigatório.'}
    }
}

const validateMaritalStatus = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value !== 'string')) {
        return { type: 'required', message: 'O estado civil é obrigatório.'}
    }else if(MaritalStatus.findIndex(status => status.codigo.toString() === value) === -1){
        return { type: 'custom', message: 'Estado civil inválido.'}
    }
}

const validateJob = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value === 'string' && value.trim().length < 2)) {
        return { type: 'min', message: 'A profissão é obrigatória.'}
    }else if(Occupations.findIndex(occupation => occupation.codigo.toString() === value.toString()) === -1){
        return { type: 'custom', message: 'Profissão inválida.'}
    }
}

const validateEmploymentStatus = (value: unknown):FieldError | undefined =>{
    if(!value || (typeof value !== 'string')) {
        return { type: 'required', message: 'A situação empregatícia é obrigatória.'}
    }
}

const validateIncome = (value: unknown):FieldError | undefined =>{
    if(!value) {
        return { type: 'required', message: 'A renda é obrigatória.'}
    }
}

const validatePoliticallyExposedPositionDate = (value: unknown):FieldError | undefined =>{
    if(!value) {
        return { type: 'required', message: 'O campo é obrigatório.'}
    }
}

export const solicitationResolver: Resolver<SolicitationFormData> = async (values) => {
    const errors: FieldErrors<SolicitationFormData> = {};

    errors.name = validateName(values.name);
    errors.cpf = validateCPF(values.cpf);
    errors.identity_document_number= validateDocumentNumber(values.identity_document_number);
    errors.identity_document_state= validateDocumentState(values.identity_document_state);
    errors.cellphone= validateCellphone(values.cellphone);
    errors.email= validateEmail(values.email);
    errors.birth_date= validateBirthDate(values.birth_date);
    errors.mother_name= validateMotherName(values.mother_name);
    
    !values.sex && (errors.sex = { type: 'required', message: 'O gênero é obrigatório.' });
    
    errors.zipcode = validateCEP(values.zipcode);
    errors.city = validateCity(values.city);
    errors.state = validateState(values.state);
    errors.type_street = validateTypeStreet(values.type_street);
    errors.address = validateAddress(values.address);
    errors.neighborhood = validateNeighborhood(values.neighborhood);
    
    !values.number && (errors.number = { type: 'required', message: 'O número é obrigatório.' });

    errors.marital_status = validateMaritalStatus(values.marital_status);
    errors.job = validateJob(values.job);
    errors.employment_status = validateEmploymentStatus(values.employment_status);
    errors.income = validateIncome(values.income);

    values.politically_exposed_position && (
        errors.politically_exposed_position_date = validatePoliticallyExposedPositionDate(values.politically_exposed_position_date)
    );
        
    const isValid = Object.keys(errors).length === 0;

    return {
        values: isValid ? values : {},
        errors: errors,
    };
};