'use client'

import React from 'react'
import { ShopifyProductArray } from '../../shopify'
import { get } from 'lodash'

export type FieldShopifyProductsProps = {
	resource: any
	href?: string
}

const FieldShopifyProducts: React.FC<FieldShopifyProductsProps> = (props) => {
	const { resource, href = '/products', ...rest } = props || {}
	const fieldName = 'shopify_products'
	const shopifyHandles = get(resource, fieldName) || []

	if (shopifyHandles?.length == 0) return null
	return <ShopifyProductArray href={href} handles={shopifyHandles} {...rest} />
}

export default FieldShopifyProducts
