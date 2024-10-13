'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ShopifyMetafieldProducts as MetafieldProducts } from '../../components'
import { ShopifyMetafieldProductsProps as MetafieldProductsProps } from '../../components/shopify/products/metafields/ShopifyMetafieldProducts'
import { SectionProps, HeadingProps } from '../../types'

type ShopifyMetafieldProductsProps = SectionProps &
	HeadingProps &
	MetafieldProductsProps

const ShopifyMetafieldProducts: React.FC<ShopifyMetafieldProductsProps> = (
	props
) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgColor,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,

		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<MetafieldProducts {...rest} />
		</Section>
	)
}

export default ShopifyMetafieldProducts
