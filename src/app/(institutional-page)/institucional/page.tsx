import { InstitutionalHeader } from "./_components/header/header";
import { InstitutionalPrimaryContainer } from "./_components/sections/primary-container";
import { InstitutionalSecondaryContainer } from "./_components/sections/secondary-container";

export default function InstitutionalPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <InstitutionalHeader />
      <InstitutionalPrimaryContainer />
      <InstitutionalSecondaryContainer />
    </div>
  )
}