'use client';

import axios from "axios";

import { useState } from "react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm, FieldName } from "react-hook-form";
import { useClientSolicitationContext } from "@/app/(partners)/brasilcard/contexts/client/client-context";
import { PersonalDataStep } from "./steps/personal-step";
import { AddressStep } from "./steps/address-step";
import { ComplementaryDataStep } from "./steps/complementary-step";
import { solicitationResolver } from "./resolvers/solicitation-resolver";
import { SolicitationFormData } from "./types/solicitation-form";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";

const stepFields: FieldName<SolicitationFormData>[][] = [
    ['name', 'cpf', 'birth_date', 'mother_name', 'identity_document_number', 'identity_document_state', 'cellphone', 'email', 'sex'],
    ['zipcode', 'city', 'state', 'type_street', 'address', 'number', 'neighborhood', 'complement'],
    ['marital_status', 'job', 'income', 'employment_status', 'job_company', 'politically_exposed_position', 'politically_exposed_position_date', 'politically_exposed_relative']
];

export function SolicitationForm() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const formStepParam = searchParams.get('form-step');

    const [currentStep, setCurrentStep] = useState(Number(formStepParam) || 0);
    const { clientData, resetClient, setClientData } = useClientSolicitationContext();
    const [isLoading, setIsLoading] = useState(false)

    const updateFormStepParam = (newStep: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('form-step', newStep.toString());
        
        router.push(`${pathname}?${params.toString()}`);
    };

    const form = useForm<SolicitationFormData>({
        resolver: solicitationResolver,
        defaultValues: clientData,
        mode: "onChange"
    });
    
    const { trigger } = form;

    function onSubmit(data: SolicitationFormData) {
        setIsLoading(true)

        axios.post('/api/proposal-register', data).then(()=>{
            setIsLoading(false)
            router.push('/brasilcard/analise/aprovado')    
        }).catch(()=>{
            toast.error("ocorreu um erro ao enviar os seus dados, por favor tente novamente.")
            setIsLoading(false)
        })

    }

    const handleNextStep = async () => {
        const fields = stepFields[currentStep];
        const output = await trigger(fields, { shouldFocus: true });
        
        if (!output) return;

        setClientData(form.getValues())
        
        if (currentStep < 2) {

            updateFormStepParam(currentStep + 1);
            setCurrentStep(currentStep + 1);
        }
    };
    
    const handlePreviousStep = () => {
        if (currentStep > 0) {
            updateFormStepParam(currentStep - 1);
            setCurrentStep(currentStep - 1);
        }
    };

    return (
         <Form {...form} >
            <form className="py-12 w-full max-w-4xl flex flex-col gap-9">
                                
                {currentStep === 0 && <PersonalDataStep control={form.control} setValue={form.setValue} form={form} />}
                {currentStep === 1 && <AddressStep control={form.control} />}
                {currentStep === 2 && <ComplementaryDataStep control={form.control} setValue={form.setValue} />}
                
                <div className="grid grid-cols-1 sm:grid-cols-4 justify-end gap-4 mt-8">
                    {currentStep > 0 && (
                        <Button className="sm:col-start-3" type="button" variant="outline" onClick={handlePreviousStep}>
                            Anterior
                        </Button>
                    )}
                    
                    {currentStep < 2 ? (
                         <Button  type="button" className=" sm:col-start-4 bg-[#024C89] hover:bg-cyan-950" onClick={handleNextStep}>
                            Próximo
                        </Button>
                    ) : (
                        <Button 
                            type="button"
                            className=" sm:col-start-4 bg-[#024C89] hover:bg-cyan-950"
                            onClick={()=> onSubmit(form.getValues())}
                        >   
                            {
                                isLoading ? (
                                    <>
                                        <Loader2Icon className="animate-spin" />
                                        Enviando Solicitacao
                                    </>
                                ) :(
                                    <>
                                        Enviar Solicitação
                                    </>
                                )
                            }
                        </Button>
                    )}
                </div>
            </form>
        </Form>
   )
}