import React from 'react'
import { Section } from '../../components'
import { ShopifyCollectionCover as CollectionCover } from '../../components/shopify'
import { ShopifyCollectionCoverProps as CollectionCoverProps } from '../../components/shopify/collections/ShopifyCollectionCover'
import { SectionProps } from '../../types'

type ShopifyCollectionCoverProps = SectionProps & CollectionCoverProps

const ShopifyCollectionCover: React.FC<ShopifyCollectionCoverProps> = (
	props
) => {
	const { bgColor, py, px, maxWidth, requireAuth, requirePaid, ...rest } = props

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			bgColor={'#000000'}
			py={0}
			px={0}
			maxWidth={maxWidth}
		>
			<CollectionCover {...rest} />
		</Section>
	)
}

export default ShopifyCollectionCover
