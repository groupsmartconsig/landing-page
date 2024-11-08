"use client";

import type { ConfettiRef } from "@/components/magic-ui/confetti";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ZapIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import Confetti from "@/components/magic-ui/confetti";

export default function MobileFormFinishedPage() {
  const confettiRef = useRef<ConfettiRef>(null);
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000)
      return () => clearTimeout(timer)
    }

    window.location.href = "https://www.redirectmais.com/run/anuncio-teste";
  }, [count]);

  return (
    <div className="w-full relative flex flex-col items-center justify-center overflow-hidden">
      <div className="flex justify-center items-center space-x-4 pb-4">
        <span className="p-3 border rounded-2xl">
          <ZapIcon className="text-green-500" />
        </span>
        <div>
          <h1 className="text-lg text-green-500 font-semibold leading-none tracking-tight">
            Portabilidades disponíveis
          </h1>
          <h3 className="max-w-64 text-sm text-muted-foreground">
            Encaminhando você para a nossa <br />
            central de atendimento.
          </h3>
        </div>
      </div>
      <Separator />

      <Card className="w-80 mx-auto my-12">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Aguarde, você será redirecionado(a)
          </CardTitle>
          <CardDescription className="text-center">
            Estamos selecionando um de nossos atendentes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-6xl font-bold text-center text-primary">
            {count}
          </div>
          <p className="mt-4 text-center text-muted-foreground">
            Redirecionando em {count} segundo{count !== 1 ? 's' : ''}...
          </p>
        </CardContent>
      </Card>

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </div>
  )
}