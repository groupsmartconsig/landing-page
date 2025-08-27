import { Control, Form } from "react-hook-form";
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SolicitationFormData } from "@/app/(partners)/brasilcard/schemas/solicitation-schema";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { States } from "@/app/(partners)/brasilcard/consts/states-const";
import { maskCEP } from "@/utils/mask/mask-cep";
import { AddressTypes } from "@/app/(partners)/brasilcard/consts/adresses-types-const";

interface StepProps {
    control: Control<SolicitationFormData>;
}

export function AddressStep({ control }: StepProps) {
    return (
        <section className="flex flex-col gap-6">
            <h3 className=" font-semibold text-lg">Endereço (Etapa 2 de 3)</h3>
            <div className="grid grid-cols-1 gap-x-12 gap-6 sm:grid-cols-2 ">
                <FormField
                    control={control}
                    name="zipcode"
                    disabled = {control._defaultValues.zipcode ? true : false}
                    render={({ field }) => (
                        field.value && (field.value = maskCEP(field.value)),
                        <FormItem className="w-full">
                            <FormControl>
                                <Input type="text" placeholder="CEP" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="city"
                    disabled = {control._defaultValues.city ? true : false}
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input placeholder="Cidade" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="state"
                    disabled = {control._defaultValues.state ? true : false}
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={control._defaultValues.state}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione a sua UF" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                {
                                    States.map((state) => (
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
                    name="type_street"
                    disabled = {control._defaultValues.type_street ? true : false}
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={control._defaultValues.type_street}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Tipo de logradouro" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                {
                                    AddressTypes.map((type) => (
                                    <SelectItem key={`type-${type.descricao}`} value={type.id_tipo_logradouro.toString()}>
                                        {type.descricao}
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
                    name="address"
                    disabled = {control._defaultValues.address ? true : false}
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input placeholder="Logradouro" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="number"
                    disabled = {control._defaultValues.number ? true : false}
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input placeholder="Número" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="neighborhood"
                    disabled = {control._defaultValues.neighborhood ? true : false}
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input placeholder="Bairro" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="complement"
                    disabled = {control._defaultValues.complement ? true : false}
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input placeholder="Complemento" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </div>
        </section>
    )
}
