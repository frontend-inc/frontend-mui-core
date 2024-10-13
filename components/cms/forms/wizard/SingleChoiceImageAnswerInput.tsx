'use client'

import React from 'react'
import MultipleChoiceAnswerInput from './MultipleChoiceAnswerInput'
import { MultipleChoiceAnswerInputProps } from './MultipleChoiceAnswerInput'

const SingleChoiceInput: React.FC<MultipleChoiceAnswerInputProps> = (props) => {
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
			layout="grid"
			multiSelect={false}
			direction={direction}
			name={name}
			label={label}
			value={value}
			handleChange={handleChange}
			answers={answers}
		/>
	)
}

export default SingleChoiceInput
