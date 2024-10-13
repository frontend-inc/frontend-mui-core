'use client'

import React from 'react'
import { RemoteAutosuggest } from '../../../components'
import { useAdmin } from '../../../hooks'

type LinkAutosuggestProps = {
	errors?: any
	value: string
	name?: string
	menuId: string
	label?: string
	handleChange: (e: any) => void
	handleClear: () => void
	query?: any
	direction?: 'row' | 'column'
	placeholder?: string
}

const LinkAutosuggest: React.FC<LinkAutosuggestProps> = (props) => {
	const { apiUrl } = useAdmin()

	const {
		errors,
		value,
		name = 'parent_id',
		menuId,
		label,
		handleChange,
		handleClear,
		query,
		direction = 'column',
		placeholder = 'Select link',
	} = props

	return (
		<RemoteAutosuggest
			direction={direction}
			errors={errors}
			name={name}
			label={label}
			value={value || ''}
			displayField="name"
			url={`${apiUrl}/menus/${menuId}/links`}
			placeholder={placeholder}
			handleChange={handleChange}
			handleClear={handleClear}
			defaultQuery={query}
		/>
	)
}

export default LinkAutosuggest
