'use client'

import React from 'react'
import { SyntheticEventType, AnswerType } from '../../../../types'
import MultipleChoiceInput from './MultipleChoiceAnswerInput'
import SingleChoiceInput from './SingleChoiceAnswerInput'

type FormInputProps = {
	variant: any
	name: string
	label?: string
	errors?: any
	value?: any | any[]
	options: any
	placeholder?: string
	answers?: AnswerType[]
	handleChange: (e: SyntheticEventType) => void
}

const FormInput: React.FC<FormInputProps> = (props) => {
	const {
		variant,
		name,
		label,
		errors,
		value,
		options,
		answers = [],
		placeholder,
		handleChange,
	} = props

	let componentMapper = {
		single_choice: SingleChoiceInput,
		multiple_choice: MultipleChoiceInput,
	}

	let InputComponent = componentMapper[variant]

	return (
		<InputComponent
			errors={errors}
			label={label}
			name={name}
			value={value}
			options={options}
			answers={answers}
			handleChange={handleChange}
			placeholder={placeholder}
		/>
	)
}

export default FormInput
