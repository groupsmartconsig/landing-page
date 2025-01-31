import Image from "next/image"

import { WalletIcon } from "lucide-react"

const loanSteps = [
  "Ser aposentado ou pensionista do INSS;",
  "Ter mais de 55 anos;",
  "Ter conta-corrente ou poupança;",
  "Ter um ou mais empréstimos consignados;",
  "Não trabalhamos com LOAS;",
]

export function LoanProcessSection() {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="relative min-h-[500px] bg-gradient-to-b from-[#8a090d] via-[#e42c33] to-[#e42c33] lg:min-h-[600px]">
        <Image
          src="/figure.png"
          alt="Pessoa utilizando o celular"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Floating Labels */}
        <div className="absolute top-1/4 left-8 bg-black text-primary-red rounded-full px-4 py-2 flex items-center gap-2">
          <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 10V3L4 14H11V21L20 10H13Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Agilidade
        </div>

        <div className="absolute top-1/2 right-8 bg-black text-primary-red rounded-full px-4 py-2 flex items-center gap-2">
          <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 6L9 17L4 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Eficiência
        </div>
      </div>

      <div className="bg-black text-white px-8 py-16 lg:px-16">
        <div className="max-w-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="rounded-full border-2 border-medium-red p-3">
              <WalletIcon className="size-6 text-primary-red" />
            </div>
            <h2 className="text-3xl font-bold">Como fazer a portabilidade?</h2>
          </div>

          <div className="space-y-6 mb-12">
            {loanSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="text-primary-red font-bold text-xl">{String(index + 1).padStart(2, "0")}.</span>
                <p className="text-white/80">{step}</p>
              </div>
            ))}
          </div>

          <h3 className="text-primary-red text-3xl font-bold">Dinheiro na conta!</h3>
        </div>
      </div>
    </div>
  )
}

