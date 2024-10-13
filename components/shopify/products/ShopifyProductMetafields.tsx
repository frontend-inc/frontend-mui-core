'use client'

import React from 'react'
import {
	getMetafieldValue,
	getMetafieldType,
	ShopifyMetafieldType,
	ShopifyProductType,
} from 'frontend-shopify'
import { AccordionItem } from '../../../components'
import { Typography } from '../../../tailwind'
import { ShopifyMetafieldRichText } from '../../shopify'

const PLAIN_TEXT_TYPES = ['single_line_text_field', 'multi_line_text_field']

const RICH_TEXT_TYPES = ['rich_text_field']

const SUPPORTED_METAFIELD_TYPES = [...PLAIN_TEXT_TYPES, ...RICH_TEXT_TYPES]

type ShopifyProductMetafieldsProps = {
	product: ShopifyProductType
	metafields: ShopifyMetafieldType[]
}

const ShopifyProductMetafields: React.FC<ShopifyProductMetafieldsProps> = (
	props
) => {
	const { product, metafields } = props

	return (
		<div className="w-full">
			{metafields?.map((metafield, index) => {
				const type = getMetafieldType(product, metafield.name)
				const value = getMetafieldValue(product, metafield.name)
				if (!SUPPORTED_METAFIELD_TYPES.includes(type)) return null
				return (
					<AccordionItem
						//@ts-ignore
						primary={metafield.label}
						secondary={
							<div>
								{PLAIN_TEXT_TYPES.includes(type) && (
									<Typography variant="body1">{value}</Typography>
								)}
								{RICH_TEXT_TYPES.includes(type) && (
									<ShopifyMetafieldRichText value={value} />
								)}
							</div>
						}
					/>
				)
			})}
		</div>
	)
}

export default ShopifyProductMetafields
