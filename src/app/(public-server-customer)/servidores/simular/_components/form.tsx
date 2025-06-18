"use client"

import {
  publicServerCustomerFinancialSchema,
  publicServerCustomerInfoFormSchema,
  publicServerCustomerPersonalSchema
} from "@/schemas/public-server-customer-form";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PublicServerCustomerStepper } from "./stepper";
import { PublicServerCustomerFinancialInfoForm } from "./steps/financial-info-form";
import { PublicServerCustomerPersonalInfoForm } from "./steps/personal-info.form";
import { PublicServerCustomerPolicyInfoForm } from "./steps/policy-info-form";
import { PublicServerCustomerInfoForm } from "./steps/public-server-info-form";
import { PublicServerCustomerSuccessfulStepContent } from "./steps/successful-step-content";
import { PublicServerCustomerUploadDocumentForm } from "./steps/upload-document-form";

const formSchema = z.object({
  publicServerCustomerInfoForm: publicServerCustomerInfoFormSchema,
  publicServerCustomerFinancial: publicServerCustomerFinancialSchema,
  publicServerCustomerPersonal: publicServerCustomerPersonalSchema,
});

export type PublicServerCustomerSchema = z.infer<typeof formSchema>;

export function PublicServerCustomerSimulationForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<PublicServerCustomerSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      publicServerCustomerPersonal: {
        name: "",
        phoneNumber: "",
        cpf: ""
      }
    }
  });

  return (
    <Form {...form}>
      <form>
        <PublicServerCustomerStepper
          steps={[
            {
              title: "Suas informações",
              content: <PublicServerCustomerInfoForm />
            },
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
              content: <PublicServerCustomerUploadDocumentForm />
            },
            {
              title: "Suas informações",
              content: <PublicServerCustomerPolicyInfoForm />
            },
            {
              title: "",
              content: <PublicServerCustomerSuccessfulStepContent />
            },
          ]}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />
      </form>
    </Form>
  )
}