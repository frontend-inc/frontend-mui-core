'use client'

import React from 'react'
import ShopifyProductVariantOptions from './ShopifyProductVariantOptions'
import ShopifyColorVariantOptions from './ShopifyColorVariantOptions'
import { ShopifyProductType } from 'frontend-shopify'

type ShopifyProductVariantSelectorProps = {
	product: ShopifyProductType
	selectedOptions: any
	handleOptionChange: any
}

const ShopifyProductVariantSelector: React.FC<
	ShopifyProductVariantSelectorProps
> = (props) => {
	const { product, selectedOptions, handleOptionChange } = props

	const productOption = (optionName) => {
		return product?.options?.find((option) => option?.name == optionName)
	}

	const SORTED_OPTIONS = ['Color', 'Size', 'Style', 'Material']

	return (
		<>
			{SORTED_OPTIONS.map((optionName) => {
				let option = productOption(optionName)
				if (!option) return null
				return optionName == 'Color' ? (
					<ShopifyColorVariantOptions
						key={optionName}
						product={product}
						name={'Color'}
						values={option?.values}
						selected={selectedOptions['Color']}
						handleChange={handleOptionChange}
					/>
				) : (
					<ShopifyProductVariantOptions
						key={optionName}
						name={option?.name}
						values={option?.values}
						selected={selectedOptions[option?.name]}
						handleChange={handleOptionChange}
					/>
				)
			})}
		</>
	)
}

export default ShopifyProductVariantSelector
