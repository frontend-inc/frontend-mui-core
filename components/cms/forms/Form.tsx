'use client'

import React from 'react'
import { Stack, Button } from '../../../tailwind'
import FormFields from './FormFields'
import { FormFieldType } from '../../../types'
import { IconLoading } from '../..'

export type FormProps = {
	loading?: boolean
	errors: any
	fields: FormFieldType[]
	resource: any
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleRemove?: (name: string) => void
	handleAddAttachment?: (name: string, attachmentId: number) => void
	handleRemoveAttachment?: (name: string) => void
	handleSubmit: () => void
	buttonText?: string
	inputOptions?: Record<string, React.FC>
	inputParams?: Record<string, any>
}

const Form: React.FC<FormProps> = (props) => {
	const {
		errors,
		loading,
		fields,
		resource,
		handleChange,
		handleRemove,
		handleSubmit,
		handleAddAttachment,
		handleRemoveAttachment,
		buttonText = 'Submit',
		inputOptions,
		inputParams,
	} = props

	return (
		<div className="flex flex-col space-y-4">
			<FormFields
				errors={errors}
				fields={fields}
				resource={resource}
				handleChange={handleChange}
				handleRemove={handleRemove}
				handleAddAttachment={handleAddAttachment}
				handleRemoveAttachment={handleRemoveAttachment}
				inputOptions={inputOptions}
				inputParams={inputParams}
			/>
			{handleSubmit && (
				<Button
					size="medium"
					variant="contained"
					onClick={handleSubmit}
					disabled={loading}
					endIcon={
						loading ? <IconLoading color="primary.contrastText" /> : null
					}
				>
					{buttonText}
				</Button>
			)}
		</div>
	)
}

export default Form
