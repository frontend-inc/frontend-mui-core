'use client'

import React from 'react'
import { ProductList } from '../..'
import { ProductListProps } from '../products/ProductList'
import { useRouter, useParams } from 'next/navigation'

export type CollectionProductsProps = ProductListProps & {
	productCollectionId: string
}

const CollectionProducts: React.FC<CollectionProductsProps> = (props) => {
	let { query = {}, productCollectionId, ...rest } = props

	query = {
		...query,
		method: 'collection_products',
		product_collection_id: productCollectionId,
	}

	return <ProductList query={query} {...rest} />
}

export default CollectionProducts
