import { InstitutionalHeader } from "./_components/header/header";
import { InstitutionalMainContainer } from "./_components/sections/main-container";
import { InstitutionalPrimaryContainer } from "./_components/sections/primary-container";
import { InstitutionalSecondaryContainer } from "./_components/sections/secondary-container";
import { InstitutionalStatsContainer } from "./_components/sections/stats-container";

export default function InstitutionalPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <InstitutionalHeader />
      <InstitutionalPrimaryContainer />
      <InstitutionalSecondaryContainer />
      <InstitutionalMainContainer />
      <InstitutionalStatsContainer />
    </div>
  )
}