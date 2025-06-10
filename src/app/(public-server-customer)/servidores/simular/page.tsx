import logoWhiteImg from "@/app/assets/images/logo-white.png";
import Image from "next/image";
import Link from "next/link";

export default function PublicServerCustomerSimulationPage() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <header className="bg-secondary-red h-[70px] w-full overflow-hidden px-6 pt-4">
        <Link href="/servidores">
          <Image
            src={logoWhiteImg}
            width={400}
            height={180}
            className="w-1/4"
            alt="Logo da Smartconsig na cor branca"
          />
        </Link>
      </header>
    </div>
  )
}