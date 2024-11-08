'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { AuthService } from '@/services/auth-service'
import { env } from '@/utils/env'
import { RocketIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

import portabilityBanner from '@/app/assets/images/banner.png'
import Image from 'next/image'

export default function MobileFormPage() {
  const route = useRouter()

  const handleNextStep = async () => {
    const data = {
      username: env.NEXT_PUBLIC_USERNAME,
      password: env.NEXT_PUBLIC_PASSWORD,
    };

    try {
      await AuthService.signIn(data.username, data.password);

      const token = localStorage.getItem("token");
      if (!token) throw new Error("401 Server Error: Token not found.");

      route.push("/area-cliente/formulario")
    } catch (error) {
      console.error("Erro ao autenticar:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center space-x-4">
        <span className="p-3 border rounded-2xl">
          <RocketIcon className="text-primary-red" />
        </span>
        <div>
          <h1 className="text-lg font-semibold leading-none tracking-tight">
            Faça uma simulação grátis
          </h1>
          <h3 className="max-w-64 text-sm text-muted-foreground">
            Vamos verificar propostas para você.
          </h3>
        </div>
      </div>

      <div className="w-full flex flex-col space-y-6 pt-6 pb-8 px-8">
        <div className="size-full">
          <Image
            src={portabilityBanner}
            width={820}
            height={312}
            className="object-cover size-full rounded"
            alt="Crédito consignado com segurança e velocidade."
          />
        </div>

        <div className="flex items-center gap-2 text-[11px]">
          <Checkbox checked className="rounded" />
          Concordo com os termos de serviços e privacidade.
        </div>
      </div>

      <Separator />

      <div className="mt-auto flex flex-col gap-2 w-full p-8">
        <div className="flex flex-col items-center space-y-6">
          <Button
            type="button"
            className="w-full flex font-medium px-6 hover:bg-black hover:text-primary"
            onClick={handleNextStep}
          >
            Vamos começar ?
          </Button>
        </div>
      </div>
    </>
  )
}