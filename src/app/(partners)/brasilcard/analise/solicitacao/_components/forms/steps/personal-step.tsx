import { Control, Form, UseFormSetValue } from "react-hook-form";
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { SolicitationFormData } from "@/app/(partners)/brasilcard/schemas/solicitation-schema";
import { maskDate } from "@/utils/mask/mask-date";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { States } from "@/app/(partners)/brasilcard/consts/states-const";
import { maskPhone } from "@/utils/mask/mask-phone";
import { maskCPF } from "@/utils/mask/mask-cpf";

interface StepProps {
    control: Control<SolicitationFormData>;
    setValue: UseFormSetValue<SolicitationFormData>;
    form: any; 
}

export function PersonalDataStep({ control, setValue, form }: StepProps) {
    return (
        <section className="flex flex-col gap-6">
            <h3 className=" font-semibold text-xl">
                Dados Pessoais (Etapa 1 de 3)
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-between">
                <FormField
                    control={control}
                    name="name"
                    disabled = {control._defaultValues.name ? true : false}
                    render={({field})=>(
                        <FormItem className="w-full">
                            <FormControl>
                                <Input 
                                    placeholder="Nome Completo"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="cpf"
                    disabled ={control._defaultValues.cpf ? true : false}
                    render={({ field }) => (
                        field.value && (field.value = maskCPF(field.value)),
                        <FormItem className="w-full">
                            <FormControl>
                                <Input placeholder="CPF" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="birth_date"
                    disabled= {control._defaultValues.birth_date ? true : false}
                    render={({ field }) => (
                       field.value && (field.value = maskDate(field.value.split("-").reverse().join("/"))),
                        <FormItem className="w-full">
                            <FormControl>
                                <div className="flex flex-col gap-3">
                                    <div className="relative flex gap-2">  
                                        <Input
                                            placeholder='Data de Nascimento'
                                            {...field}
                                        />
                                        { !control._defaultValues.birth_date &&(
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
                                                                setValue('birth_date', format(value.toDateString(), 'dd/MM/yyyy'))
                                                            }
                                                            }}
                                                        />
                                                    </PopoverContent>
                                                </Popover>        
                                            )
                                        }
                                        
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="mother_name"
                    disabled = {control._defaultValues.mother_name ? true : false}
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input placeholder="Nome da Mãe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="identity_document_number"
                    disabled = {control._defaultValues.identity_document_number ? true : false}
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input placeholder="RG" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="identity_document_state"
                    disabled = {control._defaultValues.identity_document_state ? true : false}
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="UF do RG" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    { States.map((state) => (
                                            <SelectItem key={`state-${state.descricao}`} value={state.codigo}>
                                                {state.descricao}
                                            </SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="cellphone"
                    render={({ field }) => (
                        field.value && (field.value = maskPhone(field.value)),
                        <FormItem className="w-full">
                            <FormControl>
                                <Input placeholder="Telefone com DD" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input placeholder="E-mail" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="sex"
                    disabled={control._defaultValues.sex ? true : false}   
                    render={({ field }) => (
                        <FormItem className="w-full">
                                <Select 
                                    onValueChange={field.onChange}
                                    defaultValue={control._defaultValues.sex}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Gênero" />
                                        </SelectTrigger> 
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="M">Masculino</SelectItem>
                                        <SelectItem value="F">Feminino</SelectItem>
                                        <SelectItem value="O">Outro</SelectItem>
                                    </SelectContent>
                                </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </section>
    )
}
