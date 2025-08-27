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