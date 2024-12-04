import { ProposalsProvider } from '@/context/proposals-context'
import { UtmProviderSuspense } from '@/context/utm-context'
import { useState } from 'react'
import { Stepper } from '../stepper'
import { DesktopFormPerson } from './steps/form-person'
import { DesktopFormSimulation } from './steps/form-simulation'

export function DesktopFormContent() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <form>
      <UtmProviderSuspense>
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
      </UtmProviderSuspense>
    </form>
  )
}
