import { Button } from '@/components/ui/button'
import {
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeftIcon } from 'lucide-react'

export function FormContent() {
  return (
    <div className="mx-auto w-full max-w-sm pt-6">
      <DrawerHeader>
        <DrawerTitle>Vamos começar?</DrawerTitle>
        <DrawerDescription>
          Siga algumas etapas para realizar a simulação.
        </DrawerDescription>
      </DrawerHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input
            id="username"
            defaultValue="@peduarte"
            className="col-span-3"
          />
        </div>
      </div>
      <DrawerFooter>
        <Button>Simular</Button>
        <DrawerClose asChild>
          <Button
            type="button"
            variant="ghost"
            className="flex items-center gap-2"
          >
            <ArrowLeftIcon className="size-4" />
            Voltar
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  )
}
