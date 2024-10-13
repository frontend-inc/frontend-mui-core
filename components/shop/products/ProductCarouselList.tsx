'use client'

import React from 'react'
import { ProductList } from '../..'
import { ProductListProps } from '../products/ProductList'
import ProductCarouselListItems from './ProductCarouselListItems'

export type ProductCarouselListProps = ProductListProps

const ProductCarouselList: React.FC<ProductCarouselListProps> = (props) => {
	return <ProductList {...props} list={ProductCarouselListItems} />
}

export default ProductCarouselList
