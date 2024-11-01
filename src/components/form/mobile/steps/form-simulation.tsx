import { EllipsisLoader } from "@/components/shared/ellipsis-loader";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { DrawerDescription, DrawerFooter, DrawerTitle } from "@/components/ui/drawer";
import { useProposals } from "@/hooks/use-proposals";
import { useStepper } from "@/hooks/use-stepper";
import { CircleDollarSignIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { MobilePortabilityContent } from "./proposals/portability";
import { MobileRefinancingContent } from "./proposals/refinancing";

export function MobileFormSimulation() {
  const { formState } = useForm();
  const { proposals } = useProposals();
  const { nextStep } = useStepper();
  
  const handleCreateCustomer =  () => nextStep();

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

      <Carousel className="w-full max-w-72 mx-auto">
        <CarouselContent>
          {proposals.map((proposal, index) => {
            const {
              condicoesContratuaisPortabilidade: portability,
              condicoesContratuaisRefinanciamento: refinancing
            } = proposal;

            return portability ? (
              <MobilePortabilityContent
                proposal={proposal}
                index={index}
                portability={portability}
              />
            ) : (
              <MobileRefinancingContent
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

      <DrawerFooter className="w-full max-w-72 mx-auto p-0">
        <Button
          type="button"
          className="bg-green-500 text-white w-full flex justify-center items-center font-medium px-6 hover:opacity-80 hover:text-black"
          onClick={handleCreateCustomer}
        >
          {!formState.isSubmitting && <span>Quero fazer a portabilidade</span>}
          {formState.isSubmitting && <EllipsisLoader />}
        </Button>
      </DrawerFooter>
    </>
  )
}
