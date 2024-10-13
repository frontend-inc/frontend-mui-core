'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ProductFavorites } from '../../components/shop'
import { ProductListProps } from '../../components/shop/products/ProductList'
import { SectionProps, HeadingProps } from '../../types'

type ShopProductFavoritesGridProps = ProductListProps &
	SectionProps &
	HeadingProps

const ShopProductFavoritesGrid: React.FC<ShopProductFavoritesGridProps> = (
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
			requireAuth
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
			<ProductFavorites {...rest} />
		</Section>
	)
}

export default ShopProductFavoritesGrid
