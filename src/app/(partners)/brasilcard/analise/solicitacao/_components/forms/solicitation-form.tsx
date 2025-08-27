'use client';

import { useState } from "react";
import { Form } from "@/components/ui/form";
import { useForm, FieldName } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useClientSolicitationContext } from "@/app/(partners)/brasilcard/contexts/client/client-context";
import { PersonalDataStep } from "./steps/personal-step";
import { AddressStep } from "./steps/address-step";
import { ComplementaryDataStep } from "./steps/complementary-step";
import { SolicitationFormData, solicitationResolver } from "./solicitation-resolver";

`export interface SolicitationFormData {
    name: string
    cpf: string,
    identity_document_number: string,
    identity_document_state: string,
    cellphone: string,
    email: string,
    birth_date: string,
    sex: string,
    marital_status: string,
    mother_name: string,
    job: string,
    job_company: string,
    employment_status: string,
    income: string,
    zipcode: string,
    city: string,
    state: string,
    type_street: string,
    address: string,
    number: string,
    complement: string,
    neighborhood: string,
    politically_exposed_position: boolean,
    politically_exposed_position_date: string,
    politically_exposed_relative: boolean,
}
`
const stepFields: FieldName<SolicitationFormData>[][] = [
    ['name', 'cpf', 'birth_date', 'mother_name', 'identity_document_number', 'identity_document_state', 'cellphone', 'email', 'sex'],
    ['zipcode', 'city', 'state', 'type_street', 'address', 'number', 'neighborhood', 'complement'],
    ['marital_status', 'job', 'income', 'employment_status', 'job_company', 'politically_exposed_position', 'politically_exposed_position_date', 'politically_exposed_relative']
];

export function SolicitationForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const { clientData } = useClientSolicitationContext();
    
    const form = useForm<SolicitationFormData>({
        resolver: solicitationResolver,
        defaultValues: clientData,
    });
    
    const { trigger } = form;

    function onSubmit(data: SolicitationFormData) {
        console.log("Dados do formulário enviados:", data);
        alert("Solicitação enviada com sucesso!");
    }

    const handleNextStep = async () => {
        const fields = stepFields[currentStep];
        const output = await trigger(fields, { shouldFocus: true });
        console.log(`Validação do passo ${currentStep + 1}:`, output);
        
        if (!output) return;

        if (currentStep < 2) {
            setCurrentStep(step => step + 1);
        }
    };
    
    const handlePreviousStep = () => {
        if (currentStep > 0) {
            setCurrentStep(step => step - 1);
        }
    };

    return (
         <Form {...form} >
            <form onSubmit={(e) => e.preventDefault()} className="py-12 w-full max-w-4xl flex flex-col gap-9">
                                
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
                         <Button type="button" className="bg-cyan-900 sm:col-start-4 hover:bg-cyan-700" onClick={handleNextStep}>
                            Próximo
                        </Button>
                    ) : (
                        <Button 
                            type="button"
                            className="bg-cyan-900 sm:col-start-4 hover:bg-cyan-700" 
                            onClick={form.handleSubmit(onSubmit)}
                        >
                            Enviar Solicitação
                        </Button>
                    )}
                </div>
            </form>
        </Form>
   )
}