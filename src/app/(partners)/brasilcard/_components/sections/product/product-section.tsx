import { TheAdvantages } from "./the-advantages/the-advantages";
import { TheBenefits } from "./the-benefits/the-benefits";

export function ProductSection(){
    return(
        <section className="bg-[#F5F5F6] flex flex-col gap-10">
            <TheBenefits />
            <TheAdvantages />
        </section>
    )
}