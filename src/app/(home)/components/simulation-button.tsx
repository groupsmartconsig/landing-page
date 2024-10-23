import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { FormContent } from '../form'

interface SimulationButtonProps {
  title: string
}

export function SimulationButton({ title }: SimulationButtonProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full bg-green-500 font-bold">{title}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <FormContent />
      </DrawerContent>
    </Drawer>
  )
}
