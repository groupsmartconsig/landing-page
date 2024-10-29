'use client'

import { SimulationMobileButton } from "@/components/shared/simulation-mobile-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { SimulationDesktopButton } from "./simulation-desktop-button";

import elderlyHeadset from "@/app/assets/images/elderly-headset.png";
import Image from "next/image";

export function PortabilityContainer() {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden rounded-none border-none md:max-w-full">
      <CardContent className="p-0">
        <div className="bg-white text-black py-12">
          {/* Mobile */}
          <div className="relative bg-primary h-72 max-w-[280px] mx-auto rounded-t-2xl overflow-hidden md:hidden">
            <Image
              src={elderlyHeadset}
              width={422}
              height={591}
              alt="Elderly headset man"
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <CardHeader className="relative z-10 max-w-[370px] mx-auto bg-black p-6 rounded-xl md:hidden">
            <div className="flex flex-col justify-center space-y-2">
              <CardTitle className="text-2xl text-primary-red font-bold leading-tight">
                Quem pode fazer a Portabilidade?
              </CardTitle>
              <CardDescription className="text-base text-white tracking-tight pb-4">
                Se você é aposentado ou pensionista do INSS, você pode solicitar a portabilidade com a Smart Consig. Basta ter um contrato de empréstimo ativo com outro banco e nós vamos cuidar do resto!
              </CardDescription>
            </div>
            <SimulationMobileButton title="Fazer a minha portabilidade" />
          </CardHeader>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-2 md:place-items-center md:h-[680px] md:gap-6 xl:max-w-[1600px] lg:mx-auto lg:w-full">
            <CardHeader className="relative z-10 flex flex-col justify-center space-y-2 h-[80%] max-w-2xl mx-auto bg-black py-6 px-12 rounded-2xl">
              <div className="flex flex-col justify-center space-y-2">
                <CardTitle className="text-4xl text-primary-red font-bold leading-tight">
                  Quem pode fazer a Portabilidade?
                </CardTitle>

                <CardDescription className="text-2xl text-white tracking-tight pb-4">
                  Se você é aposentado ou pensionista do INSS, você pode solicitar a portabilidade com a Smart Consig.
                  Basta ter um contrato de empréstimo ativo com outro banco e nós vamos cuidar do resto!
                </CardDescription>
              </div>

              <SimulationDesktopButton title="Desejo fazer a portabilidade" />
            </CardHeader>

            <div className="relative bg-primary h-full max-w-md mx-auto rounded-2xl overflow-hidden">
              <Image
                src={elderlyHeadset}
                width={500}
                height={700}
                alt="Elderly headset man"
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}