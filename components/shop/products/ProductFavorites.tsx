'use client'

import React from 'react'
import { ProductList } from '../..'
import { ProductListProps } from './ProductList'

const ProductFavorites: React.FC<ProductListProps> = (props) => {
	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'favorites',
	}

	return <ProductList query={query} {...rest} />
}

export default ProductFavorites
