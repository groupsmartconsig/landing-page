"use client"

import logo from '@/app/assets/images/logo-black.png'
import Image from 'next/image'
import Link from 'next/link'

import { UtmLink } from '@/components/shared/utm-link'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'

export default function CustomerWithoutContract() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-28 sm:py-36">
        <div className="flex justify-center items-center mb-8">
          <UtmLink href="/">
            <Image
              src={logo}
              width={450}
              height={253}
              className="w-36"
              alt="Smartconsig logo"
            />
          </UtmLink>
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-black sm:text-6xl">
            Ops... Parece que você não possui nenhum contrato de empréstimo
          </h1>

          <p className="max-w-xs w-full mx-auto text-lg text-pretty text-muted-foreground font-medium mt-4 sm:text-2xl sm:max-w-full sm:mt-8">
            No momento não identificamos nenhum contrato disponível em seu nome. De qualquer forma, salvamos os
            seus dados na nossa base de dados e podemos entrar em contato com novas propostas para seu perfil.
          </p>

          <div className="flex items-center justify-center mt-8">
            <Link href="/">
              <Button
                type='button'
                className='flex items-center gap-2 text-lg px-12 py-6'
              >
                Página Inicial
                <ArrowRightIcon className='size-4 md:size-6' />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}