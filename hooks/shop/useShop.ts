'use client'

import React, { useContext } from 'react'
import { ShopContext } from '../../context'

const useShop = () => {
	const { cartCookie, cart, setCart, cartOpen, setCartOpen } = useContext(
		ShopContext
	) as any

	return {
		cart,
		setCart,
		cartOpen,
		setCartOpen,
		cartCookie,
	}
}

export default useShop
