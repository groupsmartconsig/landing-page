export interface ClientDataRequest {
    document: string
}

export interface ClientDataResponse {
  is_client: boolean,
  id_customer: number | null,
  id_pre_registration: number | null,
  name: string | null,
  cpf: string | null,
  identity_document_number: string | null,
  identity_document_state: string | null,
  cellphone: string | null,
  email: string | null,
  birth_date: string | null,
  sex: string | null,
  mother_name:string | null,
  zipcode: string | null,
  city: string | null,
  state: string | null,
  address: string | null,
  address_type: string | null,
  number: string | null,
  complement: string | null,
  neighborhood: string | null,
}