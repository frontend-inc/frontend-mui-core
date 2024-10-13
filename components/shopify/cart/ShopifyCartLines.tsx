'use client'

import React from 'react'
import { useCart } from 'frontend-shopify'
import { ShopifyCartLine } from '../../../components/shopify'

const ShopifyCartLines: React.FC = (props) => {
	const { cart } = useCart()
	const lines = cart?.lines?.edges.map((e) => e.node) || []

	return (
		<ul>
			{lines?.map((line) => (
				<ShopifyCartLine key={line.id} line={line} />
			))}
		</ul>
	)
}

export default ShopifyCartLines
