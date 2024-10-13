'use client'

import React from 'react'
import { TextInput } from '../..'
import { InputPropsType } from '../../../types'

type SnakeCaseInputPropsType = InputPropsType & {
	joinChar?: string
}

const SnakeCaseInput: React.FC<SnakeCaseInputPropsType> = (props) => {
	const {
		errors,
		joinChar = '_',
		direction = 'column',
		value,
		name,
		label,
		info,
		placeholder,
		handleChange,
		disabled,
	} = props

	const handleInputChange = (ev) => {
		let { value } = ev.target
		value = value.replace(' ', joinChar)
		value = value.toLowerCase()
		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	return (
		<TextInput
			disableDebounce
			direction={direction}
			errors={errors}
			value={value}
			disabled={disabled}
			placeholder={placeholder}
			handleChange={handleInputChange}
			name={name}
			label={label}
			info={info}
		/>
	)
}

export default SnakeCaseInput
