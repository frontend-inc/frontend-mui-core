'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ProductSimilarList } from '../../components/shop'
import { ProductListProps } from '../../components/shop/products/ProductList'
import { SectionProps, HeadingProps } from '../../types'

type ShopProductRecommendationsProps = ProductListProps &
	SectionProps &
	HeadingProps

const ShopProductRecommendations: React.FC<ShopProductRecommendationsProps> = (
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
			<div className="flex flex-col space-y-2">
				<Heading
					label={label}
					title={title}
					description={description}
					textAlign={textAlign}
				/>
				<ProductSimilarList {...rest} />
			</div>
		</Section>
	)
}

export default ShopProductRecommendations
