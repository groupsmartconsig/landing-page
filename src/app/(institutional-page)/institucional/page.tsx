import Image from "next/image";

import { InstitutionalHeader } from "./_components/header/header";
import { InstitutionalCompanyContainer } from "./_components/sections/company-container";
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
      <InstitutionalCompanyContainer />
      <div className="h-[580px] bg-black">
        <Image
          width={2148}
          height={575}
          src="/team.png"
          alt="Equipe de colaboradores da Smartconsig"
          className="object-cover"
        />
      </div>
    </div>
  )
}