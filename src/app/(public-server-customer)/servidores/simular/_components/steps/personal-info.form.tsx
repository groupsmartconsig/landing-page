"use client"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStepper } from "@/hooks/use-stepper";
import { useFormContext } from "react-hook-form";
import { PublicServerCustomerSchema } from "../form";

export function PublicServerCustomerPersonalInfoForm() {
  const form = useFormContext<PublicServerCustomerSchema>();

  const { nextStep } = useStepper();

  async function handleNextStep() {
    const isValid = await form.trigger("publicServerCustomerPersonal");
    if (isValid) nextStep();
  }

  return (
    <div className="grid grid-cols-1 items-center py-6 sm:py-12 md:py-16">
      <small className="text-[11px] text-muted-foreground pb-6 sm:hidden">
        *Seus dados serão usados exclusivamente para entrarmos em contato e realizarmos a análise gratuita do seu contrato consignado com segurança e sigilo.
      </small>

      <h1 className="text-xl font-medium">Dados</h1>

      <FormField
        control={form.control}
        name="publicServerCustomerPersonal.name"
        render={({ field }) => (
          <FormItem className="py-4">
            <FormLabel className="text-muted-foreground">
              Nome completo
            </FormLabel>
            <FormControl>
              <Input
                placeholder="Informe seu nome"
                className="px-0 border-x-0 border-t-0 border-b rounded-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="publicServerCustomerPersonal.phoneNumber"
        render={({ field }) => (
          <FormItem className="py-4">
            <FormLabel className="text-muted-foreground">
              Telefone com DDD
            </FormLabel>
            <FormControl>
              <Input
                placeholder="Informe um telefone válido"
                className="px-0 border-x-0 border-t-0 border-b rounded-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="publicServerCustomerPersonal.cpf"
        render={({ field }) => (
          <FormItem className="py-4">
            <FormLabel className="text-muted-foreground">
              CPF
            </FormLabel>
            <FormControl>
              <Input
                placeholder="Informe seu CPF"
                className="px-0 border-x-0 border-t-0 border-b rounded-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <small className="hidden sm:flex text-[11px] text-muted-foreground pb-6">
        *Seus dados serão usados exclusivamente para entrarmos em contato e realizarmos a análise gratuita do seu contrato consignado com segurança e sigilo.
      </small>

      <div className="w-full sm:flex sm:justify-center sm:items-center sm:mt-6">
        <Button
          type="button"
          size="lg"
          className="w-full h-14 bg-secondary-red rounded-sm mt-6 sm:h-10 sm:w-72 sm:text-sm sm:rounded"
          onClick={() => handleNextStep()}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}