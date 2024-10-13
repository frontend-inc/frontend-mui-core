'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionProductsCarousel } from '../../components/shop'
import { CollectionProductsCarouselProps } from '../../components/shop/collection-products/CollectionProductsCarousel'
import { SectionProps, HeadingProps } from '../../types'

type ShopCollectionProductsCarouselProps = CollectionProductsCarouselProps &
	SectionProps &
	HeadingProps

const ShopCollectionProductsCarousel: React.FC<
	ShopCollectionProductsCarouselProps
> = (props) => {
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
				<CollectionProductsCarousel {...rest} />
			</div>
		</Section>
	)
}

export default ShopCollectionProductsCarousel
