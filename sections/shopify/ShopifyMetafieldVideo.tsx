'use client'

import React from 'react'
import { Section } from '../../components'
import { ShopifyMetafieldVideo as MetafieldVideo } from '../../components'
import { ShopifyMetafieldVideoProps as MetafieldVideoProps } from '../../components/shopify/products/metafields/ShopifyMetafieldVideo'
import { SectionProps } from '../../types'

type ShopifyMetafieldVideoProps = SectionProps & MetafieldVideoProps

const ShopifyMetafieldVideo: React.FC<ShopifyMetafieldVideoProps> = (props) => {
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
			<MetafieldVideo {...rest} />
		</Section>
	)
}

export default ShopifyMetafieldVideo
