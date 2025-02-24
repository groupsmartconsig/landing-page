import {
  DialogDescription,
  DialogFooter,
  DialogTitle
} from "@/components/ui/dialog";

import { EllipsisLoader } from "@/components/shared/ellipsis-loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { creationOrigin, useUtmParams } from "@/context/utm-context";
import { useProposals } from "@/hooks/use-proposals";
import { useStepper } from "@/hooks/use-stepper";
import { cn } from "@/lib/utils";
import { FormData, formSchema } from "@/schemas/form";
import { AuthService } from "@/services/auth-service";
import { DataService } from "@/services/data-service";
import { InteractionResponse } from "@/types/interaction";
import { Proposal } from "@/types/proposals";
import { env } from "@/utils/env";
import { maskCPF } from "@/utils/mask/mask-cpf";
import { maskPhone } from "@/utils/mask/mask-phone";
import { zodResolver } from "@hookform/resolvers/zod";
import { TriangleIcon } from "lucide-react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

export function DesktopFormPerson() {
  const { utmSource, utmContent, utmCampaign, utmId } = useUtmParams();
  const { nextStep } = useStepper();
  const { setProposals, setOperatorInteraction } = useProposals();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      cpf: '',
      phoneNumber: ''
    }
  });

  const cpf = watch('cpf');
  const phoneNumber = watch('phoneNumber');

  useEffect(() => {
    setValue('cpf', maskCPF(cpf));
  }, [cpf, setValue]);

  useEffect(() => {
    setValue('phoneNumber', maskPhone(phoneNumber));
  }, [phoneNumber, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const formData = {
        username: env.NEXT_PUBLIC_USERNAME,
        password: env.NEXT_PUBLIC_PASSWORD,
      };

      const personData = {
        name: data.name,
        phoneNumber: data.phoneNumber,
        cpf: data.cpf,
      };

      const auth = await AuthService.signIn(formData.username, formData.password);
      const token = auth.accessToken;
      if (!token) throw new Error("401 Server Error: Token not found.");

      const replaceDocumentValue = personData.cpf.replace(/\D/g, "");
      const replacePhoneNumberValue = personData.phoneNumber.replace(/[\s()-]/g, "");
      const response = await DataService.getContractsByCustomerDocument(personData.cpf);
      const amountContracts: Proposal[] = await response.contratosElegiveis;
      const interaction: InteractionResponse = await DataService.createInteractionWithOperator();

      localStorage.setItem("nome", personData.name);
      localStorage.setItem("contato", replacePhoneNumberValue);
      localStorage.setItem("cpf", replaceDocumentValue);
      localStorage.setItem("operator_id", interaction.operator.id);
      localStorage.setItem("operator_name", interaction.operator.name);
      localStorage.setItem("operator_username", interaction.operator.username);
      localStorage.setItem("operator_contact", interaction.operator.phonenumber);

      const payload = {
        customerOrigin: {
          creationOrigin,
          marketingDetails: {
            utmCampaign,
            utmContent,
            utmSource,
            utmId
          }
        },
        assignedOperatorRequest: {
          id: interaction.operator.id,
          name: interaction.operator.name,
          username: interaction.operator.username,
          phonenumber: interaction.operator.phonenumber,
        },
        name: personData.name,
        phonenumber: replacePhoneNumberValue,
        cpf: replaceDocumentValue,
        amountContractsElegible: amountContracts.length,
      }

      await DataService.createCustomer(payload);

      if (amountContracts.length <= 0) {
        toast.warning("NENHUMA PROPOSTA ENCONTRADA PARA O CPF INFORMADO", {
          description: "Infelizmente no momento não encontramos propostas de portabilidade para você.",
          duration: 500,
        });

        return;
      }

      reset();
      setProposals(response);
      setOperatorInteraction(interaction);
      nextStep();
    } catch {
      reset();
    }
  });

  return (
    <>
      <div className="w-full flex items-center space-x-4 pt-8 pb-4 px-6">
        <span className="p-3 border rounded-2xl">
          <TriangleIcon className="text-primary-red" />
        </span>
        <div>
          <DialogTitle className="text-lg">
            Faça uma simulação grátis dos seus contratos
          </DialogTitle>
          <DialogDescription className="text-sm">
            Preencha o formulário corretamente.
          </DialogDescription>
        </div>
      </div>

      <div className="max-w-lg w-full mx-auto pb-6 px-6">
        <div className="grid grid-cols-1 gap-4 py-5">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              maxLength={100}
              className={cn(
                errors?.name
                  ? "border-primary-red focus-visible:ring-0"
                  : "border-input"
              )}
              {...register("name")}
            />
            {errors?.name?.message && (
              <span className="pl-2 text-xs text-primary-red font-medium italic">
                {errors?.name?.message}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cpf">CPF</Label>
            <Controller
              name="cpf"
              control={control}
              render={({ field }) => (
                <Input
                  id="cpf"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  inputMode="numeric"
                  maxLength={14}
                  className={cn(
                    errors?.cpf
                      ? "border-primary-red focus-visible:ring-0"
                      : "border-input"
                  )}
                  {...field}
                />
              )}
            />
            {errors?.cpf?.message && (
              <span className="pl-2 text-xs text-primary-red font-medium italic">
                {errors?.cpf?.message}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Telefone</Label>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <Input
                  id="phoneNumber"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  inputMode="numeric"
                  maxLength={15}
                  className={cn(
                    errors?.phoneNumber
                      ? "border-primary-red focus-visible:ring-0"
                      : "border-input"
                  )}
                  {...field}
                />
              )}
            />
            {errors?.phoneNumber?.message && (
              <span className="pl-2 text-xs text-primary-red font-medium italic">
                {errors?.phoneNumber?.message}
              </span>
            )}
          </div>
        </div>
      </div>

      <DialogFooter className="w-full flex justify-center items-center p-8">
        <Button
          type="submit"
          className="w-full h-10 flex font-medium px-6 hover:bg-black hover:text-primary"
          onClick={onSubmit}
        >
          {!isSubmitting && <span>Simular propostas</span>}
          {isSubmitting && (
            <div className="flex items-center gap-4">
              Consultando
              <EllipsisLoader />
            </div>
          )}
        </Button>
      </DialogFooter>
    </>
  )
}
