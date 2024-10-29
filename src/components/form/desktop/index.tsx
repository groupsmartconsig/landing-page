import { ProposalsProvider } from '@/context/proposals-context'
import { useState } from 'react'
import { Stepper } from '../stepper'
import { DesktopFormFinished } from './steps/form-finished'
import { DesktopFormInit } from './steps/form-init'
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
              label: 'Instruções para cadastro',
              content: <DesktopFormInit />,
            },
            {
              label: 'Formulário de dados pessoais',
              content: <DesktopFormPerson />
            },
            {
              label: 'Resultado da simulação',
              content: <DesktopFormSimulation />
            },
            {
              label: 'Instruções para realizar a portabilidade',
              content: <DesktopFormFinished />,
            },
          ]}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />
      </ProposalsProvider>
    </form>
  )
}
