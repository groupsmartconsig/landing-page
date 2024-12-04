import { ProposalsProvider } from '@/context/proposals-context'
import { useState } from 'react'
import { Stepper } from '../stepper'
import { DesktopFormPerson } from './steps/form-person'
import { DesktopFormSimulation } from './steps/form-simulation'

export function DesktopFormContent() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <form>
      <ProposalsProvider>
        <Stepper
          steps={[
            {
              label: 'Formulário de dados pessoais',
              content: <DesktopFormPerson />
            },
            {
              label: 'Resultado da simulação',
              content: <DesktopFormSimulation />
            },
          ]}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />
      </ProposalsProvider>
    </form>
  )
}
