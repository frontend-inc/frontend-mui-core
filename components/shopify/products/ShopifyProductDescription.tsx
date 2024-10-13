'use client'

import React from 'react'
import { AccordionItem } from '../../../components'
import { Typography } from '../../../tailwind'
import { ShopifyProductType } from 'frontend-shopify'

type ShopifyProductDescriptionProps = {
	product?: ShopifyProductType
	color?: string
}

const ShopifyProductDescription: React.FC<ShopifyProductDescriptionProps> = (
	props
) => {
	const { product } = props

	if (!product?.description || product?.description?.length == 0) return null
	return (
		<AccordionItem primary="Description" secondary={product?.description} />
	)
}

export default ShopifyProductDescription
