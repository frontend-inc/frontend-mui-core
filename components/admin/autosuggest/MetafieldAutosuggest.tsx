'use client'

import React from 'react'
import { RemoteAutosuggest } from '../../../components'
import { QueryParamsType, OptionType } from '../../../types'
import { useAdmin } from '../../../hooks'

export type MetafieldAutosuggestProps = {
	value: any
	name?: string
	query?: QueryParamsType
	label?: string
	placeholder?: string
	handleChange: any
	variants?: string[]
	valueParam?: string
	direction?: 'column' | 'row'
	defaultOptions?: OptionType[]
}

const MetafieldAutosuggest: React.FC<MetafieldAutosuggestProps> = (props) => {
	const {
		value,
		query = {},
		name = 'metafield_id',
		label,
		placeholder = 'Select field',
		handleChange,
		valueParam = 'id',
		direction = 'column',
		defaultOptions = [],
	} = props

	const { apiUrl } = useAdmin()

	if (!apiUrl) return null
	return (
		<RemoteAutosuggest
			name={name}
			label={label}
			value={value}
			direction={direction}
			valueParam={valueParam}
			displayField={'label'}
			url={`${apiUrl}/metafields`}
			placeholder={placeholder}
			handleChange={handleChange}
			defaultQuery={query}
			defaultOptions={defaultOptions}
		/>
	)
}

export default MetafieldAutosuggest
