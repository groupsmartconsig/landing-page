import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { ContractsRefinancingDetails, Proposal } from "@/types/proposals";
import { PersonData } from "./person-data";

interface RefinancingContentProps {
  proposal: Proposal;
  index: number;
  refinancing: ContractsRefinancingDetails | null;
}

export function RefinancingContent({
  proposal,
  index,
  refinancing
}: RefinancingContentProps) {
  return (
    <CarouselItem key={proposal.id}>
      <Card className="p-1">
        <CardContent className="aspect-square flex flex-col items-center justify-between space-y-3 p-6">
          <Badge className="bg-green-500 text-white">
            Proposta {index + 1}
          </Badge>

          <div className="text-center">
            <span className="font-semibold">Troco de volta</span>
            <p className="text-2xl font-bold text-green-500">
              {Number(
                refinancing?.valorTroco
              ).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>

          <div className="text-center">
            <span className="font-semibold">Banco atual</span>
            <p className="font-bold text-green-500">
              {refinancing?.nomeBancoContratoAtual}
            </p>
          </div>

          <div className="text-center">
            <span className="font-semibold">Valor da Parcela</span>
            <p className="text-xl font-bold text-green-500">
              {Number(
                refinancing?.valorParcela
              ).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>

          <div className="text-center">
            <span className="font-semibold">Taxa de Juros</span>
            <div className="flex flex-col">
              <p className="text-xl font-bold text-destructive">
                <small>Antes</small> {""}
                {refinancing?.antigaTaxaJuros
                  .toFixed(2)
                  .replace(".", ",")
                }% a.m.`
              </p>

              <p className="text-lg font-bold text-green-500">
                <small>Depois</small> {""}
                {refinancing?.novaTaxaJuros
                  .toFixed(2)
                  .replace(".", ",")
                }% a.m.`
              </p>
            </div>
          </div>

          <div className="text-center">
            <span className="font-semibold">Saldo devedor</span>
            <div className="flex flex-col">
              <p className="text-xl font-bold text-destructive">
                <small>Antes</small> {""}
                {Number(
                  refinancing?.saldoDevedor ?
                    refinancing.saldoDevedor + refinancing?.valorTroco
                    : 0
                ).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <p className="text-xl font-bold text-green-500">
                <small>Depois</small> {""}
                {Number(
                  refinancing?.saldoDevedorReduzido
                ).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="font-semibold">Banco aprovado</p>
            <p className="font-bold text-green-500">
              {refinancing?.nomeBancoNovoContrato}
            </p>
          </div>
        </CardContent>
      </Card>
      
      <PersonData personData={proposal.clienteDadosPessoais} />
    </CarouselItem>
  )
}