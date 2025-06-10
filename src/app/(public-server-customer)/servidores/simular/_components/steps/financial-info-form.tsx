"use client"

import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import { useStepper } from "@/hooks/use-stepper";
import { useFormContext } from "react-hook-form";

export function PublicServerCustomerFinancialInfoForm() {
  const form = useFormContext();

  const { nextStep } = useStepper();

  return (
    <div className="grid grid-cols-1 items-center py-6">
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
      <Separator />
      <Button
        type="button"
        size="lg"
        className="h-[56px] bg-secondary-red rounded-sm mt-6"
        onClick={() => nextStep()}
      >
        Próximo
      </Button>
    </div>
  );
}