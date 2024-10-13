'use client'

import React from 'react'
import { RemoteAutosuggest } from '../..'
import { useAdmin } from '../../../hooks'

type FormAutosuggestProps = {
	errors?: any
	value: any
	name?: string
	label?: string
	handleChange: any
	query?: any
	direction?: 'row' | 'column'
	placeholder?: string
}

const FormAutosuggest: React.FC<FormAutosuggestProps> = (props) => {
	const { apiUrl } = useAdmin()

	const {
		errors,
		value,
		name = 'form_id',
		direction = 'column',
		label,
		handleChange,
		placeholder = 'Select',
		query: defaultQuery = {},
	} = props

	if (!apiUrl) return null
	return (
		<RemoteAutosuggest
			enableClear
			errors={errors}
			name={name}
			label={label}
			value={value}
			displayField="title"
			direction={direction}
			url={`${apiUrl}/forms`}
			placeholder={placeholder}
			handleChange={handleChange}
			defaultQuery={defaultQuery}
		/>
	)
}

export default FormAutosuggest
