"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function PublicServerCustomerNavigateButton() {
  const router = useRouter();

  return (
    <Button
      type="button"
      className="w-full bg-secondary-red rounded"
      onClick={() => router.push("/servidores/simular")}
    >
      Simular crédito
    </Button>
  )
}