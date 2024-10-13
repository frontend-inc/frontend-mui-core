'use client'

import React from 'react'
import { RemoteAutosuggest } from '../../../components'
import { useAdmin } from '../../../hooks'

type CollectionAutosuggestProps = {
	errors?: any
	value: any
	name?: string
	label?: string
	handleChange: any
	query?: any
	direction?: 'row' | 'column'
	placeholder?: string
}

const CollectionAutosuggest: React.FC<CollectionAutosuggestProps> = (props) => {
	const { apiUrl } = useAdmin()

	const {
		errors,
		value,
		name = 'collection_id',
		direction = 'column',
		label,
		handleChange,
		placeholder = 'Select collection',
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
			url={`${apiUrl}/collections`}
			placeholder={placeholder}
			handleChange={handleChange}
			defaultQuery={defaultQuery}
		/>
	)
}

export default CollectionAutosuggest
