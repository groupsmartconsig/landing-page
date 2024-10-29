import { DesktopFormContent } from "../form/desktop"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"

interface SimulationDesktopButtonProps {
  title: string
  className?: string
}

export function SimulationDesktopButton({ 
  title, 
  className 
}: SimulationDesktopButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className || "w-full bg-primary-red font-bold text-lg"}>
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DesktopFormContent />
      </DialogContent>
    </Dialog>
  )
}
