'use client'

import { SimulationButton } from "@/components/shared/simulation-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import elderlyThoughtful from "@/app/assets/images/elderly-thoughtful.png";
import Image from "next/image";

export function InformativeContainer() {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden rounded-none border-none md:max-w-full">
      <CardContent className="p-0">
        <div className="bg-gray-200 text-black py-12">
          {/* Mobile */}
          <div className="relative bg-red-500 h-72 max-w-[280px] mx-auto rounded-t-2xl overflow-hidden md:hidden">
            <Image
              src={elderlyThoughtful}
              width={500}
              height={700}
              alt="Thoughtful old woman"
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <CardHeader className="relative z-10 max-w-[370px] mx-auto bg-white text-black p-6 rounded-xl md:hidden">
            <div className="flex flex-col justify-center space-y-2">
              <CardTitle className="text-2xl font-bold leading-tight">
                Como funciona a portabilidade?
              </CardTitle>
              <CardDescription className="text-base text-black tracking-tight pb-4">
                A portabilidade é simples e rápida: nós cuidamos de toda a parte burocrática para você. Basta solicitar a transferência, que nós vamos apresentar a melhor condição para você, e pronto! Em poucos dias, seu empréstimo estará em um novo banco com parcelas menores e, possivelmente, valor liberado para uso. Faça uma simulação gratuita agora mesmo.
              </CardDescription>
            </div>
            <SimulationButton title="Quero simular agora" />
          </CardHeader>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-2 md:place-items-center md:h-[680px] md:gap-6 xl:max-w-[1600px] lg:mx-auto lg:w-full">
            <div className="relative bg-red-500 h-full max-w-md mx-auto rounded-2xl overflow-hidden">
              <Image
                src={elderlyThoughtful}
                width={500}
                height={700}
                alt="Thoughtful old woman"
                className="object-cover w-full h-full"
                priority
              />
            </div>

            <CardHeader className="relative z-10 flex flex-col justify-center space-y-2 h-[80%] max-w-2xl mx-auto bg-white text-black py-6 px-12 rounded-2xl">
              <div className="flex flex-col justify-center space-y-2">
                <CardTitle className="text-4xl font-bold leading-tight">
                  Como funciona a portabilidade?
                </CardTitle>

                <CardDescription className="text-2xl text-black tracking-tight pb-4">
                  A portabilidade é simples e rápida: nós cuidamos de toda a parte burocrática para você. Basta solicitar a transferência,
                  que nós vamos apresentar a melhor condição para você, e pronto! Em poucos dias, seu empréstimo estará em um novo banco
                  com parcelas menores e, possivelmente, valor liberado para uso. Faça uma simulação gratuita agora mesmo.
                </CardDescription>
              </div>

              <SimulationButton 
                title="Quero simular agora"
                className="text-lg font-semibold"
              />
            </CardHeader>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}