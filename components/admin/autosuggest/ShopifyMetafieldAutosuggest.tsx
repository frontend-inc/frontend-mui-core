'use client'

import React from 'react'
import { RemoteAutosuggest } from '../../../components'
import { QueryParamsType, OptionType } from '../../../types'
import { useAdmin } from '../../../hooks'

type ShopifyMetafieldAutosuggestProps = {
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

const ShopifyMetafieldAutosuggest: React.FC<
	ShopifyMetafieldAutosuggestProps
> = (props) => {
	const {
		value,
		query = {},
		name = 'metafield',
		label,
		placeholder = 'Select field',
		handleChange,
		valueParam = 'name',
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
			url={`${apiUrl}/shopify_metafields`}
			placeholder={placeholder}
			handleChange={handleChange}
			defaultQuery={query}
			defaultOptions={defaultOptions}
		/>
	)
}

export default ShopifyMetafieldAutosuggest
