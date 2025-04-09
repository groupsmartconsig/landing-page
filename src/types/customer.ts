export interface CreateCustomerRequest {
  customerOrigin: CustomerOrigin;
  assignedOperatorRequest?: AssignedOperatorRequest
  name: string;
  phonenumber: string;
  cpf: string;
  isWhatsappPhoneNumber?: boolean;
  amountContractsElegible: number;
}

export interface CustomerOrigin {
  creationOrigin: string;
  creationDate?: string;
  marketingDetails: MarketingDetails;
}

export interface MarketingDetails {
  utmSource: string;
  utmCampaign: string;
  utmId: string;
  utmContent: string;
}

export interface AssignedOperatorRequest {
  id: string
  name: string
  username: string
  phonenumber: string
  teamDetails: Team
}

export interface Team {
  teamId: string
  teamName: string
}