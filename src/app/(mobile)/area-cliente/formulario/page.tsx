'use client'

import { EllipsisLoader } from "@/components/shared/ellipsis-loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProposals } from "@/hooks/use-proposals";
import { cn } from "@/lib/utils";
import { AuthService } from "@/services/auth-service";
import { DataService } from "@/services/data-service";
import { env } from "@/utils/env";
import { zodResolver } from "@hookform/resolvers/zod";
import { TriangleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(4, "O nome completo é um campo obrigatório."),
  cpf: z.string().min(14, "O CPF é obrigatório! Informe um CPF válido."),
  phoneNumber: z.string().min(14, "Informe um telefone com DDD válido."),
})

type FormData = z.infer<typeof formSchema>;

export default function MobileFormDataPage() {
  const route = useRouter();

  const { setProposals } = useProposals();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      cpf: '',
      phoneNumber: ''
    }
  });

  const maskCPF = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  }

  const maskPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
  }

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

      await AuthService.signIn(formData.username, formData.password);

      const token = localStorage.getItem("token");
      if (!token) throw new Error("401 Server Error: Token not found.");

      const response = await DataService.getContractsByCustomerDocument(personData.cpf);
      const replaceDocumentValue = personData.cpf.replace(/\D/g, "");
      const replacePhoneNumberValue = personData.phoneNumber.replace(/[\s-]/g, "");

      setProposals(response);


      await DataService.createCustomer(
        personData.name, replacePhoneNumberValue, replaceDocumentValue
      );

      localStorage.setItem("nome", personData.name);
      localStorage.setItem("contato", personData.phoneNumber);
      localStorage.setItem("cpf", personData.cpf);

      route.push("/area-cliente/simulacao")
    } catch (error) {
      console.error("Erro:", error);
      toast.warning("NENHUMA PROPOSTA ENCONTRADA PARA O CPF INFORMADO", {
        description: "Infelizmente no momento não encontramos propostas de portabilidade para você.",
        duration: 5000,
      })
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