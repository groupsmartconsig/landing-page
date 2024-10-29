import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { FormContent } from '../../form'

interface SimulationButtonProps {
  title: string
  className?: string
}

export function SimulationButton({ title, className }: SimulationButtonProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className={className || "w-full bg-primary-red font-bold"}>
          {title}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <FormContent />
      </DrawerContent>
    </Drawer>
  )
}
