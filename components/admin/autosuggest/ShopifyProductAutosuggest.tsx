'use client'

import React, { useEffect, useState } from 'react'
import { Autosuggest } from '../../../components'
import { SyntheticEventType } from '../../../types'
import { useProducts } from 'frontend-shopify'

type AutosuggestProps = {
	value?: any
	name?: string
	label?: string
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	enableDelete?: boolean
}

const ShopifyProductAutosuggest: React.FC<AutosuggestProps> = (props) => {
	const {
		value,
		label,
		placeholder,
		name = 'shopify_handle',
		handleChange,
	} = props

	const { products, findProducts } = useProducts()

	const [options, setOptions] = useState([])

	const handleInputChange = (keywords) => {
		findProducts(keywords)
	}

	useEffect(() => {
		if (products) {
			setOptions(
				products?.map((product) => ({
					label: product?.title,
					value: product?.handle,
					image: product?.images?.edges[0]?.node?.url,
				}))
			)
		}
	}, [products])

	useEffect(() => {
		findProducts({
			first: 5,
		})
	}, [])

	return (
		<Autosuggest
			label={label}
			name={name}
			value={value}
			options={options}
			placeholder={placeholder}
			handleChange={handleChange}
			handleInputChange={handleInputChange}
			enableClear
		/>
	)
}

export default ShopifyProductAutosuggest
