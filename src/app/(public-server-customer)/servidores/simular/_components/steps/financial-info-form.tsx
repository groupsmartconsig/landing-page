"use client"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useStepper } from "@/hooks/use-stepper";
import { useFormContext } from "react-hook-form";

export function PublicServerCustomerFinancialInfoForm() {
  const form = useFormContext();

  const { nextStep } = useStepper();

  return (
    <div className="grid grid-cols-1 items-center py-6 sm:py-12 md:py-16">
      <h1 className="text-xl font-medium">Perguntas</h1>
      <FormField
        control={form.control}
        name="type"
        render={({ field }) => (
          <FormItem className="py-4 space-y-3">
            <FormLabel>
              Você possui cartão consignado?
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col"
              >
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="sim" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Sim
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="nao" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Não
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Separator />
      <FormField
        control={form.control}
        name="type"
        render={({ field }) => (
          <FormItem className="py-4 space-y-3">
            <FormLabel>
              Qual banco está descontando hoje?
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col"
              >
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="bancobmg" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Banco Bmg
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="bancopan" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Banco Pan
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="bancosantander" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Banco Santander
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="bancodaycoval" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Banco Daycoval
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="bancomaster" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Banco Master
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="outro" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Outro
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <small className="text-[11px] text-muted-foreground pb-4">
        *Caso o seu cartão não seja de um desses bancos, infelizmente não poderemos prosseguir com o atendimento.
      </small>
      <Separator className="sm:hidden" />
      <div className="w-full sm:flex sm:justify-center sm:items-center sm:mt-6">
        <Button
          type="button"
          size="lg"
          className="w-full h-14 bg-secondary-red rounded-sm mt-6 sm:h-10 sm:w-72 sm:text-sm sm:rounded sm:mt-12"
          onClick={() => nextStep()}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}