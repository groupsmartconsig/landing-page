import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { useStepper } from "@/hooks/use-stepper";
import { ContractsPortabilityDetails, Proposal } from "@/types/proposals";
import { ChevronRightIcon, EyeIcon } from "lucide-react";

interface DesktopPortabilityContentProps {
  proposal: Proposal;
  index: number;
  portability: ContractsPortabilityDetails;
}

export function DesktopPortabilityContent({
  index,
  portability
}: DesktopPortabilityContentProps) {
  const { nextStep } = useStepper();

  return (
    <CarouselItem key={index}>
      <Card className="p-1">
        <CardContent className="aspect-square flex flex-col items-center justify-between space-y-3 p-6">
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
            <div className="flex justify-between items-center pt-6">
              <div className="flex flex-col space-y-3">
                <span className="text-lg">Atual</span>
                <p className="text-xl font-bold text-destructive">
                  {Number(
                    portability?.antigoValorParcela
                  ).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
              <ChevronRightIcon className="size-12" />
              <div className="flex flex-col space-y-3">
                <span className="text-lg font-semibold">Reduzida</span>
                <p className="text-xl font-bold text-green-500">
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
            <span className="text-2xl font-bold">
              Economia na redução
            </span>
            <div className="flex items-center space-x-6">
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
            <span className="text-muted-foreground font-medium">
              *Clique abaixo para acessar o valor total
            </span>
          </div>
        </CardContent>
      </Card>

      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center gap-2 my-3"
        onClick={() => nextStep()}
      >
        <EyeIcon className="size-4" />
        Ver todos os detalhes
      </Button>
    </CarouselItem>
  )
}