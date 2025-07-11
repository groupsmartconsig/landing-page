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
import { maskCPF } from "@/utils/mask/mask-cpf";
import { maskFullName } from "@/utils/mask/mask-full-name";
import { maskPhone } from "@/utils/mask/mask-phone";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { PublicServerCustomerSchema } from "../form";

export function PublicServerCustomerPersonalInfoForm() {
  const form = useFormContext<PublicServerCustomerSchema>();

  const { nextStep } = useStepper();

  const name = form.watch("publicServerCustomerPersonal.name");
  const phoneNumber = form.watch("publicServerCustomerPersonal.phoneNumber");
  const document = form.watch("publicServerCustomerPersonal.cpf");

  useEffect(() => {
    if (name && phoneNumber && document) {
      const timer = setTimeout(async () => {
        const isValid = await form.trigger("publicServerCustomerPersonal");
        if (isValid) nextStep();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [name, phoneNumber, document, form, nextStep]);

  async function handleNextStep() {
    const isValid = await form.trigger("publicServerCustomerPersonal");
    if (isValid) nextStep();
  }

  const handleNameChange = (value: string) => {
    const maskedValue = maskFullName(value);
    return maskedValue;
  };

  const handlePhoneChange = (value: string) => {
    const maskedValue = maskPhone(value);
    return maskedValue;
  };

  const handleCPFChange = (value: string) => {
    const maskedValue = maskCPF(value);
    return maskedValue;
  };

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
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                maxLength={100}
                placeholder="Informe seu nome"
                className="px-0 border-x-0 border-t-0 border-b rounded-none"
                {...field}
                onChange={(e) => {
                  const maskedValue = handleNameChange(e.target.value);
                  field.onChange(maskedValue);
                }}
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
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                inputMode="numeric"
                maxLength={15}
                placeholder="Informe um telefone válido"
                className="px-0 border-x-0 border-t-0 border-b rounded-none"
                {...field}
                onChange={(e) => {
                  const maskedValue = handlePhoneChange(e.target.value);
                  field.onChange(maskedValue);
                }}
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
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                inputMode="numeric"
                maxLength={14}
                placeholder="Informe seu CPF"
                className="px-0 border-x-0 border-t-0 border-b rounded-none"
                {...field}
                onChange={(e) => {
                  const maskedValue = handleCPFChange(e.target.value);
                  field.onChange(maskedValue);
                }}
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