'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ShopifyProductFavorites } from '../../components/shopify'
import { ShopifyProductFavoritesProps } from '../../components/shopify/favorites/ShopifyProductFavorites'
import { SectionProps, HeadingProps } from '../../types'

type ShopifyFavoritesProps = SectionProps &
	HeadingProps &
	ShopifyProductFavoritesProps

const ShopifyFavorites: React.FC<ShopifyFavoritesProps> = (props) => {
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
			<ShopifyProductFavorites {...rest} />
		</Section>
	)
}

export default ShopifyFavorites
