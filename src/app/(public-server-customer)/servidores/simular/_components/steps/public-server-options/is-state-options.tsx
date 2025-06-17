"use client"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Control, FieldValues } from "react-hook-form";

interface PublicServerCustomerIsStateOptionsProps {
  formControl: Control<FieldValues, any, FieldValues>
}

export function PublicServerCustomerIsStateOptions({
  formControl
}: PublicServerCustomerIsStateOptionsProps) {
  return (
    <FormField
      control={formControl}
      name="isStatePublicServer"
      render={({ field }) => (
        <FormItem className="py-4 space-y-3">
          <FormLabel>
            Qual autarquia você pertence?
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col"
            >
              <FormItem className="flex items-center gap-x-2">
                <FormControl>
                  <RadioGroupItem className="border-[#555]" value="pmsp" />
                </FormControl>
                <FormLabel className="font-normal pb-1">
                  PMSP - Polícia Militar
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-x-2">
                <FormControl>
                  <RadioGroupItem className="border-[#555]" value="sefaz" />
                </FormControl>
                <FormLabel className="font-normal pb-1">
                  SEFAZ - Secretaria da Fazenda e Planejamento
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-x-2">
                <FormControl>
                  <RadioGroupItem className="border-[#555]" value="spprev" />
                </FormControl>
                <FormLabel className="font-normal pb-1">
                  SPPREV - Aposentados
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-x-2">
                <FormControl>
                  <RadioGroupItem className="border-[#555]" value="hcgmusp" />
                </FormControl>
                <FormLabel className="font-normal pb-1">
                  HCFMUSP - Hopital das Clínicas da Faculdade de Medicina de São Paulo.
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-x-2">
                <FormControl>
                  <RadioGroupItem className="border-[#555]" value="hcrp" />
                </FormControl>
                <FormLabel className="font-normal pb-1">
                  HCRP - Hospital das Clínicas da Faculdade de Medicina de Ribeirão Preto.
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-x-2">
                <FormControl>
                  <RadioGroupItem className="border-[#555]" value="iamspe" />
                </FormControl>
                <FormLabel className="font-normal pb-1">
                  IAMSPE - Instituto de assistência médica ao servidor Público Estadual de S. Paulo.
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-x-2">
                <FormControl>
                  <RadioGroupItem className="border-[#555]" value="others" />
                </FormControl>
                <FormLabel className="font-normal pb-1">
                  Outros
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}