'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { SimulationMobileButton } from '@/components/shared/simulation-mobile-button'
import { LockKeyholeIcon } from 'lucide-react'
import { SimulationDesktopButton } from './simulation-desktop-button'

import elderlyCasual from '@/app/assets/images/elderly-casual.png'
import elderlySmile from '@/app/assets/images/elderly-smile.png'
import logo from '@/app/assets/images/logo-white.png'
import Image from 'next/image'

export function HeaderContainer() {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden rounded-none border-none md:max-w-full">
      <CardContent className="p-0">
        <div className="bg-[#211e1c] text-white pb-12">
          <header className="flex justify-between items-center pt-2 pb-6 px-6 md:max-w-3xl md:w-full md:mx-auto md:py-6 md:px-0 lg:max-w-7xl">
            <Image
              src={logo}
              width={150}
              height={200}
              className="w-12 md:w-16"
              alt="Smartconsig logo"
            />
            <div className="flex items-center justify-center gap-x-2 text-sm text-white md:text-base">
              <LockKeyholeIcon className="size-4 md:size-5" />
              <span>Site seguro</span>
            </div>
          </header>

          {/* Mobile */}
          <div className="relative bg-[#fe001a] h-72 max-w-[350px] mx-auto rounded-t-2xl overflow-hidden md:hidden">
            <Image
              src={elderlySmile}
              width={500}
              height={500}
              alt="Smiling man"
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <CardHeader className="relative z-10 max-w-[370px] mx-auto bg-gray-300 text-black p-6 rounded-xl md:hidden">
            <CardTitle className="text-xl text-primary leading-tight">
              Faça a portabilidade do seu contrato
              de um jeito seguro e rapido!
            </CardTitle>

            <CardDescription className="text-xl text-black font-medium tracking-tight pb-4">
              Podemos usar seu contrato com
              juros alto para salvar suas finanças,
              Clique agora mesmo e simule!
            </CardDescription>

            <SimulationMobileButton
              title="Simular agora"
              className="bg-[#fe001a] h-11 w-full text-lg font-semibold"
            />
          </CardHeader>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-2 md:place-items-center md:h-[680px] md:gap-6 xl:max-w-[1600px] lg:mx-auto lg:w-full">
            <CardHeader className="relative z-10 flex flex-col justify-center space-y-2 h-full max-w-xl mx-auto text-white p-2">
              <CardTitle className="text-3xl text-[#fe001a] leading-tight xl:text-4xl">
                Faça a portabilidade do seu contrato
                de um jeito seguro e rapido!
              </CardTitle>

              <CardDescription className="text-4xl text-white font-medium tracking-tight pb-4">
                Podemos usar seu contrato com
                juros alto para salvar suas finanças,
                Clique agora mesmo e simule!
              </CardDescription>

              <SimulationDesktopButton
                title="Simular agora"
                className="h-12 bg-[#fe001a] text-white text-lg font-bold hover:bg-white hover:text-[#fe001a] hover:opacity-90"
              />
            </CardHeader>

            <div className="flex items-center space-x-6 h-full px-6 xl:px-0">
              <div className="relative bg-[#fe001a] h-[80%] max-w-md mx-auto rounded-2xl overflow-hidden">
                <Image
                  src={elderlyCasual}
                  width={500}
                  height={500}
                  alt="Casual elderly"
                  className="md:hidden xl:block object-cover w-full h-full"
                  priority
                />
              </div>

              <div className="relative bg-[#fe001a] h-full max-w-md mx-auto rounded-2xl overflow-hidden">
                <Image
                  src={elderlySmile}
                  width={500}
                  height={500}
                  alt="Smiling man"
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
