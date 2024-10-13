'use client'

import React from 'react'
import MultipleChoiceAnswerInput from './MultipleChoiceAnswerInput'
import { MultipleChoiceAnswerInputProps } from './MultipleChoiceAnswerInput'

const MultipleChoiceImagesInput: React.FC<MultipleChoiceAnswerInputProps> = (
	props
) => {
	const {
		label,
		direction = 'column',
		name,
		value,
		answers,
		handleChange,
	} = props

	return (
		<MultipleChoiceAnswerInput
			multiSelect
			layout="grid"
			direction={direction}
			name={name}
			label={label}
			value={value}
			handleChange={handleChange}
			answers={answers}
		/>
	)
}

export default MultipleChoiceImagesInput
