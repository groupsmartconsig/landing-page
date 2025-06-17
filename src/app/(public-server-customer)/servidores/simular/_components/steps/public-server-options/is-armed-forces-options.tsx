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

interface PublicServerCustomerIsArmedForcesOptionsProps {
  formControl: Control<FieldValues, any, FieldValues>
}

export function PublicServerCustomerIsArmedForcesOptions({
  formControl
}: PublicServerCustomerIsArmedForcesOptionsProps) {
  return (
    <FormField
      control={formControl}
      name="isArmedForcesPublicServer"
      render={({ field }) => (
        <FormItem className="py-4 space-y-3">
          <FormLabel>
            Você é servidor público municipal de qual esfera?
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col"
            >
              <FormItem className="flex items-center gap-x-2">
                <FormControl>
                  <RadioGroupItem className="border-[#555]" value="activeMilitar" />
                </FormControl>
                <FormLabel className="font-normal pb-1">
                  Militar Ativo
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-x-2">
                <FormControl>
                  <RadioGroupItem className="border-[#555]" value="paidReservation" />
                </FormControl>
                <FormLabel className="font-normal pb-1">
                  Reserva Remunerada
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-x-2">
                <FormControl>
                  <RadioGroupItem className="border-[#555]" value="retired" />
                </FormControl>
                <FormLabel className="font-normal pb-1">
                  Reformados
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-x-2">
                <FormControl>
                  <RadioGroupItem className="border-[#555]" value="pensioners" />
                </FormControl>
                <FormLabel className="font-normal pb-1">
                  Pensionistas
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