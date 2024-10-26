import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { ContractsRefinancingDetails, Proposal } from "@/types/proposals";
import { EyeIcon } from "lucide-react";

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
      <div className="p-1">
        <Card>
          <CardContent className="aspect-square flex flex-col items-center justify-between space-y-3 p-6">
            <Badge className="bg-green-500 text-white">
              Proposta {index + 1}
            </Badge>
            <div className="text-center">
              <p className="font-semibold">Troco de volta</p>
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
              <p className="font-semibold">Valor da Parcela</p>
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
              <p className="font-semibold">Taxa de Juros</p>
              <p className="text-lg font-bold text-green-500">
                {refinancing?.novaTaxaJuros
                  .toFixed(2)
                  .replace(".", ",")
                }% a.m.`
              </p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Banco</p>
              <p className="font-bold text-green-500">
                {refinancing?.nomeBancoNovoContrato}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-full pt-4">
        <Button
          type="button"
          variant="outline"
          className="w-full flex items-center gap-2"
        >
          <EyeIcon className="size-4" />
          Ver todos os detalhes
        </Button>
      </div>
    </CarouselItem>
  )
}