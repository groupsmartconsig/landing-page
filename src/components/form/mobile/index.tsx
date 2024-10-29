import { ProposalsProvider } from '@/context/proposals-context'
import { useState } from 'react'
import { Stepper } from './stepper'
import { FormFinished } from './steps/form-finished'
import { FormInit } from './steps/form-init'
import { FormPerson } from './steps/form-person'
import { FormSimulation } from './steps/form-simulation'

export function FormContent() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <form>
      <ProposalsProvider>
        <Stepper
          steps={[
            {
              label: 'Instruções para cadastro',
              content: <FormInit />,
            },
            {
              label: 'Formulário de dados pessoais',
              content: <FormPerson />,
            },
            {
              label: 'Resultado da simulação',
              content: <FormSimulation />
            },
            {
              label: 'Instruções para realizar a portabilidade',
              content: <FormFinished />,
            },
          ]}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />
      </ProposalsProvider>
    </form>
  )
}
