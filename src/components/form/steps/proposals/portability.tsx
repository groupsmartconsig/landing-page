import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ContractsPortabilityDetails, Proposal } from "@/types/proposals";
import { PersonData } from "./person-data";

interface PortabilityContentProps {
  proposal: Proposal;
  index: number;
  portability: ContractsPortabilityDetails;
}

export function PortabilityContent({
  proposal,
  index,
  portability
}: PortabilityContentProps) {
  return (
    <CarouselItem key={proposal.id}>
      <ScrollArea className="p-1 h-64">
        <Card>
          <CardContent className="aspect-square flex flex-col items-center justify-between space-y-3 p-6">
            <Badge className="bg-green-500 text-white">
              Proposta {index + 1}
            </Badge>
            <div className="text-center">
              <p className="font-semibold">Econômia na redução</p>
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
              <p className="font-semibold">Valor da Parcela</p>
              <p className="text-xl font-bold text-green-500">
                {Number(
                  portability?.novoValorParcela
                ).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Taxa de Juros</p>
              <p className="text-lg font-bold text-green-500">
                {portability?.novaTaxaJuros
                  .toFixed(2)
                  .replace(".", ",")
                }% a.m.`
              </p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Banco</p>
              <p className="font-bold text-green-500">
                {portability?.novoBancoAprovado}
              </p>
            </div>
          </CardContent>
        </Card>
      </ScrollArea>
      <PersonData personData={proposal.clienteDadosPessoais} />
    </CarouselItem>
  )
}