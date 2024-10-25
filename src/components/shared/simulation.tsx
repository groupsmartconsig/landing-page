'use client'

import { SimulationButton } from "@/components/shared/simulation-button";

import simulation from "@/app/assets/images/simulation.png";
import Image from "next/image";

export function SimulationContainer() {
  return (
    <div className="bg-black w-full flex flex-col items-center py-12 sm:bg-transparent sm:py-0">
      <div className="flex flex-col justify-center space-y-4">
        <span className="text-3xl text-primary font-bold leading-none tracking-tighter px-2.5 sm:text-4xl">
          Exemplo de simulação
        </span>
        <p className="max-w-[322px] mx-auto text-white font-medium sm:hidden">
          Reduzimos o juros e valor de parcela do seu empréstimo, garantindo economia até o fim do contrato. Além disso, sua margem consignável e benefício irão aumentar, liberando novo crédito. Simule agora e aproveite!
        </p>
      </div>

      <Image
        src={simulation}
        width={3375}
        height={4800}
        className="h-[600px] w-auto rounded-xl sm:h-[700px]"
        alt="Simulação de crédito"
        priority
      />

      <div className="w-full px-6">
        <SimulationButton
          title="Simule sem compromisso"
        />
      </div>
    </div>
  )
}