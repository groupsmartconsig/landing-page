import Link from "next/link";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useStepper } from "@/hooks/use-stepper";

export function PublicServerCustomerPolicyInfoForm() {
  const { previousStep, nextStep } = useStepper();

  return (
    <div className="py-8 sm:py-16">
      <Card className="p-6 sm:max-w-sm sm:w-full sm:mx-auto sm:rounded-[36px]">
        <CardHeader className="px-0">
          <CardTitle className="text-xl font-medium pb-2 sm:text-center">
            Política de privacidade
          </CardTitle>
          <Separator />
          <CardDescription className="w-64 pt-2 sm:max-w-64 sm:w-full sm:mx-auto">
            Ao clicar em Simular, você concorda em enviar suas informações para o Grupo Smart Consig, que se compromete a usá-las de acordo com sua política de privacidade.
            Visite a{" "}
            <Link href="#" className="text-[#004aad]">
              Política de Privacidade do Grupo Smart Consig
            </Link>
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="w-full flex flex-col items-center space-y-6 sm:flex-row sm:justify-center sm:items-center sm:space-x-6 sm:space-y-0 sm:mt-6">
        <Button
          type="button"
          size="lg"
          variant="outline"
          className="hidden sm:flex h-10 w-72 text-sm rounded text-secondary-red border-secondary-red"
          onClick={() => previousStep()}
        >
          Voltar
        </Button>

        <Button
          type="button"
          size="lg"
          className="w-full h-14 bg-secondary-red rounded-sm sm:h-10 sm:w-72 sm:text-sm sm:rounded"
          onClick={() => nextStep()}
        >
          Próximo
        </Button>

        <Button
          type="button"
          size="lg"
          variant="outline"
          className="h-14 w-full rounded-sm text-secondary-red border-secondary-red sm:hidden"
          onClick={() => previousStep()}
        >
          Voltar
        </Button>
      </div>
    </div>
  )
}