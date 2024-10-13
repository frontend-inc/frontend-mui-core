'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ShopifyRecentlyViewed as RecentlyViewed } from '../../components/shopify'
import { ShopifyRecentlyViewedProps as RecentlyViewedProps } from '../../components/shopify/recently-viewed/ShopifyRecentlyViewed'
import { SectionProps, HeadingProps } from '../../types'

type ShopifyRecentlyViewedProps = SectionProps &
	HeadingProps &
	RecentlyViewedProps

const ShopifyRecentlyViewed: React.FC<ShopifyRecentlyViewedProps> = (props) => {
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
			<RecentlyViewed {...rest} />
		</Section>
	)
}

export default ShopifyRecentlyViewed
