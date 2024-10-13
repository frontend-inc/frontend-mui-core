'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ShopifyProductCollection as ProductCollection } from '../../components/shopify'
import { ShopifyProductCollectionProps as ProductCollectionProps } from '../../components/shopify/products/ShopifyProductCollection'
import { SectionProps, HeadingProps } from '../../types'

type ShopifyProductsProps = SectionProps & HeadingProps & ProductCollectionProps

const ShopifyProducts: React.FC<ShopifyProductsProps> = (props) => {
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
			<ProductCollection {...rest} />
		</Section>
	)
}

export default ShopifyProducts
