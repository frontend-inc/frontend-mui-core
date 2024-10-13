'use client'

import React from 'react'
import FormInput from '../FormInput'
import FormWizardInputWrapper from './FormWizardInputWrapper'
import FormWizardInput from './FormWizardInput'
import { get } from 'lodash'
import { AnswerType } from '../../../../types'

export type FormWizardProps = {
	field: {
		variant: string
		title: string
		description: string
		label: string
		placeholder: string
		name: string
		options: any
		answers?: AnswerType[]
	}
	handleChange: (ev: any) => void
	handleRemove: (name: string) => void
	handleAddAttachment: (field: string, attachmentId: number) => void
	handleRemoveAttachment: (field: string) => void
	resource: any
	fadeIn: boolean
	setResource: (resource: any) => void
}

const WIZARD_FIELD_VARIENTS = ['multiple_choice', 'single_choice']

const FormWizardField: React.FC<FormWizardProps> = (props) => {
	const { field, fadeIn, resource, handleChange, handleRemove } = props

	return (
		<FormWizardInputWrapper
			fadeIn={fadeIn}
			title={field.title}
			description={field.description}
		>
			{field && (
				<>
					{WIZARD_FIELD_VARIENTS.includes(field.variant) ? (
						<FormWizardInput
							name={field.name}
							label={field.label}
							placeholder={field.placeholder}
							variant={field.variant}
							options={field.options}
							answers={field.answers}
							value={get(resource, field.name)}
							handleChange={handleChange}
						/>
					) : (
						<FormInput
							name={field.name}
							label={field.label}
							placeholder={field.placeholder}
							variant={field.variant}
							options={field.options}
							value={get(resource, field.name)}
							handleChange={handleChange}
							handleRemove={handleRemove}
						/>
					)}
				</>
			)}
		</FormWizardInputWrapper>
	)
}

export default FormWizardField
