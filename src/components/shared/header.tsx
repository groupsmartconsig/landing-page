'use client'

import { SimulationButton } from '@/components/shared/simulation-button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { LockKeyholeIcon } from 'lucide-react'

import elderlySmile from '@/app/assets/images/elderly-smile.png'
import logo from '@/app/assets/images/logo-white.png'
import Image from 'next/image'

export function HeaderContainer() {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden rounded-none border-none">
      <CardContent className="p-0">
        <div className="bg-gradient-to-b from-[#8a090d] via-[#e42c33] to-[#e42c33] text-white pb-12">
          <header className="flex justify-between items-center pt-2 pb-6 px-6">
            <Image
              src={logo}
              width={150}
              height={200}
              className="w-12"
              alt="Smartconsig logo"
            />
            <div className="flex items-center justify-center gap-x-2 text-sm text-white">
              <LockKeyholeIcon className="size-4" />
              <span>Site seguro</span>
            </div>
          </header>

          <div className="relative bg-red-500 h-72 max-w-[350px] mx-auto rounded-t-2xl overflow-hidden">
            <Image
              src={elderlySmile}
              width={500}
              height={500}
              alt="Smiling man"
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <CardHeader className="relative z-10 max-w-[370px] mx-auto bg-gray-200 text-black p-6 rounded-xl">
            <CardTitle className="text-2xl text-primary leading-tight">
              Portabilidade de Consignado <br />
              <strong className="text-2xl text-black font-bold">
                Aumente o salário e libere valor
              </strong>
            </CardTitle>
            <CardDescription className="text-base text-black tracking-tight pb-4">
              Transfira seu empréstimo de outros bancos e aproveite vantagens: reduza a parcela, pague menos juros,
              aumente seu benefício e libere um novo valor.
            </CardDescription>
            <SimulationButton title="Simular agora" />
          </CardHeader>
        </div>
      </CardContent>
    </Card>
  )
}
