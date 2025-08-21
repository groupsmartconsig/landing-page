import { FooterContainer } from "@/components/shared/footer";
import { HeaderSection } from "./_components/header/header";
import { AboutSection } from "./_components/sections/about/about-section";
import { ProductSection } from "./_components/sections/product/product-section";
import { SocialSection } from "./_components/sections/social/social-section";

export default function BrasilCardPage (){
    return(
        <main>
            <HeaderSection />
            <AboutSection />
            <ProductSection />
            <SocialSection />
            <FooterContainer />
        </main>
    )
}