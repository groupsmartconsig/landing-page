import { FooterContainer } from "@/components/shared/footer";
import { HeaderSection } from "./_components/header/header";
import { ApproveSection } from "./_components/sections/approve/approve-section";
import { BenefitsSection } from "./_components/sections/benefits/benefits-section";
import { FeaturesSection } from "./_components/sections/features/features-section";

export default function BrasilCardPage (){
    return(
        <main>
            <HeaderSection />
            <ApproveSection />
            <FeaturesSection />
            <BenefitsSection />
            <FooterContainer />
        </main>
    )
}