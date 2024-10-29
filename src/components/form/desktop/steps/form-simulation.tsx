import { EllipsisLoader } from "@/components/shared/ellipsis-loader";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import {
  DialogDescription,
  DialogFooter,
  DialogTitle
} from "@/components/ui/dialog";
import { useProposals } from "@/hooks/use-proposals";
import { useStepper } from "@/hooks/use-stepper";
import { DataService } from "@/services/data-service";
import { CircleDollarSignIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { DesktopPortabilityContent } from "./proposals/portability";
import { DesktopRefinancingContent } from "./proposals/refinancing";

export function DesktopFormSimulation() {
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
    <>
      <div className="w-full flex items-center space-x-4 pt-8 pb-4 px-6">
        <span className="p-3 border rounded-2xl">
          <CircleDollarSignIcon className="text-green-500" />
        </span>
        <div>
          <DialogTitle className="text-lg">
            Resultado da sua simulação
          </DialogTitle>
          <DialogDescription className="max-w-64 text-sm">
            Visualize as propostas disponíveis.
          </DialogDescription>
        </div>
      </div>

      <Carousel className="w-full max-w-sm mx-auto">
        <CarouselContent>
          {proposals.map((proposal, index) => {
            const {
              condicoesContratuaisPortabilidade: portability,
              condicoesContratuaisRefinanciamento: refinancing
            } = proposal;

            return portability ? (
              <DesktopPortabilityContent
                proposal={proposal}
                index={index}
                portability={portability}
              />
            ) : (
              <DesktopRefinancingContent
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

      <DialogFooter className="w-full mx-auto px-6">
        <Button
          type="button"
          className="bg-green-500 text-white max-w-96 w-full mx-auto flex justify-center items-center font-medium px-6 hover:opacity-80 hover:text-black"
          onClick={handleCreateCustomer}
        >
          {!formState.isSubmitting && <span>Quero fazer a portabilidade</span>}
          {formState.isSubmitting && <EllipsisLoader />}
        </Button>
      </DialogFooter>
    </>
  )
}