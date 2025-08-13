import Image from "next/image";

import Logo from "@/app/assets/images/logo-white.png"
import HeadlineImage from "@/app/assets/images/brasilcard-header.png"
import { LockKeyholeIcon } from "lucide-react";
import { DesktopButton } from "../button/desktop/desktop-button";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex flex-col h-[100dvh] items-center justify-end sm:gap-[52px] relative w-full bg-transparent bg-[linear-gradient(180deg,rgba(138,9,13,1)_0%,rgba(228,44,51,1)_100%)]">
      <nav className="flex h-[80px] items-center justify-between px-3 sm:px-8 lg:px-[150px] py-0 relative w-full backdrop-blur-[2px] backdrop-brightness-[100%]">
        <figure className=" w-20 md:w-24 xl:w-28 h-full inline-flex items-center relative flex-[0_0_auto]">
          <Image
            src={Logo}
            width={150}
            height={200}
            className="w-20 md:w-24 xl:w-28"
            alt="Smartconsig logo"
            priority
            quality={75}
          />
        </figure>

        <figure className="flex items-center justify-center gap-x-2 text-sm text-white md:text-base">
          <LockKeyholeIcon className="size-4 md:size-5" />
          <span>Site seguro</span>
        </figure>
      </nav>

      <main className="flex items-end justify-center px-3 sm:px-8 lg:gap-6 lg:px-[150px] py-0 relative flex-1 w-full grow">
        <section className="flex h-full flex-col items-center justify-center gap-1 px-0 py-14 relative flex-1 grow">
          <h1 className="font-semibold text-xl sm:text-4xl text-black leading-tight">
            Aprovado na hora, usado para sempre.
          </h1>

          <p className="text-lg sm:text-2xl text-white tracking-tight pb-4">
            A liberdade de ter seu crédito aprovado na hora que você mais
            precisa. Nosso processo é rápido e 100% digital para você já sair
            usando.
          </p>

          <DesktopButton label="Solicite Agora"  />
        </section>

        <figure className="hidden sm:block relative h-full w-1/2">
            <Image 
              src={HeadlineImage}
              alt="mulher negra com o sorrindo e segurando um cartão de crédito"
              priority
              fill
            />
        </figure>
      </main>
    </header>
  );
};
