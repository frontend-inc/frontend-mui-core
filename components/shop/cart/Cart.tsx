'use client'

import React from 'react'
import { useCart } from '../../../hooks'
import { Drawer } from '../../../components'
import CartLineItems from './CartLineItems'
import CheckoutButton from './CheckoutButton'

const Cart: React.FC = () => {
	const { cartOpen, setCartOpen } = useCart()

	return (
		<Drawer
			open={cartOpen}
			handleClose={() => setCartOpen(false)}
			title="My Cart"
			buttons={<CheckoutButton />}
		>
			<CartLineItems />
		</Drawer>
	)
}

export default Cart
