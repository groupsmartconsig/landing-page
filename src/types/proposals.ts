export interface PersonDetails {
  numeroBeneficio: string;
  ufBeneficio: string;
  nome: string;
  cpf: string;
  dataNascimento: string;
  idade: string;
  beneficioEspecie: string;
  meioPagamento: string;
  banco: string;
  agBanco: string;
  contaCorrente: string;
  endereco: any;
  cep: any;
  bairro: any;
  cidade: string;
  uf: string;
}

export interface ContractsPortabilityDetails {
  codigoBancoContratoAtual: number
  nomeBancoContratoAtual: string;
  numeroContratoAtual: string;
  novoBancoAprovado: string;
  antigoSaldoDevedor: number;
  novoSaldoDevedor: number;
  antigoValorParcela: number;
  novoValorParcela: number;
  antigaTaxaJuros: number;
  novaTaxaJuros: number;
  economiaReducao: number;
  qtdParcelasPagas: number
}

export interface ContractsRefinancingDetails {
  codigoBancoContratoAtual: number
  nomeBancoContratoAtual: string
  nomeBancoNovoContrato: string
  numeroContratoAtual: string
  valorTroco: number
  antigaTaxaJuros: number
  novaTaxaJuros: number
  saldoDevedor: number
  saldoDevedorReduzido: number
  valorParcela: number
  qtdParcelasPagas: number
}

export interface Proposal {
  id: string;
  urlImagem: string;
  clienteDadosPessoais: PersonDetails;
  condicoesContratuaisPortabilidade: ContractsPortabilityDetails | null;
  condicoesContratuaisRefinanciamento: ContractsRefinancingDetails | null;
}