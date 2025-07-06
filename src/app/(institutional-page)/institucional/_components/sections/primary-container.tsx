import Image from "next/image";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList
} from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

export function InstitutionalPrimaryContainer() {
  return (
    <div className="grid grid-cols-1">
      <div className="size-full md:hidden">
        <Image
          src="/container-primary.png"
          width={1536}
          height={1024}
          alt="Homem sorrindo no telefone"
          className="w-full"
        />
      </div>

      <section className="flex flex-col bg-[#121212] p-6 md:bg-[url(/container-primary.png)] md:bg-cover md:bg-no-repeat md:h-[720px]">
        <div className="md:max-w-6xl md:w-full md:mx-auto">
          <Breadcrumb className="pb-6 md:pt-8 lg:pt-16">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/servidores" className="flex items-center gap-0.5 text-white">
                    <HomeIcon className="size-4" />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="space-y-8 md:mt-36 lg:mt-28">
            <h1 className="text-[22px] text-white md:max-w-xl md:text-4xl">
              Pra cada conquista, conte com a gente
            </h1>

            <p className="text-muted-foreground font-medium md:max-w-xl md:text-lg md:text-white">
              Oferecemos crédito, orientação e apoio pra transformar sonhos em realidade - com respeito, transparência e foco no que importa: você.
            </p>
          </div>

          <div className="flex items-center w-full py-8">
            <Button
              type="button"
              className="w-full bg-secondary-red rounded sm:w-56 sm:h-11"
            >
              Explorar soluções
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}