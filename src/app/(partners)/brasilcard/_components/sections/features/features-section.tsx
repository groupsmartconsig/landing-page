import { 
  Banknote, 
  CalendarClock, 
  CalendarDays, 
  ChartNoAxesCombined, 
  Percent, 
  ShieldCheck, 
  ShoppingBag, 
  ShoppingCart 
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card" ;
import { DesktopButton } from "../../button/desktop/desktop-button";

export function FeaturesSection(): JSX.Element {
  const features = [
    { 
      icon: <CalendarClock className="h-14 w-auto" />, 
      title: "Até 45 dias para pagar a fatura",
    },
    {
      icon: <ChartNoAxesCombined className="h-14 w-auto" />,
      title: "Aumento rápido de limite",
    },
    {
      icon: <ShoppingBag className="h-14 w-auto" />,
      title: "Parcelamento de compras",
    },
    {
      icon: <CalendarDays className="h-14 w-auto" />,
      title: "Sem anuidade e taxa de adesão",
    },
    {
      icon: <Percent className="h-14 w-auto" />,
      title: "Descontos promocionais",
    },
    {
      icon: <Banknote className="h-14 w-auto" />,
      title: "Saque emergencial",
    },
    {
      icon: <ShoppingCart className="h-14 w-auto" />,
      title: "ofertas em produtos",
    },
    {
      icon: <ShieldCheck className="h-14 w-auto" />,
      title: "Facilidade e segurança",
    },
  ];

  return (
    <section className="gap-12 px-4 sm:px-[150px] py-8 sm:py-[75px] bg-[linear-gradient(180deg,rgba(138,9,13,1)_70%,rgba(228,44,51,1)_100%)] flex flex-col w-full items-center justify-center relative">
      <header className="flex flex-col items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="text-transparent text-[32px] relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-center tracking-[0] leading-[normal]">
          <span className="text-[#fdfdfd]">
            Todas as vantagens que um cartão de crédito pode oferecer, você
            encontra na{" "}
          </span>
          <span className="text-cyan-700">BrasilCard</span>
          <span className="text-[#fdfdfd]">!</span>
        </h2>
      </header>

      <div className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-4 lg:h-[500px] gap-6 lg:max-w-[1140px] relative">
        {features.map((feature, index) => (
          <Card
            key={index}
            className={`w-full h-full bg-[#8a090d] rounded-[20px] overflow-hidden shadow-[0px_0px_10px_6px_#00000033] border-none`}
          >
            <CardContent className="flex flex-col items-center justify-center gap-4 px-8 p-4 h-48">
              <figure className="relative text-white">
                {feature.icon}
              </figure>
              <div className="relative self-stretch font-bold text-white text-2xl text-center tracking-[0] leading-[normal]">
                {feature.title === "Saque emergencial" ? (
                  <>
                    Saque <br />
                    emergencial
                  </>
                ) : (
                  feature.title
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col h-[100px] items-center justify-center sm:px-8 lg:px-[345px] py-[9px] relative self-stretch w-full">
        <DesktopButton 
          className="w-full max-w-xl h-12 bg-black text-primary text-lg font-bold hover:bg-white hover:opacity-80" 
          label="Quero o meu BrasilCard" 
        />
      </div>
    </section>
  );
};
