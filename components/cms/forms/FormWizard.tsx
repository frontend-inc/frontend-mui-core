'use client'

import React, { useEffect, useState } from 'react'
import FormWizardProgress from './wizard/FormWizardProgress'
import FormWizardField from './wizard/FormWizardField'
import FormWizardButtons from './wizard/FormWizardButtons'
import { SyntheticEventType } from '../../../types'

export type FormWizardProps = {
	loading?: boolean
	errors?: any
	resource?: any
	setResource: (resource: any) => void
	handleChange: (ev: SyntheticEventType) => void
	handleSubmit: () => void
	handleRemove: (field: any) => void
	handleAddAttachment: (field: string, attachmentId: number) => void
	handleRemoveAttachment: (field: string) => void
	buttonText?: string
	fields: any[]
	handleSuccess?: () => void
}

const FormWizard: React.FC<FormWizardProps> = (props) => {
	const {
		resource,
		setResource,
		fields = [],
		handleChange,
		handleSubmit,
		handleRemove,
		buttonText = 'Submit',
		handleAddAttachment,
		handleRemoveAttachment,
	} = props

	const [currentField, setCurrentField] = useState<any>()
	const [currentStep, setCurrentStep] = useState(1)
	const [totalSteps, setTotalSteps] = useState(0)
	const [fadeIn, setFadeIn] = useState(true)

	const handleNextStep = () => {
		setFadeIn(false)
		let nextStep = currentStep + 1
		if (nextStep > totalSteps) {
			return
		}
		setTimeout(() => {
			setCurrentStep(nextStep)
			setFadeIn(true)
		}, 500)
	}

	const handlePrevStep = () => {
		const nextStep = currentStep - 1
		if (nextStep < 1) {
			return
		}
		setCurrentStep(nextStep)
	}

	useEffect(() => {
		if (fields) {
			setTotalSteps(fields.length)
		}
	}, [fields])

	useEffect(() => {
		if (fields) {
			setCurrentField(fields[currentStep - 1])
		}
	}, [fields, currentStep])

	return (
		<div className="w-full flex flex-col justify-between items-center">
			<FormWizardProgress currentStep={currentStep} totalSteps={totalSteps} />
			<div className="flex flex-col justify-center items-center w-full h-[calc(100vh-200px)]">
				<div className="px-2 py-4 w-full max-w-[600px]">
					{currentField && (
						<FormWizardField
							fadeIn={fadeIn}
							field={currentField}
							handleChange={handleChange}
							handleRemove={handleRemove}
							handleAddAttachment={handleAddAttachment}
							handleRemoveAttachment={handleRemoveAttachment}
							resource={resource}
							setResource={setResource}
						/>
					)}
					<FormWizardButtons
						currentStep={currentStep}
						totalSteps={totalSteps}
						handleNextStep={handleNextStep}
						handlePrevStep={handlePrevStep}
						handleSubmit={handleSubmit}
						buttonText={buttonText}
					/>
				</div>
			</div>
		</div>
	)
}

export default FormWizard
