'use client'

import React from 'react'
import { RemoteAutosuggest } from '../..'
import { QueryParamsType, OptionType } from '../../../types'
import { useAdmin } from '../../../hooks'

export type ProductAutosuggestProps = {
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

const ProductAutosuggest: React.FC<ProductAutosuggestProps> = (props) => {
	const {
		value,
		query = {},
		name = 'product_id',
		label,
		placeholder = 'Select product',
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
			url={`${apiUrl}/products`}
			placeholder={placeholder}
			handleChange={handleChange}
			defaultQuery={query}
			defaultOptions={defaultOptions}
		/>
	)
}

export default ProductAutosuggest
