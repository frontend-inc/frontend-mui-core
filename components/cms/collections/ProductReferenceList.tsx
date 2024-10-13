'use client'

import React from 'react'
import { ProductListProps } from '../../shop/products/ProductList'
import { ProductList, ProductReferenceListItems } from '../..'

const ProductReferenceList: React.FC<ProductListProps> = (props) => {
	let { url, resource } = props
	url = `${url}/${resource?.id}/product_references`
	return (
		<ProductList
			{...props}
			url={url}
			resource={resource}
			list={ProductReferenceListItems}
		/>
	)
}

export default ProductReferenceList
