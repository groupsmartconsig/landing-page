import { SocialSection } from "./_components/sections/social/social-section";
import { ProductSection } from "./_components/sections/product/product-section";
import { AboutSection } from "./_components/sections/about/about-section";
import { BrasilcardHeaderSection } from "./_components/header/header";

export default function BrasilCardPage (){
    return(
        <main className="flex flex-col items-center justify-center w-full bg-white">
            <BrasilcardHeaderSection />
            <AboutSection />
            <ProductSection />
            <SocialSection />
        </main>
    )
}