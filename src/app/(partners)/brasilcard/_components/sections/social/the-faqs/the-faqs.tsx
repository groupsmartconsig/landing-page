import { Accordion, 
    AccordionContent, 
    AccordionItem, 
    AccordionTrigger } from "@/components/ui/accordion"

export function TheFaqs(){
    const faqs = [
        {
            quest: `O que é essa parceria entre a Smart Consig e a BrasilCard?`,
            answer: "A Smart Consig, especialista em soluções de crédito, uniu-se à BrasilCard, uma administradora de cartões com vasta experiência, para oferecer a você um cartão de crédito com benefícios exclusivos, de forma 100% digital e sem burocracia, diretamente em nossa plataforma."
        },
        {
            quest: "Por que a Smart Consig está oferecendo este cartão?",
            answer: "Nosso objetivo na Smart Consig é ampliar o acesso a soluções financeiras inteligentes. Ao oferecer o cartão BrasilCard, complementamos nosso portfólio e damos a você mais uma ferramenta para organizar sua vida financeira com praticidade e segurança."
        },
        {
            quest: "Quem pode solicitar o cartão BrasilCard pela Smart Consig?",
            answer: "Qualquer pessoa física maior de 18 anos em todo o território nacional pode solicitar o cartão Brasil Card pela Smart Consig. Basta passar por uma análise de crédito simples e rápida, feita de forma segura, para verificar a aprovação."
        },
        {
            quest: "Preciso ser cliente de crédito consignado da Smart Consig para ter o cartão?",
            answer: "Não necessariamente. A oferta está disponível para um público amplo. No entanto, ter um bom relacionamento com a Smart Consig pode contribuir positivamente para sua análise de crédito."
        },
        {
            quest: "Onde o cartão BrasilCard é aceito?",
            answer: "Seu cartão BrasilCard é aceito em uma extensa rede de estabelecimentos credenciados em todo o território nacional, incluindo supermercados, farmácias, postos de gasolina, lojas de departamento e muito mais."
        }
    ]
    return(
        <section className="px-12 max-w-7xl gap-8 py-12  pb-16  lg:px-36 flex flex-col w-full text-start sm:justify-center relative">
            <h2 className="font-bold text-lg max-w-[600px]">
                Perguntas Frequentes:
            </h2>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index)=>{
                    return(
                        <AccordionItem key={`faq-${index}`} value={`faq-${index + 1}`}>
                            <AccordionTrigger className="text-start w-full">{faq.quest}</AccordionTrigger>
                            <AccordionContent className="w-full" >{faq.answer}</AccordionContent>
                        </AccordionItem>    
                    )
                })}
            </Accordion>
        </section>
    )
}