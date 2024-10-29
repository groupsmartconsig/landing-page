import { ProposalsProvider } from '@/context/proposals-context'
import { useState } from 'react'
import { Stepper } from '../stepper'
import { DesktopFormInit } from './steps/form-init'

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
          ]}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />
      </ProposalsProvider>
    </form>
  )
}
