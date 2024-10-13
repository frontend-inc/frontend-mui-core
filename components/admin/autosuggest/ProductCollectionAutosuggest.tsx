'use client'

import React from 'react'
import { RemoteAutosuggest } from '../..'
import { QueryParamsType, OptionType } from '../../../types'
import { useAdmin } from '../../../hooks'

export type ProductCollectionAutosuggestProps = {
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

const ProductCollectionAutosuggest: React.FC<
	ProductCollectionAutosuggestProps
> = (props) => {
	const {
		value,
		query = {},
		name = 'product_collection_id',
		label,
		placeholder = 'Select product collection',
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
			displayField="title"
			url={`${apiUrl}/product_collections`}
			placeholder={placeholder}
			handleChange={handleChange}
			defaultQuery={query}
			defaultOptions={defaultOptions}
		/>
	)
}

export default ProductCollectionAutosuggest
