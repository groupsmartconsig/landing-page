import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { ContractsPortabilityDetails, Proposal } from "@/types/proposals";
import { DesktopPersonData } from "./person-data";

interface DesktopPortabilityContentProps {
  proposal: Proposal;
  index: number;
  portability: ContractsPortabilityDetails;
}

export function DesktopPortabilityContent({
  proposal,
  index,
  portability
}: DesktopPortabilityContentProps) {
  return (
    <CarouselItem key={proposal.id}>
      <Card className="p-1">
        <CardContent className="aspect-square flex flex-col items-center justify-between space-y-3 p-6">
          <Badge className="bg-green-500 text-white">
            Proposta {index + 1}
          </Badge>

          <div className="text-center">
            <span className="font-semibold">Econômia na redução</span>
            <p className="text-2xl font-bold text-green-500">
              {Number(
                portability?.economiaReducao
              ).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>

          <div className="text-center">
            <span className="font-semibold">Banco atual</span>
            <p className="font-bold text-green-500">
              {portability?.nomeBancoContratoAtual}
            </p>
          </div>

          <div className="text-center">
            <span className="font-semibold">Valor da Parcela</span>
            <div className="flex flex-col">
              <p className="text-xl font-bold text-destructive">
                <small>Antes</small> {""}
                {Number(
                  portability?.antigoValorParcela
                ).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <p className="text-xl font-bold text-green-500">
                <small>Depois</small> {""}
                {Number(
                  portability?.novoValorParcela
                ).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </div>

          <div className="text-center">
            <span className="font-semibold">Taxa de Juros</span>
            <div className="flex flex-col">
              <p className="text-xl font-bold text-destructive">
                <small>Antes</small> {""}
                {portability?.antigaTaxaJuros
                  .toFixed(2)
                  .replace(".", ",")
                }% a.m.`
              </p>

              <p className="text-lg font-bold text-green-500">
                <small>Depois</small> {""}
                {portability?.novaTaxaJuros
                  .toFixed(2)
                  .replace(".", ",")
                }% a.m.`
              </p>
            </div>
          </div>

          <div className="text-center">
            <span className="font-semibold">Banco aprovado</span>
            <p className="font-bold text-green-500">
              {portability?.novoBancoAprovado}
            </p>
          </div>
        </CardContent>
      </Card>

      <DesktopPersonData personData={proposal.clienteDadosPessoais} />
    </CarouselItem>
  )
}