"use client";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { maskCPF } from "@/utils/mask/mask-cpf";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BrasilCartSolicitationFormSchema, BrasilCartSolicitationFormData } from "@/schemas/brasil-card-solicitation.form";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";
import { occupations } from "@/utils/enums/occupations-enum";
import { UFs } from "@/utils/enums/ufs-enum";
import { format } from "date-fns";
import { maskDate } from "@/utils/mask/mask-date";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


export function SolicitationForm() {
  const form = useForm<BrasilCartSolicitationFormData>({
    resolver: zodResolver(BrasilCartSolicitationFormSchema),
    defaultValues: {
      cpf: "",
      uf: "",
      occupation: "",
      birthday: ""
    },
  });

  const { watch, setValue, getFieldState } = form;

  const cpf = watch("cpf");
  const birthday = watch('birthday')

  useEffect(() => {
    setValue("cpf", maskCPF(cpf));
    
  }, [cpf, setValue]);

  useEffect(()=>{
    setValue('birthday', maskDate(birthday))

  }, [birthday, setValue ])

  function onSubmit(data: BrasilCartSolicitationFormData) {
    data.birthday.replaceAll("/", "-")
    
    axios.post('/api/brasilcard/client-analyse', data)
      .then((resp)=>{
        console.log(resp);
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-md w-full">
        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="CPF"
                  {...field}
                  maxLength={14}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="uf"
          render={({ field }) => (
            <FormItem>
                <Select onValueChange={field.onChange} defaultValue={field.value} >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a sua UF" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {
                      UFs.map((uf)=>{
                        return(
                          <SelectItem key={`uf-${uf}`} value={uf}>
                            {uf}
                          </SelectItem>
                        )
                      })
                    }
                  </SelectContent>
                </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="occupation"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Situação Empregatícia" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {occupations.map((occupation, index)=>{
                    return(
                      <SelectItem key={`${occupation}-${index}`} value={occupation} >{occupation}</SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="birthday"
          render={({field})=>(
            <FormItem>
              <FormControl>
                <div className="flex flex-col gap-3">
                  <div className="relative flex gap-2">  
                    <Input
                      placeholder='Data de Nascimento'
                      {...field}
                    />
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="date-picker"
                          variant="ghost"
                          className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                        >
                          <CalendarIcon className="size-3.5" />
                          <span className="sr-only">Select date</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="end"
                        alignOffset={-8}
                        sideOffset={10}
                      >
                        <Calendar
                          mode="single"
                          locale={ptBR}
                          selected={ new Date(field.value) ?? undefined}
                          captionLayout="dropdown"
                          onSelect={(value)=>{
                            if(value){
                              setValue('birthday', format(value.toDateString(), 'dd/MM/yyyy'))
                            }
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full bg-[#024C89] font-bold" type="submit">Quero o Meu BrasilCard</Button>
      </form>
    </Form>
  );
}
