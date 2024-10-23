import { useState } from 'react'
import { Stepper } from './stepper'
import { FormFinished } from './steps/form-finished'
import { FormInit } from './steps/form-init'
import { FormPerson } from './steps/form-person'

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
          {
            label: 'Formulário de dados pessoais',
            content: <FormPerson />,
          },
          {
            label: 'Instruções para realizar a portabilidade',
            content: <FormFinished />,
          },
        ]}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
      />
    </form>
  )
}
