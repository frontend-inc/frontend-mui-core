import React from 'react'
import { Section } from '../../components'
import { ProductCollectionCoverCarouselList } from '../../components'
import { ProductCollectionCoverCarouselListProps } from '../../components/shop/product-collections/ProductCollectionCoverCarouselList'
import { SectionProps } from '../../types'

type ShopProductCollectionCoverCarouselProps = SectionProps & ProductCollectionCoverCarouselListProps

const ShopProductCollectionCoverCarousel: React.FC<ShopProductCollectionCoverCarouselProps> = (props) => {
	const {
		mode='dark',
		py,
		px,
		maxWidth,
		requireAuth,
		requirePaid,
		...rest
	} = props

	return (
		<Section
			mode={'dark'}
			py={0}
			px={0}
			requireAuth={requireAuth}
			requirePaid={requirePaid}
		>
			<ProductCollectionCoverCarouselList {...rest} />
		</Section>
	)
}

export default ShopProductCollectionCoverCarousel