'use client'

import React from 'react'
import { ProductList, ProductCarouselListItems } from '../..'
import { ProductListProps } from '../products/ProductList'
import { useRouter, useParams } from 'next/navigation'

export type CollectionProductsCarouselProps = ProductListProps & {
	productCollectionId: string
	enableArrows?: boolean
	enableAutoplay?: boolean
}

const CollectionProductsCarousel: React.FC<CollectionProductsCarouselProps> = (
	props
) => {
	let {
		query = {},
		productCollectionId,
		enableArrows,
		enableAutoplay,
		...rest
	} = props

	query = {
		...query,
		method: 'collection_products',
		product_collection_id: productCollectionId,
	}

	const slots = {
		list: {
			enableArrows,
			enableAutoplay,
		},
	}

	return (
		<ProductList
			{...rest}
			query={query}
			list={ProductCarouselListItems}
			slots={slots}
		/>
	)
}

export default CollectionProductsCarousel
