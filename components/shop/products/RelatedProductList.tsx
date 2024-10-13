'use client'

import React from 'react'
import { ProductListProps } from './ProductList'
import { ProductList, RelatedProductListItems } from '../..'

const RelatedProductList: React.FC<ProductListProps> = (props) => {
	let { resource } = props
	const url = `/shop/products/${resource?.id}/related_products`
	return (
		<ProductList
			{...props}
			url={url}
			resource={resource}
			list={RelatedProductListItems}
		/>
	)
}

export default RelatedProductList
