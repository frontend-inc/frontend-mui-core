'use client'

import React, { useEffect } from 'react'
import {
	getMetafieldValue,
	getMetafieldType,
	ShopifyMetafieldType,
} from 'frontend-shopify'
import { ShopifyMetafieldRichText } from '../../../shopify'
import { AccordionItem } from '../../../../components'
import { Typography } from '../../../../tailwind'
import { useProducts } from 'frontend-shopify'

const PLAIN_TEXT_TYPES = ['single_line_text_field', 'multi_line_text_field']
const RICH_TEXT_TYPES = ['rich_text_field']

export type ShopifyProductMetafieldsProps = {
	shopifyProduct: any
	metafields: ShopifyMetafieldType[]
}

const ShopifyProductMetafields: React.FC<ShopifyProductMetafieldsProps> = (
	props
) => {
	const { shopifyProduct, metafields } = props

	const { product, findProduct } = useProducts()

	useEffect(() => {
		if (shopifyProduct && metafields) {
			const metafieldIdentifiers = metafields?.map((metafield) => ({
				namespace: metafield.name.split('.')[0],
				key: metafield.name.split('.')[1],
			}))
			findProduct(shopifyProduct?.handle, metafieldIdentifiers)
		}
	}, [shopifyProduct, metafields])

	if (!product || !metafields) return null
	return (
		<div className="w-full">
			{product &&
				metafields?.map((metafield, index) => {
					const { label, name } = metafield
					const key = name.split('.')[1]
					const type = getMetafieldType(product, key)
					const value = getMetafieldValue(product, key)

					return (
						<AccordionItem
							primary={label ? label : ''}
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
