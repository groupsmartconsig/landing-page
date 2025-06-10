import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";

interface StepsProps {
  id: number;
  title: string;
  description: string;
}

const steps: StepsProps[] = [
  {
    id: 1,
    title: "Faça a simulação",
    description: "Verifique os juros atuais do seu cartão consignado."
  },
  {
    id: 2,
    title: "Consulte as condições",
    description: "Veja como podemos reduzir os juros e ajustar sua parcela."
  },
  {
    id: 3,
    title: "Solicite a portabilidade",
    description: "Envie sua solicitação e acompanhe a análise do novo banco."
  },
  {
    id: 4,
    title: "Finalize a contratação",
    description: "Assine digitalmente e aproveite melhores condições no seu cartão consignado."
  },
]

export function PublicServerCustomerThirdContainer() {
  return (
    <div className="bg-[#f5f5f6] grid grid-cols-1 p-6">
      <div className="size-full py-6">
        <Image
          src="/container-third.png"
          width={1536}
          height={1024}
          alt="Homem sorrindo no telefone"
          className="w-full rounded"
        />
      </div>

      <div className="space-y-6">
        <h4 className="text-lg text-black font-medium tracking-tight">
          Saiba como contratar a Portabilidade de Crédito Smart Consig
        </h4>

        {steps.map((item) => (
          <section key={item.id}>
            <div className="flex items-center space-x-6 pb-4">
              <span className="text-2xl text-secondary-red font-semibold">
                {item.id}
              </span>

              <div className="flex flex-col space-y-1.5">
                <span className="text-[#555] font-medium">
                  {item.title}
                </span>

                <p className="text-xs">
                  {item.description}
                </p>
              </div>
            </div>

            <Separator
              className={cn(
                "h-0.5",
                item.id !== 4 ? "flex" : "hidden"
              )}
            />
          </section>
        ))}
      </div>

      <div className="w-full py-6 space-y-2">
        <Button type="button" className="w-full bg-secondary-red rounded">
          Simular crédito
        </Button>

        <Link
          href="#"
          className="flex justify-center items-center gap-0.5 text-xs font-medium pt-4"
        >
          <span>Solicitar Crédito</span>
          <ChevronRightIcon className="size-4" />
        </Link>
      </div>
    </div>
  )
}