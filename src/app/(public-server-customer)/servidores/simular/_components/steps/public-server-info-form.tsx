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
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { PublicServerCustomerSchema } from "../form";
import { PublicServerCustomerIsArmedForcesOptions } from "./public-server-options/is-armed-forces-options";
import { PublicServerCustomerIsFederalOptions } from "./public-server-options/is-federal-options";
import { PublicServerCustomerIsMunicipalOptions } from "./public-server-options/is-municipal-options";
import { PublicServerCustomerIsStateOptions } from "./public-server-options/is-state-options";

export function PublicServerCustomerInfoForm() {
  const form = useFormContext<PublicServerCustomerSchema>();

  const [isFederal, setIsFederal] = useState(false);
  const [isState, setIsState] = useState(false);
  const [itIsMunicipal, setItIsMunicipal] = useState(false);
  const [isArmedForces, setIsArmedForces] = useState(false);

  const { nextStep } = useStepper();

  async function handleNextStep() {
    const isValid = await form.trigger("publicServerCustomerInfoForm");
    if (isValid) nextStep();
  }

  return (
    <div className="grid grid-cols-1 items-center py-6 sm:py-12 md:py-16">
      <h1 className="text-xl font-medium">Perguntas</h1>
      <FormField
        control={form.control}
        name="publicServerCustomerInfoForm"
        render={({ field }) => (
          <FormItem className="py-4 space-y-3">
            <FormLabel>
              Você é servidor público?
            </FormLabel>
            <FormControl>
              <RadioGroup
                className="flex flex-col"
                onValueChange={(value) => {
                  field.onChange(value);
                  setIsFederal(value === "federal");
                  setIsState(value === "state");
                  setItIsMunicipal(value === "municipal");
                  setIsArmedForces(value === "armedForces");
                }}
              >
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem
                      className="border-[#555]"
                      value="federal"
                    />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Federal
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="state" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Estadual
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="municipal" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Municipal
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="armedForces" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Forças Armadas
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Separator />
      {isFederal && (
        <PublicServerCustomerIsFederalOptions formControl={form.control} />
      )}

      {isState && (
        <PublicServerCustomerIsStateOptions formControl={form.control} />
      )}

      {itIsMunicipal && (
        <PublicServerCustomerIsMunicipalOptions formControl={form.control} />
      )}

      {isArmedForces && (
        <PublicServerCustomerIsArmedForcesOptions formControl={form.control} />
      )}
      <div className="w-full sm:flex sm:justify-center sm:items-center">
        <Button
          type="button"
          size="lg"
          className="w-full h-14 bg-secondary-red rounded-sm mt-6 sm:h-10 sm:w-72 sm:text-sm sm:rounded sm:mt-12"
          onClick={() => handleNextStep()}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}