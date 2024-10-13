'use client'

import React from 'react'
import { Section } from '../../components'
import { Product } from '../../components/shop'
import { ProductProps } from '../../components/shop/pdp/Product'
import { SectionProps } from '../../types'

type ShopProductDetailsProps = ProductProps & SectionProps

const ShopProductDetails: React.FC<ShopProductDetailsProps> = (props) => {
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
			<Product {...rest} />
		</Section>
	)
}

export default ShopProductDetails
