'use client'

import React from 'react'
import { Placeholder } from '../..'
import { useResourceContext } from 'frontend-js'

type ProductEmptyProps = {
	icon?: any
	title?: string
	description?: string
}

const ProductEmpty: React.FC<ProductEmptyProps> = (props) => {
	const { resources } = useResourceContext()
	const {
		icon = 'ShoppingCart',
		title = 'No products',
		description = 'No products available.',
	} = props || {}

	if (resources?.length > 0) return null
	return <Placeholder icon={icon} title={title} description={description} />
}

export default ProductEmpty
