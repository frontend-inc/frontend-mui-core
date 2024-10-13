'use client'

import React, { useEffect, useState, useContext } from 'react'
import { AutocompleteInput } from '../../../../components'
import { Image, Placeholder } from '../../../../components'
import { SyntheticEventType } from '../../../../types'
import { useProducts } from 'frontend-shopify'
import { ShopifyContext } from 'frontend-shopify'
import { cn } from '../../../../shadcn/lib/utils'
import { Collapse } from '../../../../tailwind'

type AutosuggestProps = {
	value?: any
	name?: string
	label?: string
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	direction?: 'row' | 'column'
	className?: string
}

const ShopifyProductInput: React.FC<AutosuggestProps> = (props) => {
	const {
		value,
		label,
		direction = 'column',
		placeholder,
		name = 'shopify_handle',
		handleChange,
		className,
	} = props

	const { domain, storefrontAccessToken } = useContext(ShopifyContext) as any

	const { loading, product, products, setProduct, findProduct, findProducts } =
		useProducts()

	const [options, setOptions] = useState([])

	const handleInputChange = (newValue) => {
		findProducts(newValue)
		if (newValue == '') {
			setProduct(null)
		}
	}

	useEffect(() => {
		if (products) {
			setOptions(
				products?.map((product) => ({
					label: product.title,
					value: product.handle,
					image: product.images?.edges?.[0]?.node?.url,
				}))
			)
		}
	}, [products])

	useEffect(() => {
		if (value) {
			findProduct(value)
		}
	}, [value])

	const handleAutocompleteChange = (e) => {
		const { value } = e.target
		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	useEffect(() => {
		findProducts({
			first: 10,
		})
	}, [])

	if (!domain || !storefrontAccessToken)
		return (
			<Placeholder
				title="Shopify setup required"
				description="Shopify provider is not setup"
			/>
		)

	return (
		<div className={cn('flex flex-col space-y-4', className)}>
			<Collapse in={!!product?.id}>
				<div className="w-[180px] h-[180px] rounded overflow-hidden transition-shadow duration-300 hover:shadow-md">
					<Image
						enableGradient
						src={product?.images?.edges?.[0]?.node?.url}
						alt={product?.title}
						height={180}
						width={180}
					/>
				</div>
			</Collapse>
			<AutocompleteInput
				name={name}
				label={label}
				value={value}
				options={options}
				handleChange={handleAutocompleteChange}
				handleInputChange={handleInputChange}
				direction={direction}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default ShopifyProductInput
