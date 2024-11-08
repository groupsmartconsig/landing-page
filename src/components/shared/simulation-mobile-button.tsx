import { Button } from '@/components/ui/button'

import Link from 'next/link'

interface SimulationMobileButtonProps {
  title: string
  className?: string
}

export function SimulationMobileButton({
  title,
  className
}: SimulationMobileButtonProps) {
  return (
    <Link href="/area-cliente">
      <Button className={className || "w-full bg-primary-red font-bold"}>
        {title}
      </Button>
    </Link>
  )
}
