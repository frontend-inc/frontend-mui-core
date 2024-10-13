'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ProductReviews } from '../../components'
import { ProductReviewsProps } from '../../components/shop/product-reviews/ProductReviews'
import { SectionProps, HeadingProps } from '../../types'

type ShopProductReviewsProps = SectionProps & HeadingProps & ProductReviewsProps

const ShopProductReviews: React.FC<ShopProductReviewsProps> = (props) => {
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
			<ProductReviews {...rest} />
		</Section>
	)
}

export default ShopProductReviews
