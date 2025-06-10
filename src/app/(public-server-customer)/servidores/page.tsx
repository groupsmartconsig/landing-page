import { PublicServerCustomerHeader } from "./_components/header/header";
import { PublicServerCustomerOptionsContainer } from "./_components/sections/options-container";
import { PublicServerCustomerPrimaryContainer } from "./_components/sections/primary-container";
import { PublicServerCustomerSecondaryContainer } from "./_components/sections/secondary-container";
import { PublicServerCustomerThirdContainer } from "./_components/sections/third-container";

export default function PublicServerCustomerPage() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <PublicServerCustomerHeader />
      <PublicServerCustomerPrimaryContainer />
      <PublicServerCustomerSecondaryContainer />
      <PublicServerCustomerThirdContainer />
      <PublicServerCustomerOptionsContainer />
    </div>
  )
}