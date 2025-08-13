import { Card, CardContent } from "@/components/ui/card" ;
import { CalendarClock, Check, Clock4, ShoppingBag } from "lucide-react";
import { DesktopButton } from "../../button/desktop/desktop-button";

import cardImage from "@/app/assets/images/brasilcard-card.png"
import Image from "next/image";

export const ApproveSection = (): JSX.Element => {
  const benefits = [
    {
      icon: <Clock4 className="h-14 w-auto" />,
      title: "Aprovação instantânea",
      gridPosition: "row-[1_/_2] col-[1_/_2]",
    },
    {
      icon: <Check className="h-14 w-auto" />,
      title: "Sem comprovação \nde renda",
      gridPosition: "row-[1_/_2] col-[2_/_3]",
    },
    {
      icon: <ShoppingBag className="h-14 w-auto" />,
      title: "Parcelamento de \ncompras",
      gridPosition: "row-[2_/_3] col-[1_/_2]",
    },
    {
      icon: <CalendarClock className="h-14 w-auto" />,
      title: "Até 45 dias para\n pagar",
      gridPosition: "row-[2_/_3] col-[2_/_3]",
    },
  ];

  return (
    <section className="gap-4 sm:gap-14 px-3 py-8 sm:px-8 sm:py-12 lg:px-[150px] lg:py-[100px] flex flex-col w-full items-center justify-center relative">
      <header className="flex flex-col items-center justify-center gap-2 relative self-stretch w-full">
        <h1 className="text-black text-2xl sm:text-4xl relative self-stretch font-bold text-center tracking-[0] leading-[normal]">
          Solicite já o seu cartão de crédito <strong className="text-cyan-700">BrasilCard</strong>
        </h1>

        <p className="relative self-stretch font-medium text-lg sm:text-2xl tracking-[0] leading-[normal]">
          Com o cartão de crédito <strong className="text-cyan-700">BrasilCard</strong> , você tem aprovação instantânea e
          não precisa de comprovação de renda. Aproveite a flexibilidade de
          parcelar suas compras e tenha até 45 dias para começar a pagar.
        </p>
      </header>

      <div className="flex flex-wrap items-center justify-center py-6 sm:py-0 gap-2 sm:gap-[0px_0px] relative self-stretch w-full">
        <figure className="relative w-full sm:w-5/12 h-[350px] sm:h-[450px]">
          <Image 
            src={cardImage}
            alt="cartão de crédito azul com o logo da Brasilcard"
            fill
            className="w-full max-w-[450px] h-[450px]"
          />
        </figure>

        <div className="flex flex-col h-full items-start gap-4 relative flex-1 grow">
          <div className="hidden sm:grid grid-cols-2 grid-rows-2 gap-2 pl-12 pr-4 pt-8 pb-4 w-[690px] h-96 top-0 left-0">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className={`relative ${benefit.gridPosition} w-full h-full border-0 shadow-none bg-transparent`}
              >
                <CardContent className="flex flex-col items-start gap-2.5 p-2.5 h-full">
                  <figure className="relative flex-[0_0_auto] text-primary-red h-16 w-auto">
                    {benefit.icon}
                  </figure>

                  <div className="relative self-stretch font-semibold text-[#04335a] text-[22px] text-justify tracking-[0] leading-[normal] whitespace-pre-line">
                    {benefit.title}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center sm:p-2.5 relative self-stretch w-full">
            <DesktopButton 
              className="w-full max-w-xl h-12 bg-black text-primary text-lg font-bold hover:bg-black hover:opacity-80" 
              label="Solicite já o seu" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
