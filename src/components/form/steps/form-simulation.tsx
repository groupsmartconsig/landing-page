import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { DrawerDescription, DrawerTitle } from "@/components/ui/drawer";
import { useProposals } from "@/hooks/use-proposals";
import { CircleDollarSignIcon } from "lucide-react";
import { PortabilityContent } from "./proposals/portability";
import { RefinancingContent } from "./proposals/refinancing";

export function FormSimulation() {
  const { proposals } = useProposals();

  return (
    <>
      <div className="flex justify-center items-center space-x-4 pt-8 pb-4">
        <span className="p-3 border rounded-2xl">
          <CircleDollarSignIcon className="text-green-500" />
        </span>
        <div>
          <DrawerTitle className="text-lg">
            Resultado da sua simulação
          </DrawerTitle>
          <DrawerDescription className="max-w-64 text-sm">
            Visualize as propostas disponíveis.
          </DrawerDescription>
        </div>
      </div>

      <Carousel className="w-full max-w-72 mx-auto py-8">
        <CarouselContent>
          {proposals.map((proposal, index) => {
            const {
              condicoesContratuaisPortabilidade: portability,
              condicoesContratuaisRefinanciamento: refinancing
            } = proposal;

            return portability ? (
              <PortabilityContent
                proposal={proposal}
                index={index}
                portability={portability}
              />
            ) : (
              <RefinancingContent
                proposal={proposal}
                index={index}
                refinancing={refinancing}
              />
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="w-full flex flex-col items-center space-y-6 border-t p-8">
        <Button
          type="button"
          className="w-full px-6 hover:bg-black hover:text-primary"
        >
          Quero fazer a portabilidade
        </Button>
      </div>
    </>
  )
}
