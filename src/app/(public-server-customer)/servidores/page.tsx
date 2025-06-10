import { PublicServerCustomerHeader } from "./_components/header/header";
import { PublicServerCustomerPrimaryContainer } from "./_components/sections/primary-container";
import { PublicServerCustomerSecondaryContainer } from "./_components/sections/secondary-container";

export default function PublicServerCustomerPage() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <PublicServerCustomerHeader />
      <PublicServerCustomerPrimaryContainer />
      <PublicServerCustomerSecondaryContainer />
    </div>
  )
}