'use client'

import { EllipsisLoader } from "@/components/shared/ellipsis-loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { creationOrigin, useUtmParams } from "@/context/utm-context";
import { useProposals } from "@/hooks/use-proposals";
import { cn } from "@/lib/utils";
import { FormData, formSchema } from "@/schemas/form";
import { AuthService } from "@/services/auth-service";
import { DataService } from "@/services/data-service";
import { InteractionResponse } from "@/types/interaction";
import { Contracts, Proposal } from "@/types/proposals";
import { env } from "@/utils/env";
import { maskCPF } from "@/utils/mask/mask-cpf";
import { maskPhone } from "@/utils/mask/mask-phone";
import { zodResolver } from "@hookform/resolvers/zod";
import { TriangleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function MobileFormDataPage() {
  const router = useRouter();

  const { setProposals, setOperatorInteraction } = useProposals();
  const { utmSource, utmContent, utmCampaign, utmId } = useUtmParams();

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
      const contracts: Contracts = await DataService.getContractsByCustomerDocument(personData.cpf);
      const amountContracts: Proposal[] = contracts.contratosElegiveis;
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
      reset();

      if (amountContracts.length <= 0) {
        setTimeout(() => {
          toast.warning("NENHUMA PROPOSTA ENCONTRADA PARA O CPF INFORMADO", {
            description: "Infelizmente no momento não encontramos propostas de portabilidade para você.",
          });
        }, 3000);
        router.push("/");
        return;
      }

      setProposals(contracts);
      setOperatorInteraction(interaction);
      router.push("/area-cliente/simulacao");
    } catch {
      toast.warning("NENHUMA PROPOSTA ENCONTRADA PARA O CPF INFORMADO", {
        description: "Infelizmente no momento não encontramos propostas de portabilidade para você.",
      });
      setTimeout(() => {
        router.push(`/?utm_source=${utmSource}&utm_campaign=${utmCampaign}&utm_content=${utmContent}&utm_id=${utmId}`);
      }, 2000);
    }
  });

  return (
    <>
      <div className="flex justify-center items-center space-x-4">
        <span className="p-3 border rounded-2xl">
          <TriangleIcon className="text-primary-red" />
        </span>
        <div>
          <h1 className="text-lg font-semibold leading-none tracking-tight pb-1.5">
            Faça uma simulação <br />
            grátis dos seus contratos
          </h1>
          <h3 className="max-w-64 text-[13px] text-muted-foreground">
            Preencha o formulário corretamente.
          </h3>
        </div>
      </div>

      <div className="max-w-sm w-full mx-auto pb-6 px-3">
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

      <div className="w-full flex flex-col items-center space-y-6 p-4">
        <Button
          type="button"
          className="w-full flex justify-center items-center font-medium px-6 hover:bg-black hover:text-primary"
          onClick={onSubmit}
        >
          {!isSubmitting && <span>Simular propostas</span>}
          {isSubmitting && <EllipsisLoader />}
        </Button>
      </div>
    </>
  )
}
