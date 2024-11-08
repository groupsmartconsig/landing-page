"use client"

import { EllipsisLoader } from "@/components/shared/ellipsis-loader";
import { Button } from "@/components/ui/button";
import { useProposals } from "@/hooks/use-proposals";
import { CircleDollarSignIcon } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
import { MobilePortabilityDataContent } from "./portability";
import { MobileRefinancingDataContent } from "./refinancing";

export default function MobileFormSimulationPage() {
  const { formState } = useForm();
  const { proposals } = useProposals();
  const route = useRouter()

  return (
    <>
      <div className="flex justify-center items-center space-x-4">
        <span className="p-3 border rounded-2xl">
          <CircleDollarSignIcon className="text-green-500" />
        </span>
        <div>
          <h1 className="text-lg font-semibold leading-none tracking-tight">
            Resultado da sua simulação
          </h1>
          <h3 className="max-w-64 text-sm text-muted-foreground">
            Visualize as propostas disponíveis.
          </h3>
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
              <MobilePortabilityDataContent
                proposal={proposal}
                index={index}
                portability={portability}
              />
            ) : (
              <MobileRefinancingDataContent
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

      <div className="w-full max-w-72 mx-auto mt-auto flex flex-col gap-2 p-0 pt-3">
        <Button
          type="button"
          className="bg-green-500 text-white text-lg font-bold w-full flex justify-center items-center px-6 hover:opacity-80 hover:text-black"
          onClick={() => route.push("/area-cliente/atendimento")}
        >
          {!formState.isSubmitting && <span>Resgatar valor total</span>}
          {formState.isSubmitting && <EllipsisLoader />}
        </Button>
      </div>
    </>
  )
}