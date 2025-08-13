import Image from "next/image";
import { DesktopButton } from "../../button/desktop/desktop-button";

import handCard from "@/app/assets/images/brasilcard-hand.png";

export const BenefitsSection = (): JSX.Element => {
  const benefits = [
    {
      text: (
        <>
          <span className="text-black">&gt; Compre com o </span>
          <span className="text-cyan-700">BrasilCard</span>
          <span className="text-black"> e aumente seu limite;</span>
        </>
      ),
    },
    {
      text: (
        <span className="text-black">
          &gt; Construa seu limite de crédito com cada compra;
        </span>
      ),
    },
    {
      text: (
        <>
          <span className="text-black">&gt; Quanto mais você usa seu </span>
          <span className="text-cyan-700">BrasilCard</span>
          <span className="text-black">, maiores são as suas vantagens;</span>
        </>
      ),
    },
    {
      text: (
        <span className="text-black">
          &gt; Aproveite vantagens exclusivas e <br />
          realize compras maiores.
        </span>
      ),
    },
  ];

  return (
    <section className="gap-6 sm:gap-14 px-3 py-8 sm:px-8 sm:py-12 lg:px-[150px] lg:py-[100px] flex flex-col w-full items-center justify-center relative">
      <header className="flex flex-col items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <h1 className="text-transparent text-4xl relative self-stretch font-bold text-center tracking-[0] leading-[normal]">
          <span className="text-black">Use seu </span>
          <span className="text-cyan-700">BrasilCard</span>
          <span className="text-black"> e veja seu limite crescer!</span>
        </h1>
      </header>

      <main className="flex flex-wrap lg:h-[500px] items-center justify-center gap-[0px_0px] relative self-stretch w-full">
        <div className="flex flex-col lg:h-[500px] items-start pb-4 sm:pb-0 gap-3 relative flex-1 grow">
          <ul className="flex flex-col gap-6 pl-0 sm:pr-4 py-4 w-full sm:w-[690px] h-fit sm:h-96 top-0 left-0">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className={`relative sm:row-[${index + 1}_/_${index + 2}] sm:col-[1_/_2] w-auto font-semibold text-transparent text-lg sm:text-2xl tracking-[0] leading-[normal]`}
              >
                {benefit.text}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex flex-col h-[100px] items-start justify-center gap-2.5 py-2.5 relative self-stretch w-full">
            <DesktopButton 
              className="w-full max-w-xl h-12 bg-black text-primary text-lg font-bold hover:bg-black hover:opacity-80" 
              label="Quero aproveitar as vantagens" 
            />
          </div>
        </div>

        <figure className="relative w-full h-[400px] sm:w-[450px] sm:h-[500px]">
          <Image 
           src={handCard}
           alt="mão segurano um cartão de crédito da Brasilcard"
           fill
           loading="lazy"
          />
        </figure>

        <div className="lg:hidden flex flex-col h-[100px] items-center sm:pt-4 justify-center  relative self-stretch w-full">
          <DesktopButton 
            className="w-full max-w-xl h-12 bg-black text-primary text-lg font-bold hover:bg-black hover:opacity-80" 
            label="Quero aproveitar as vantagens" 
          />
        </div>
      </main>
    </section>
  );
};
