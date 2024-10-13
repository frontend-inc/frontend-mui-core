'use client'

import React from 'react'
import { RemoteAutosuggest } from '../../../components'
import { QueryParamsType, OptionType } from '../../../types'
import { useAdmin } from '../../../hooks'

type FieldAutosuggestProps = {
	value: any
	name?: string
	query?: QueryParamsType
	collectionId: string | number
	label?: string
	placeholder?: string
	handleChange: any
	variants?: string[]
	valueParam?: string
	direction?: 'column' | 'row'
	defaultOptions?: OptionType[]
}

const FieldAutosuggest: React.FC<FieldAutosuggestProps> = (props) => {
	const { apiUrl } = useAdmin()

	const {
		value,
		query = {},
		name = 'field_id',
		collectionId,
		label,
		placeholder = 'Select field',
		handleChange,
		valueParam = 'id',
		direction = 'column',
		defaultOptions = [],
	} = props

	if (!collectionId || apiUrl) return null
	return (
		<RemoteAutosuggest
			name={name}
			label={label}
			value={value}
			direction={direction}
			valueParam={valueParam}
			displayField={'label'}
			url={`${apiUrl}/collections/${collectionId}/fields`}
			placeholder={placeholder}
			handleChange={handleChange}
			defaultQuery={query}
			defaultOptions={defaultOptions}
		/>
	)
}

export default FieldAutosuggest
