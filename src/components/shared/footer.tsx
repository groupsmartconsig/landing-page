import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon
} from "lucide-react";

import logo from "@/app/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export function FooterContainer() {
  return (
    <div className="bg-medium-dark size-full flex flex-col items-center justify-center py-12 overflow-hidden">
      <div className="w-full flex justify-between items-center px-12 md:max-w-7xl md:w-full md:mx-auto md:px-0">
        <div className="hidden sm:flex flex-col space-y-6">
          <Image
            src={logo}
            width={140}
            height={20}
            alt="logo"
            priority
          />
          <p className="max-w-md w-full whitespace-pre-line text-base font-medium tracking-tighter text-white">
            Há 5 anos atuando com credibilidade, segurança e qualidade. Nascemos do desejo de empreender ajudando as pessoas a melhorarem suas condições financeiras!
          </p>
          <small className="text-gray-400">
            Smart Consig Soluções Financeiras LTDA
          </small>
        </div>
        <div className="flex items-center space-x-20">
          <div className="grid grid-cols-1 gap-6">
            <Image
              src={logo}
              width={140}
              height={20}
              className="block w-1/3 mb-3 sm:hidden"
              alt="logo"
              priority
            />
            <div className="flex flex-col space-y-3">
              <span className="text-lg font-bold text-primary-red">
                Contato
              </span>
              <p className="inline-flex items-center gap-2 text-sm text-white hover:underline hover:text-gray-400">
                <PhoneIcon className="size-4" />
                (11) 3308-7564
              </p>
              <p className="inline-flex items-center gap-2 text-sm text-white hover:underline hover:text-gray-400">
                <MailIcon className="size-4" />
                contato@gruposmartconsig.com.br
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="text-lg font-bold text-primary-red">
                Localização
              </span>
              <p className="max-w-xs w-full whitespace-pre-line text-sm font-medium tracking-tighter text-white">
                R. Guaraciaba, 27 - Jardim Barbosa, Guarulhos - SP, 07111-020
              </p>
              <small className="text-gray-400">
                CNPJ: 37.044.794/0001-03
              </small>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="text-lg font-bold text-primary-red">
                Redes sociais
              </span>
              <div className="flex items-center gap-6">
                <Link
                  href="https://www.instagram.com/smart_consig/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                  className="inline-flex items-center gap-2 text-sm text-white hover:underline hover:text-gray-400"
                >
                  <InstagramIcon className="size-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/smartconsigsf?mibextid=LQQJ4d"
                  className="inline-flex items-center gap-2 text-sm text-white hover:underline hover:text-gray-400"
                >
                  <FacebookIcon className="size-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}