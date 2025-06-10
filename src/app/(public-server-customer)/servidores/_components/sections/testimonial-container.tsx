import Image from "next/image"

import { ChevronRightIcon } from "lucide-react"
import Link from "next/link"

export function PublicServerCustomerTestimonialContainer() {
  return (
    <div className="max-w-md mx-auto py-12 px-6">
      <div className="flex items-center mb-3">
        <div className="flex -space-x-2">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
            <Image
              src="/cliente-1.jpg?height=40&width=40"
              alt="Cliente 1"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
            <Image
              src="/cliente-2.jpg?height=40&width=40"
              alt="Cliente 2"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
            <Image
              src="/cliente-3.jpg?height=40&width=40"
              alt="Cliente 3"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
            <Image
              src="/cliente-4.jpg?height=40&width=40"
              alt="Cliente 4"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <span className="ml-3 text-secondary-red text-sm font-medium">
          + de 55 mil clientes
        </span>
      </div>

      <h2 className="text-xl font-medium mb-4">
        5 anos de uma atuação sólida
      </h2>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        Na Smart Consig, garantimos aos nossos clientes um processo com{" "}
        <span className="font-semibold">credibilidade</span>, <span className="font-semibold">segurança</span>,{" "}
        <span className="font-semibold">qualidade</span>, <span className="font-semibold">excelência</span> e um
        atendimento <span className="font-semibold">exclusivo</span> e <span className="font-semibold">pessoal</span>.
      </p>

      <Link
        href="#"
        className="flex items-center gap-0.5 text-xs text-secondary-red font-medium"
      >
        <span>Simular Crédito</span>
        <ChevronRightIcon className="size-4" />
      </Link>
    </div>
  )
}
