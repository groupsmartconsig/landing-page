import { BorderBeam } from "@/components/magic-ui/border-beam";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

import AnimatedGridPattern from "@/components/magic-ui/animated-grid-pattern";

export default function FaqContainer() {
  return (
    <div
      className="bg-black h-[600px] w-full relative flex flex-col items-center justify-center rounded-xl overflow-hidden sm:border sm:border-zinc-700 md:h-[540px] md:shadow-xl"
    >
      <div className="w-full flex flex-col space-y-12 py-8 sm:py-0">
        <p className="z-10 whitespace-pre-wrap text-center text-4xl font-medium tracking-tighter bg-gradient-to-b from-[#8a090d] via-[#e42c33] to-[#e42c33] bg-clip-text text-transparent md:text-5xl">
          <strong className="text-3xl">FAQ</strong><br />
          Perguntas e respostas
        </p>

        <Accordion
          type="single"
          className="w-full mx-auto text-sm text-white px-3 pb-6 sm:text-base md:max-w-3xl md:px-0"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Como solicitar a portabilidade?</AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">
              Solicitar a portabilidade é simples! Basta clicar no botão abaixo e preencher nosso formulário rápido. Nossa equipe entrará em contato para confirmar as informações e iniciar o processo. Tudo será feito de forma online, sem que você precise sair de casa.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>A portabilidade tem algum custo?</AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">
              A portabilidade de consignado é gratuita! Você não paga nada para transferir seu empréstimo de um banco para outro. Todos os custos são cobertos pelos bancos envolvidos no processo, garantindo que você aproveite todas as vantagens sem gastar nada a mais.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Quanto tempo leva o processo de portabilidade?</AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">
              O processo de portabilidade é rápido e descomplicado! Depois de enviar a documentação, a transferência para o novo banco pode ser concluída em até 7 dias úteis, dependendo da análise do banco. Nossa equipe acompanha cada etapa para garantir que tudo ocorra dentro do prazo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Acabei de fazer um empréstimo consignado, posso reduzir o juros e o valor da parcela?</AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">
              Mesmo para aqueles que acabaram de adquirir um empréstimo consignado, a redução da taxa de juros é uma opção válida, resultando na diminuição da parcela. Essa redução não apenas afeta positivamente o contrato atual, mas também abre espaço para o aumento da margem, permitindo a liberação de um novo valor.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Os serviços oferecidos pela Smart Consig são confiáveis?</AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">
              Sua segurança é nossa prioridade e sua tranquilidade é nossa missão. Com mais de 5 anos de atuação, garantimos 100% de segurança em nossos serviços. Somos uma empresa regularizada pela ANEPS e autorizada pelo BACEN como correspondente bancário, proporcionando confiança e integridade em cada transação.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <BorderBeam
        className="hidden sm:relative sm:flex"
        size={250}
        duration={12}
        delay={9}
      />
    </div>
  )
}
