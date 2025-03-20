export interface InteractionResponse {
  id: string
  operator: Operator
  customer: Customer
  leadStatus: string
}

export interface Operator {
  id: string
  name: string
  username: string
  phonenumber: string
  teamId: string
  isActiveToday: boolean
}

export interface Customer {
  name: string
  cpf: string
  phoneNumber: string
}
