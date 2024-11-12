import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ContractsPortabilityDetails, Proposal } from "@/types/proposals";
import { ChevronRightIcon, EyeIcon } from "lucide-react";

import Link from "next/link";

interface MobilePortabilityContentProps {
  proposal: Proposal;
  index: number;
  portability: ContractsPortabilityDetails;
}

export function MobilePortabilityContent({
  proposal,
  index,
  portability
}: MobilePortabilityContentProps) {
  return (
    <CarouselItem key={proposal.id}>
      <ScrollArea className="h-96 py-6">
        <Card className="p-1">
          <CardContent className="aspect-square flex flex-col items-center justify-between space-y-3 p-4">
            <Badge className="bg-green-500 text-white">
              Proposta {index + 1}
            </Badge>

            <Badge className="flex items-center justify-center bg-gray-200 text-black text-lg font-bold py-2 max-w-md w-full rounded-full hover:bg-gray-100">
              {portability?.nomeBancoContratoAtual}
            </Badge>

            <div className="w-full text-center pb-4 border-b border-gray-400">
              <span className="text-lg font-bold">
                Taxa de Juros
              </span>
              <div className="flex justify-between items-center pt-6">
                <div className="flex flex-col space-y-3">
                  <span className="text-lg">Atual</span>
                  <p className="text-xl font-bold text-destructive">
                    {portability?.antigaTaxaJuros
                      .toFixed(2)
                      .replace(".", ",")
                    }% a.m.
                  </p>
                </div>
                <ChevronRightIcon className="size-12" />
                <div className="flex flex-col space-y-3">
                  <span className="text-lg font-semibold">Reduzida</span>
                  <p className="text-xl font-bold text-green-500">
                    {portability?.novaTaxaJuros
                      .toFixed(2)
                      .replace(".", ",")
                    }% a.m.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full text-center pb-4 border-b border-gray-400">
              <span className="text-lg font-bold">
                Valor da parcela
              </span>
              <div className="flex justify-between items-center gap-6 pt-6">
                <div className="flex flex-col space-y-3">
                  <span className="text-lg">Atual</span>
                  <p className="text-lg font-bold text-destructive">
                    {Number(
                      portability?.antigoValorParcela
                    ).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <div className="flex flex-col space-y-3">
                  <span className="text-lg font-semibold">Reduzida</span>
                  <p className="text-lg font-bold text-green-500">
                    {Number(
                      portability?.novoValorParcela
                    ).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <span className="text-2xl text-center font-bold">
                Econômia na redução
              </span>
              <div className="flex items-center space-x-3">
                <ChevronRightIcon className="size-12" />
                <p className="text-4xl font-bold text-green-500">
                  {Number(portability?.economiaReducao)
                    .toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })
                    .replace(/(\d)\d*\.(\d)/, "*.*$2")}
                </p>
              </div>
              <span className="text-muted-foreground text-xs text-center font-medium">
                *Clique abaixo para acessar o valor total
              </span>
            </div>
          </CardContent>
        </Card>
      </ScrollArea>

      {/* <MobilePersonData personData={proposal.clienteDadosPessoais} /> */}

      <Link href="https://www.redirectmais.com/run/anuncio-teste">
        <Button
          type="button"
          variant="outline"
          className="w-full flex items-center gap-2"
        >
          <EyeIcon className="size-4" />
          Ver todos os detalhes
        </Button>
      </Link>
    </CarouselItem>
  )
}