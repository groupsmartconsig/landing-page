import { PublicServerCustomerHeader } from "./_components/header/header";
import { PublicServerCustomerFeaturesContainer } from "./_components/sections/features-container";
import { PublicServerCustomerOptionsContainer } from "./_components/sections/options-container";
import { PublicServerCustomerPrimaryContainer } from "./_components/sections/primary-container";
import { PublicServerCustomerQuestionContainer } from "./_components/sections/question-container";
import { PublicServerCustomerSecondaryContainer } from "./_components/sections/secondary-container";
import { PublicServerCustomerTestimonialContainer } from "./_components/sections/testimonial-container";
import { PublicServerCustomerThirdContainer } from "./_components/sections/third-container";

export default function PublicServerCustomerPage() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <PublicServerCustomerHeader />
      <PublicServerCustomerPrimaryContainer />
      <PublicServerCustomerSecondaryContainer />
      <PublicServerCustomerThirdContainer />
      <PublicServerCustomerOptionsContainer />
      <PublicServerCustomerQuestionContainer />
      <PublicServerCustomerFeaturesContainer />
      <PublicServerCustomerTestimonialContainer />
    </div>
  )
}