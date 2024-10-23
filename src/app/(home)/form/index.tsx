import { useState } from 'react'
import { Stepper } from './stepper'
import { FormInit } from './steps/form-init'

export function FormContent() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <form>
      <Stepper
        steps={[
          {
            label: 'Instruções para cadastro',
            content: <FormInit />,
          },
        ]}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
      />
    </form>
  )
}
