import { ProposalsProvider } from '@/context/proposals-context'
import { useState } from 'react'
import { Stepper } from '../stepper'
import { MobileFormFinished } from './steps/form-finished'
import { MobileFormInit } from './steps/form-init'
import { MobileFormPerson } from './steps/form-person'
import { MobileFormSimulation } from './steps/form-simulation'

export function MobileFormContent() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <form>
      <ProposalsProvider>
        <Stepper
          steps={[
            {
              label: 'Instruções para cadastro',
              content: <MobileFormInit />,
            },
            {
              label: 'Formulário de dados pessoais',
              content: <MobileFormPerson />,
            },
            {
              label: 'Resultado da simulação',
              content: <MobileFormSimulation />
            },
            {
              label: 'Instruções para realizar a portabilidade',
              content: <MobileFormFinished />,
            },
          ]}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />
      </ProposalsProvider>
    </form>
  )
}
