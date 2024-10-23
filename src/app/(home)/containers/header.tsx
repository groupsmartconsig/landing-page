import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AnimatedShinySpan } from '../components/animated-shiny-span'
import { SimulationButton } from '../components/simulation-button'

import elderlySmile from '@/app/assets/images/elderly-smile.png'
import logo from '@/app/assets/images/logo.png'
import Image from 'next/image'

export default function ContainerHeader() {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden rounded-none border-none">
      <CardContent className="p-0">
        <div className="bg-black text-white pb-6">
          <header className="flex justify-between items-center pt-4 px-4">
            <Image
              src={logo}
              width={487}
              height={185}
              className="w-1/4"
              alt="Smartconsig logo"
            />
            <AnimatedShinySpan />
          </header>

          <div className="relative h-72overflow-hidden">
            <Image
              src={elderlySmile}
              width={500}
              height={500}
              alt="Smiling man"
              className="object-cover w-full h-full"
            />
          </div>

          <CardHeader className="relative z-10 max-w-[370px] mx-auto bg-white text-black p-5 rounded-2xl">
            <CardTitle className="text-2xl text-primary leading-tight">
              Portabilidade de Consignado
            </CardTitle>
            <CardDescription className="text-2xl font-bold text-black">
              aumente o seu salário e libere valores extras.
            </CardDescription>
            <SimulationButton title="Simular agora" />
          </CardHeader>
        </div>
      </CardContent>
    </Card>
  )
}
