'use client'

import React from 'react'
import { Section } from '../../components'
import { ShopifyProductFeatured as ProductFeatured } from '../../components/shopify'
import { ShopifyProductFeaturedProps as ProductFeaturedProps } from '../../components/shopify/products/ShopifyProductFeatured'
import { SectionProps } from '../../types'

type ShopifyProductFeaturedProps = SectionProps & ProductFeaturedProps

const ShopifyProductFeatured: React.FC<ShopifyProductFeaturedProps> = (
	props
) => {
	const {
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
			<ProductFeatured {...rest} />
		</Section>
	)
}

export default ShopifyProductFeatured
