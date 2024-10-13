'use client'

import React from 'react'
import { RemoteAutosuggest } from '../../../components'
import { useAdmin } from '../../../hooks'

type ViewAutosuggestProps = {
	value: any
	name?: string
	label?: string
	handleChange: any
	query?: any
	viewId?: string
	placeholder: string
}

const ViewAutosuggest: React.FC<ViewAutosuggestProps> = (props) => {
	const { apiUrl } = useAdmin()

	const {
		value,
		name = 'view_id',
		label,
		handleChange,
		query = {},
		placeholder = 'Select view',
	} = props

	if (!apiUrl) return null
	return (
		<RemoteAutosuggest
			name={name}
			label={label}
			value={value}
			displayField="name"
			url={`${apiUrl}/views`}
			placeholder={placeholder}
			handleChange={handleChange}
			defaultQuery={query}
		/>
	)
}

export default ViewAutosuggest
