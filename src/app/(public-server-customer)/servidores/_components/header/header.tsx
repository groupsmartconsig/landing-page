import logoRedImg from "@/app/assets/images/logo-red.png";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

export function PublicServerCustomerHeader() {
  return (
    <header className="w-full overflow-hidden">
      <div className="flex justify-between items-center py-4 px-6">
        <Image
          src={logoRedImg}
          width={400}
          height={180}
          className="w-1/4"
          alt="Logo da Smartconsig na cor vermelha"
        />

        <div className="flex items-center space-x-3">
          <Button type="button" size="sm" className="h-8 bg-secondary-red text-xs rounded">
            Simular Crédito
          </Button>

          <MenuIcon className="text-secondary-red size-7" />
        </div>
      </div>
    </header>
  )
}