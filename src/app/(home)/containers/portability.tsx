'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { SimulationButton } from "../components/simulation-button";

import elderlyHeadset from "@/app/assets/images/elderly-headset.png";
import Image from "next/image";

export default function PortabilityContainer() {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden rounded-none border-none">
      <CardContent className="p-0">
        <div className="bg-white text-black py-6">
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

          <CardHeader className="relative z-10 max-w-[370px] mx-auto bg-gray-200 text-black p-6 rounded-xl">
            <CardTitle className="text-2xl text-center font-bold leading-tight">
              Quem pode fazer a Portabilidade?
            </CardTitle>
            <CardDescription className="text-base text-black tracking-tight pb-4">
              Se você é aposentado ou pensionista do INSS, você pode solicitar a portabilidade com a Smart Consig. Basta ter um contrato de empréstimo ativo com outro banco e nós vamos cuidar do resto!
            </CardDescription>
            <SimulationButton title="Quero fazer minha portabilidade" />
          </CardHeader>
        </div>
      </CardContent>
    </Card>
  )
}