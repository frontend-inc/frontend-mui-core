'use client'

import React from 'react'
import ProductList from './ProductList'
import { ProductListProps } from '../products/ProductList'

const ProductSimilarList: React.FC<ProductListProps> = (props) => {
	return <ProductList {...props} filterSimilar />
}

export default ProductSimilarList
