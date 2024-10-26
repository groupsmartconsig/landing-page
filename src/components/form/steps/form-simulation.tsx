import { EllipsisLoader } from "@/components/shared/ellipsis-loader";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { DrawerDescription, DrawerTitle } from "@/components/ui/drawer";
import { useProposals } from "@/hooks/use-proposals";
import { useStepper } from "@/hooks/use-stepper";
import { DataService } from "@/services/data-service";
import { CircleDollarSignIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { PortabilityContent } from "./proposals/portability";
import { RefinancingContent } from "./proposals/refinancing";

export function FormSimulation() {
  const { formState } = useForm();
  const { proposals } = useProposals();
  const { nextStep } = useStepper();

  const name = localStorage.getItem("nome");
  const phone = localStorage.getItem("contato");
  const document = localStorage.getItem("cpf");

  const handleCreateCustomer = async () => {
    try {
      const fullName = name ? name : "";
      const replaceDocumentValue = document ? document.replace(/\D/g, "") : "";
      const replacePhoneValue = phone ? phone.replace(/[\s-()]/g, "") : "";

      await DataService.createCustomer(
        fullName, replacePhoneValue, replaceDocumentValue
      );

      nextStep();
    } catch (error) {
      console.error("Erro ao autenticar:", error);
    }
  }

  return (
    <form>
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
          className="w-full flex justify-center items-center font-medium px-6 hover:bg-black hover:text-primary"
          onClick={handleCreateCustomer}
        >
          {!formState.isSubmitting && <span>Quero fazer a portabilidade</span>}
          {formState.isSubmitting && <EllipsisLoader />}
        </Button>
      </div>
    </form>
  )
}
