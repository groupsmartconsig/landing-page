import Image from "next/image";
import partneshipImage from "@/app/assets/images/smartconsig.webp"
import { PartnerLabel } from "../../../partner-label/partner-label";

export function ThePartneshipSection(){
    return(
        <section className="flex w-full max-w-7xl justify-center flex-wrap sm:flex-nowrap gap-8 py-24 px-12 lg:px-36">
            <section className="sm:p-4 lg:p-9 flex justify-center items-center w-full sm:w-1/2 h-80 min-w-80 sm:min-h-[400px]">
                <figure className="overflow-clip w-full h-full rounded-sm relative ">
                    <Image 
                    src={partneshipImage}
                    alt="Fachada da empresa Smart Consig."
                    fill
                    loading="lazy"
                    className="object-cover"
                    />
                </figure>
            </section>
            <article className="flex flex-col gap-3 items-start justify-center relative w-full sm:w-1/2 min-w-80 sm:min-h-[448px]">
                <h2 className="font-bold text-2xl">
                    Uma Parceria Pensada para Você
                </h2>
                <p className="font-light text-[#555555]">
                    Na SmartConsig, nosso compromisso é abrir portas para suas conquistas financeiras. 
                    É por isso que buscamos os melhores parceiros do mercado para ampliar suas possibilidades. 
                    Ao nos unirmos à {<PartnerLabel />}, estamos conectando nossa expertise em crédito com a tradição de uma empresa sólida, tudo para oferecer a você, nosso cliente, um acesso facilitado a um cartão de crédito completo e cheio de vantagens. 
                    Esta parceria é o nosso jeito de ir além, entregando mais valor e confiança para o seu dia a dia.
                </p>
            </article>
        </section>
    )
}