"use client"

import { Form } from "@/components/ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PublicServerCustomerStepper } from "./stepper";
import { PublicServerCustomerFinancialInfoForm } from "./steps/financial-info-form";
import { PublicServerCustomerPersonalInfoForm } from "./steps/personal-info.form";
import { PublicServerCustomerPolicyInfoForm } from "./steps/policy-info-form";

export function PublicServerCustomerSimulationForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm();

  return (
    <Form {...form}>
      <form>
        <PublicServerCustomerStepper
          steps={[
            {
              title: "Suas informações",
              content: <PublicServerCustomerFinancialInfoForm />
            },
            {
              title: "Suas informações",
              content: <PublicServerCustomerPersonalInfoForm />
            },
            {
              title: "Suas informações",
              content: <PublicServerCustomerPersonalInfoForm />
            },
            {
              title: "Suas informações",
              content: <PublicServerCustomerPolicyInfoForm />
            },
          ]}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />
      </form>
    </Form>
  )
}