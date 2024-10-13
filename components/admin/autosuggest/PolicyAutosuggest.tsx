'use client'

import React from 'react'
import { RemoteAutosuggest } from '../..'
import { useAdmin } from '../../../hooks'

type PolicyAutosuggestProps = {
	errors?: any
	value: any
	name?: string
	label?: string
	handleChange: any
	query?: any
	valueParam?: string
	direction?: 'row' | 'column'
	placeholder?: string
}

const PolicyAutosuggest: React.FC<PolicyAutosuggestProps> = (props) => {
	const { apiUrl } = useAdmin()

	const {
		errors,
		value,
		name = 'path',
		direction = 'column',
		label,
		valueParam = 'path',
		handleChange,
		placeholder = 'Select action',
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
			valueParam={valueParam}
			direction={direction}
			url={`${apiUrl}/policies`}
			placeholder={placeholder}
			handleChange={handleChange}
			defaultQuery={defaultQuery}
		/>
	)
}

export default PolicyAutosuggest
