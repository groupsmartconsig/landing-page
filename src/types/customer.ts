export interface CreateCustomerRequest {
  customerOrigin: CustomerOrigin;
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
