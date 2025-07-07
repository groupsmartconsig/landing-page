import Image from "next/image";

export function InstitutionalSquadContainer() {
  return (
    <div className="relative h-96 bg-[#121212] lg:mt-16">
      <Image
        width={2148}
        height={575}
        src="/team.png"
        alt="Equipe de colaboradores da Smartconsig"
        className="absolute inset-0 size-full object-cover"
      />
    </div>
  )
}