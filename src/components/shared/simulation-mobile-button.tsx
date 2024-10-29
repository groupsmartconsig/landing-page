import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { FormContent } from '../form/mobile'

interface SimulationMobileButtonProps {
  title: string
  className?: string
}

export function SimulationMobileButton({ 
  title, 
  className 
}: SimulationMobileButtonProps) {
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
