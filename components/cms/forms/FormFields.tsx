'use client'

import React from 'react'
import FormField from './FormField'
import { get } from 'lodash'
import { FormFieldType } from '../../../types'
import { validateFieldConditions } from '../../../helpers'
import { cn } from '../../../shadcn/lib/utils'

export type FormFieldsProps = {
	loading?: boolean
	errors: any
	resource: any
	fields: FormFieldType[]
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleRemove?: (name: string) => void
	handleAddAttachment?: (name: string, attachmentId: number) => void
	handleRemoveAttachment?: (name: string) => void
	handleSubmit?: () => void
	buttonText?: string
	inputOptions?: Record<string, React.FC>
	inputParams?: Record<string, any>
}

const FormFields: React.FC<FormFieldsProps> = (props) => {
	const {
		errors,
		loading,
		fields,
		resource,
		handleChange,
		handleRemove,
		handleAddAttachment,
		handleRemoveAttachment,
		inputOptions,
		inputParams,
	} = props

	return (
		<div className="flex flex-col space-y-3 w-full p-1">
			{fields?.map((field, index) => {
				if (!validateFieldConditions(field?.conditions || [], resource)) {
					return null
				}
				return (
					<FormField
						key={index}
						errors={errors}
						field={field}
						value={get(resource, field.name) || field?.default}
						//@ts-ignore
						handleChange={handleChange}
						handleRemove={handleRemove}
						handleAddAttachment={handleAddAttachment}
						handleRemoveAttachment={handleRemoveAttachment}
						inputOptions={inputOptions}
						inputParams={inputParams}
					/>
				)
			})}
		</div>
	)
}

export default FormFields
