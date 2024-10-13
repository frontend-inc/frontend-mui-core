'use client'

import React from 'react'
import { FormFieldType, SyntheticEventType } from '../../../types'
import FormInput from './FormInput'

type FormFieldProps = {
	field: FormFieldType
	errors?: any
	value?: any | any[]
	url?: string
	handleChange: (e: SyntheticEventType) => void
	handleRemove?: (name: string) => void
	handleAddAttachment?: (name: string, attachmentId: number) => void
	handleRemoveAttachment?: (name: string) => void
	inputOptions?: Record<string, React.FC>
	inputParams?: Record<string, any>
}

const FormField: React.FC<FormFieldProps> = (props) => {
	const {
		field,
		errors,
		value,
		handleChange,
		handleRemove,
		handleAddAttachment,
		handleRemoveAttachment,
		inputOptions,
		inputParams,
	} = props

	const {
		name,
		label,
		placeholder,
		variant,
		options,
		displayField,
		valueParam,
	} = field

	return (
		<FormInput
			errors={errors}
			name={name}
			label={label}
			placeholder={placeholder}
			variant={variant}
			options={options}
			value={value}
			handleChange={handleChange}
			handleRemove={handleRemove}
			handleAddAttachment={handleAddAttachment}
			handleRemoveAttachment={handleRemoveAttachment}
			displayField={displayField}
			valueParam={valueParam}
			inputOptions={inputOptions}
			inputParams={inputParams}
		/>
	)
}

export default FormField
