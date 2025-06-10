import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";

export function PublicServerCustomerSecondaryContainer() {
  return (
    <div className="grid grid-cols-1 px-6 pb-12">
      <div className="size-full py-6">
        <Image
          src="/container-secondary.png"
          width={1536}
          height={1024}
          alt="Homem sorrindo no telefone"
          className="w-full rounded"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-lg text-black font-medium">
          O que é a portabilidade do cartão consignado para servidores?
        </h1>

        <p className="text-[#555]">
          Muitos servidores estão pagando juros rotativos de até 15% ao mês em seus cartões.
        </p>

        <p className="text-[#555]">
          Aqui na Smart Consig, fazemos a transferência do seu cartão para outro banco com taxa fixa de apenas 3,80% ao mês. Com isso, você reduz os juros, a parcela e regulariza sua margem — com mais controle e economia na sua folha.
        </p>
      </div>

      <div className="w-full py-6 space-y-2">
        <Button type="button" className="w-full bg-secondary-red rounded">
          Simular crédito
        </Button>

        <Button type="button" size="sm" variant="ghost" className="mx-auto flex items-center gap-1 text-xs">
          <span>Saiba mais</span>
          <ChevronRightIcon className="size-4" />
        </Button>
      </div>
    </div>
  )
}