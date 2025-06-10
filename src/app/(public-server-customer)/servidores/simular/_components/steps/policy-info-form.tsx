import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function PublicServerCustomerPolicyInfoForm() {
  return (
    <div className="py-8">
      <Card className="p-6">
        <CardHeader className="px-0">
          <CardTitle className="text-xl font-medium pb-2">
            Política de privacidade
          </CardTitle>
          <Separator />
          <CardDescription className="w-64 pt-2">
            Ao clicar em Simular, você concorda em enviar suas informações para o Grupo Smart Consig, que se compromete a usá-las de acordo com sua política de privacidade.
            Visite a{" "}
            <Link href="#" className="text-[#004aad]">
              Política de Privacidade do Grupo Smart Consig
            </Link>
          </CardDescription>
        </CardHeader>
      </Card>

      <Button
        type="submit"
        size="lg"
        className="h-[56px] w-full bg-secondary-red rounded-sm mt-16"
      >
        Simular
      </Button>
    </div>
  )
}