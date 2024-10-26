import portabilityBanner from '@/app/assets/images/banner.png'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
} from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'
import { useStepper } from '@/hooks/use-stepper'
import { AuthService } from '@/services/auth-service'
import { env } from '@/utils/env'
import { RocketIcon } from 'lucide-react'
import Image from 'next/image'

export function FormInit() {
  const { nextStep } = useStepper();

  const handleNextStep = async () => {
    const data = {
      username: env.NEXT_PUBLIC_USERNAME,
      password: env.NEXT_PUBLIC_PASSWORD,
    };

    try {
      await AuthService.signIn(data.username, data.password);

      const token = localStorage.getItem("token");
      if (!token) throw new Error("401 Server Error: Token not found.");

      nextStep();
    } catch (error) {
      console.error("Erro ao autenticar:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center space-x-4 pt-8 pb-4">
        <span className="p-3 border rounded-2xl">
          <RocketIcon className="text-primary-red" />
        </span>
        <div>
          <DrawerTitle className="text-lg">
            Faça uma simulação grátis
          </DrawerTitle>
          <DrawerDescription className="max-w-64 text-sm">
            Vamos verificar propostas para você.
          </DrawerDescription>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-6 py-6 px-8">
        <div className="w-full h-auto">
          <Image
            src={portabilityBanner}
            width={820}
            height={312}
            className="object-cover size-full rounded"
            alt="Crédito consignado com segurança e velocidade."
          />
        </div>

        <div className="flex items-center gap-2 text-xs">
          <Checkbox checked className="rounded" />
          Concordo com os termos de serviços e privacidade.
        </div>
      </div>
      <Separator />
      <DrawerFooter className="w-full p-8">
        <div className="flex justify-end items-center space-x-6">
          <DrawerClose asChild>
            <Button type="button" variant="ghost">
              Voltar
            </Button>
          </DrawerClose>
          <Button
            type="button"
            className="w-full flex justify-center items-center font-medium px-6 hover:bg-black hover:text-primary"
            onClick={handleNextStep}
          >
            Vamos começar ?
          </Button>
        </div>
      </DrawerFooter>
    </>
  )
}