import { EllipsisLoader } from "@/components/shared/ellipsis-loader";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProposals } from "@/hooks/use-proposals";
import { useStepper } from "@/hooks/use-stepper";
import { cn } from "@/lib/utils";
import { DataService } from "@/services/data-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { TriangleIcon } from "lucide-react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(4, "O nome completo é um campo obrigatório."),
  cpf: z.string().min(14, "O CPF é obrigatório! Informe um CPF válido."),
  phoneNumber: z.string().min(14, "Informe um telefone com DDD válido."),
})

type FormData = z.infer<typeof formSchema>

export function DesktopFormPerson() {
  const { nextStep } = useStepper();
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
        name: data.name,
        phoneNumber: data.phoneNumber,
        cpf: data.cpf,
      };

      const response = await DataService.getContractsByCustomerDocument(formData.cpf);
      setProposals(response);

      localStorage.setItem("nome", formData.name);
      localStorage.setItem("contato", formData.phoneNumber);
      localStorage.setItem("cpf", formData.cpf);

      nextStep();
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
      <div className="w-full flex items-center space-x-4 pt-8 pb-4 px-6">
        <span className="p-3 border rounded-2xl">
          <TriangleIcon className="text-primary-red" />
        </span>
        <div>
          <DialogTitle className="text-lg">
            Informe os seus dados pessoais
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

      <DialogFooter className="w-full p-8">
        <div className="flex justify-center items-center space-x-6">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Voltar
            </Button>
          </DialogClose>

          <Button
            type="button"
            className="w-full flex justify-center items-center font-medium px-6 hover:bg-black hover:text-primary"
            onClick={onSubmit}
          >
            {!isSubmitting && <span>Simular propostas</span>}
            {isSubmitting && <EllipsisLoader />}
          </Button>
        </div>
      </DialogFooter>
    </>
  )
}