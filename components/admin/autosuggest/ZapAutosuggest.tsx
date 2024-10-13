'use client'

import React from 'react'
import { RemoteAutosuggest } from '../..'
import { useAdmin } from '../../../hooks'

type ZapAutosuggestProps = {
	errors?: any
	value: any
	name?: string
	label?: string
	handleChange: any
	query?: any
	direction?: 'row' | 'column'
	placeholder?: string
}

const ZapAutosuggest: React.FC<ZapAutosuggestProps> = (props) => {
	const { apiUrl } = useAdmin()

	const {
		errors,
		value,
		name = 'zap_id',
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
			displayField="name"
			direction={direction}
			url={`${apiUrl}/zaps`}
			placeholder={placeholder}
			handleChange={handleChange}
			defaultQuery={defaultQuery}
		/>
	)
}

export default ZapAutosuggest
