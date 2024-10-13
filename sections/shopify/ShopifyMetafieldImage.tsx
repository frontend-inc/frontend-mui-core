'use client'

import React from 'react'
import { Section } from '../../components'
import { ShopifyMetafieldImage as MetafieldImage } from '../../components'
import { ShopifyMetafieldImageProps as MetafieldImageProps } from '../../components/shopify/products/metafields/ShopifyMetafieldImage'
import { SectionProps } from '../../types'

type ShopifyMetafieldImageProps = SectionProps & MetafieldImageProps

const ShopifyMetafieldImage: React.FC<ShopifyMetafieldImageProps> = (props) => {
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
			<MetafieldImage {...rest} />
		</Section>
	)
}

export default ShopifyMetafieldImage
