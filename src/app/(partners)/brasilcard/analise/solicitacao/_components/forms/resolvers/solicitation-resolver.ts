import type { Resolver, FieldErrors } from 'react-hook-form';

import { SolicitationFormData } from '../types/solicitation-form';
import { validateMotherName, validateName } from '../validators/name-validator';
import { validateCPF } from '../validators/cpf-validator';
import { validateDocumentNumber, validateDocumentState } from '../validators/document-validator';
import { validateCellphone } from '../validators/cellphone-validator';
import { validateEmail } from '../validators/email-validator';
import { validateBirthDate, validatePoliticallyExposedPositionDate } from '../validators/date-validator';
import { validateEmploymentStatus, validateMaritalStatus } from '../validators/status-validator';
import { validateIncome, validateJob } from '../validators/occupation-validator';

import { 
    validateAddress, 
    validateCEP, 
    validateCity, 
    validateNeighborhood, 
    validateState, 
    validateTypeStreet } from '../validators/address-validator';

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