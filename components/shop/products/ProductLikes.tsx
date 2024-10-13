'use client'

import React from 'react'
import { ProductList } from '../..'
import { ProductListProps } from './ProductList'

const ProductLikes: React.FC<ProductListProps> = (props) => {
	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'likes',
	}

	return <ProductList query={query} {...rest} />
}

export default ProductLikes
