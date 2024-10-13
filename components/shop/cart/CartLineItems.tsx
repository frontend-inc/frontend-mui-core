'use client'

import React from 'react'
import { List } from '../../../tailwind'
import CartLineItem from './CartLineItem'
import { Placeholder } from '../../../components'
import { useCart } from '../../../hooks'

const CartLineItems: React.FC = () => {
	const { cart } = useCart()

	if (!cart?.uid) return null
	if (cart?.line_items.length === 0) {
		return (
			<Placeholder
				icon="ShoppingBag"
				title="Your cart is empty"
				description="There are no products in the cart."
			/>
		)
	}
	return (
		<List>
			{cart?.line_items.map((lineItem) => (
				<CartLineItem key={lineItem.id} lineItem={lineItem} />
			))}
		</List>
	)
}

export default CartLineItems
