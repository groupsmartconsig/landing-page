import { Control, UseFormSetValue } from "react-hook-form";
import { FormField, FormItem, FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { SolicitationFormData } from "@/app/(partners)/brasilcard/schemas/solicitation-schema";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { EmploymentStatus } from "@/app/(partners)/brasilcard/consts/employment-status-const";
import { Occupations } from "@/app/(partners)/brasilcard/consts/occupations-const";
import { MaritalStatus } from "@/app/(partners)/brasilcard/consts/marital-status-const";


interface StepProps {
    control: Control<SolicitationFormData>;
    setValue: UseFormSetValue<SolicitationFormData>;
}

export function ComplementaryDataStep({ control, setValue }: StepProps) {
    return (
        <section className="flex flex-col gap-6">
            <h3 className=" font-semibold text-xl">
                Dados Complementares (Etapa 3 de 3)
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-between">
                <FormField
                    control={control}
                    name="marital_status"
                    disabled = {control._defaultValues.marital_status ? true : false}
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={control._defaultValues.employment_status}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Estado cívil" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {MaritalStatus.map((status)=>{
                                        return(
                                            <SelectItem key={status.codigo} value={status.codigo}>
                                                {status.descricao}
                                            </SelectItem>
                                        )
                                    })}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="job"
                    disabled = {control._defaultValues.job ? true : false}
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={control._defaultValues.employment_status}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Profissão" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {Occupations.map((occupation)=>{
                                        return(
                                            <SelectItem key={`${occupation.codigo}`} value={occupation.codigo} >
                                                {occupation.descricao}
                                            </SelectItem>
                                        )
                                    })}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="income"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input type="number" placeholder="Renda" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="employment_status"
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={control._defaultValues.employment_status}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Situação Empregatícia" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {EmploymentStatus.map((status, index)=>{
                                        return(
                                            <SelectItem key={`${status}-${index}`} value={`000${index + 1}`} >{status}</SelectItem>
                                        )
                                    })}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="job_company"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input placeholder="Empresa" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <FormField
                    control={control}
                    name="politically_exposed_position"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between space-x-3">
                            <FormLabel>
                                Pessoa politicamente exposta?
                            </FormLabel>
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    className="mt-[0!important]"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="politically_exposed_position_date"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <div className="flex flex-col gap-3">
                                    <div className="relative flex gap-2">  
                                        <Input placeholder="Data da posição politicamente exposta" {...field} />  
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
                                                    selected={ field.value ? new Date(field.value): undefined}
                                                    captionLayout="dropdown"
                                                    onSelect={(value)=>{
                                                    if(value){
                                                        setValue('politically_exposed_position_date', format(value.toDateString(), 'dd/MM/yyyy'))
                                                    }
                                                    }}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="politically_exposed_relative"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between space-x-3">
                            <FormLabel>
                                Parente de pessoa politicamente exposta?
                            </FormLabel>
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    className="mt-[0!important]"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </section>
    )
}