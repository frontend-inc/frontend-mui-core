import React from 'react'
import { Section } from '../../components'
import { ShopifyCollectionsCoverCarousel as CollectionsCoverCarousel } from '../../components/shopify'
import { ShopifyCollectionsCoverCarouselProps as CollectionsCoverCarouselProps } from '../../components/shopify/collections/ShopifyCollectionsCoverCarousel'
import { SectionProps } from '../../types'

type ShopifyCollectionsCoverCarouselsProps = SectionProps & CollectionsCoverCarouselProps

const ShopifyCollectionsCoverCarousel: React.FC<ShopifyCollectionsCoverCarouselsProps> = (props) => {
	const {
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
			mode={mode}
			py={0}
			px={0}			
		>
			<CollectionsCoverCarousel {...rest} />
		</Section>
	)
}

export default ShopifyCollectionsCoverCarousel