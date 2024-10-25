'use client'

import { SimulationButton } from "@/components/shared/simulation-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import elderlyHeadset from "@/app/assets/images/elderly-headset.png";
import Image from "next/image";

export function PortabilityContainer() {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden rounded-none border-none">
      <CardContent className="p-0">
        <div className="bg-white text-black py-12">
          <div className="relative bg-primary h-72 max-w-[280px] mx-auto rounded-t-2xl overflow-hidden">
            <Image
              src={elderlyHeadset}
              width={422}
              height={591}
              alt="Elderly headset man"
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <CardHeader className="relative z-10 max-w-[370px] mx-auto bg-black p-6 rounded-xl">
            <CardTitle className="text-3xl text-primary-red text-center font-bold leading-tight">
              Quem pode fazer a Portabilidade?
            </CardTitle>
            <CardDescription className="text-base text-white tracking-tight pt-2 pb-4">
              Se você é aposentado ou pensionista do INSS, você pode solicitar a portabilidade com a Smart Consig. Basta ter um contrato de empréstimo ativo com outro banco e nós vamos cuidar do resto!
            </CardDescription>
            <SimulationButton title="Fazer a minha portabilidade" />
          </CardHeader>
        </div>
      </CardContent>
    </Card>
  )
}