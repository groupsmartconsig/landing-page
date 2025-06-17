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

interface PublicServerCustomerIsFederalOptionsProps {
  formControl: Control<FieldValues, any, FieldValues>
}

export function PublicServerCustomerIsFederalOptions({
  formControl
}: PublicServerCustomerIsFederalOptionsProps) {
  return (
    <FormField
      control={formControl}
      name="isPublicServer"
      render={({ field }) => (
        <FormItem className="py-4 space-y-3">
          <FormLabel>
            Você é servidor público federal de qual esfera?
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col"
            >
              <FormItem className="flex items-center gap-x-2">
                <FormControl>
                  <RadioGroupItem className="border-[#555]" value="publicServant" />
                </FormControl>
                <FormLabel className="font-normal pb-1">
                  Concursado
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-x-2">
                <FormControl>
                  <RadioGroupItem className="border-[#555]" value="permanentAssets" />
                </FormControl>
                <FormLabel className="font-normal pb-1">
                  Ativo Permanente
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-x-2">
                <FormControl>
                  <RadioGroupItem className="border-[#555]" value="retiredOrPensioner" />
                </FormControl>
                <FormLabel className="font-normal pb-1">
                  Aposentado ou pensionista
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-x-2">
                <FormControl>
                  <RadioGroupItem className="border-[#555]" value="clt" />
                </FormControl>
                <FormLabel className="font-normal pb-1">
                  CLT/Celetista
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-x-2">
                <FormControl>
                  <RadioGroupItem className="border-[#555]" value="commissionedPosition" />
                </FormControl>
                <FormLabel className="font-normal pb-1">
                  Cargo Comissionado
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-x-2">
                <FormControl>
                  <RadioGroupItem className="border-[#555]" value="temporaryPosition" />
                </FormControl>
                <FormLabel className="font-normal pb-1">
                  Cargo Temporário
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