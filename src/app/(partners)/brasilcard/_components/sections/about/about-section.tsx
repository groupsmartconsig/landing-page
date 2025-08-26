import { ThePartnerSection } from "./the-partner/the-partner";
import { ThePartneshipSection } from "./the-partneship/the-partneship-section";
import { TheProductSection } from "./the-product/the-product-section";

export function AboutSection(){
    return(
        <section className="w-full flex flex-col gap-y-16 items-center justify-center">
            <ThePartneshipSection />
            <ThePartnerSection />
            <TheProductSection />
        </section>
    )
}