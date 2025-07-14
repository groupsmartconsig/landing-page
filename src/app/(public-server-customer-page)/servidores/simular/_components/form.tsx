"use client"

import {
  publicServerCustomerDocumentUploadSchema,
  publicServerCustomerFinancialSchema,
  publicServerCustomerInfoFormSchema,
  publicServerCustomerPersonalSchema
} from "@/schemas/public-server-customer-form";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PublicServerCustomerStepper } from "./stepper";
import { PublicServerCustomerFinancialInfoForm } from "./steps/financial-info-form";
import { PublicServerCustomerPersonalInfoForm } from "./steps/personal-info.form";
import { PublicServerCustomerPolicyInfoForm } from "./steps/policy-info-form";
import { PublicServerCustomerInfoForm } from "./steps/public-server-info-form";
import { PublicServerCustomerSuccessfulStepContent } from "./steps/successful-step-content";
import { PublicServerCustomerUnsuccessfulStepContent } from "./steps/unsuccessful-step-content";
import { PublicServerCustomerUploadDocumentForm } from "./steps/upload-document-form";

const formSchema = z.object({
  publicServerCustomerInfoForm: publicServerCustomerInfoFormSchema,
  publicServerCustomerFinancial: publicServerCustomerFinancialSchema,
  publicServerCustomerPersonal: publicServerCustomerPersonalSchema,
  publicServerCustomerDocumentUpload: publicServerCustomerDocumentUploadSchema,
});

export type PublicServerCustomerSchema = z.infer<typeof formSchema>;

export function PublicServerCustomerSimulationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAValidCustomer, setIsAValidCustomer] = useState(false);

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

  const validateCustomerEligibility = async () => {
    const formData = form.getValues();
    const hasAPayrollCard = formData.publicServerCustomerFinancial?.hasAPayrollCard;
    const selectedBank = formData.publicServerCustomerFinancial?.currentBank;
    const isFederal = formData.publicServerCustomerInfoForm.isFederalPublicServer;
    const isMunicipal = formData.publicServerCustomerInfoForm.isMunicipalPublicServer;
    const isState = formData.publicServerCustomerInfoForm.isStatePublicServer;
    const isArmedForces = formData.publicServerCustomerInfoForm.isArmedForcesPublicServer;
    let isValid = true;

    if (
      isFederal === "5" || // CommissionedPosition = 5
      isFederal === "6" || // TemporaryPosition = 6
      isFederal === "4" || // CltCeletista = 4
      isFederal === "7"    // Other = 7
    ) {
      isValid = false;
    }

    if (
      isMunicipal === "5" || // CommissionedPosition = 5
      isMunicipal === "6" || // TemporaryPosition = 6
      isMunicipal === "4" || // CLTEmployee = 4
      isMunicipal === "7"    // Other = 7
    ) {
      isValid = false;
    }

    if (isState === "7") isValid = false; // Others = 7
    if (isArmedForces === "5") isValid = false; // Others = 5
    if (hasAPayrollCard === "no") isValid = false;
    if (selectedBank === "outro") isValid = false;

    setIsAValidCustomer(isValid);
  };

  const watchedFields = form.watch([
    "publicServerCustomerInfoForm",
    "publicServerCustomerFinancial",
  ]);

  useEffect(() => {
    validateCustomerEligibility();
  }, [watchedFields]);

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
              content: isAValidCustomer ?
                <PublicServerCustomerFinancialInfoForm /> :
                <PublicServerCustomerUnsuccessfulStepContent />
            },
            {
              title: "Suas informações",
              content: isAValidCustomer ?
                <PublicServerCustomerPersonalInfoForm /> :
                <PublicServerCustomerUnsuccessfulStepContent />
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
          stepIsVisible={true}
        />
      </form>
    </Form>
  )
}