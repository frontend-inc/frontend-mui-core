'use client'

import React, { useState } from 'react'
import ShopContext from './ShopContext'
import { CartType } from '../types'

type ShopProviderProps = {
	cartCookie: string
	children: React.ReactNode
}

const ShopProvider = (props: ShopProviderProps) => {
	const { children, cartCookie } = props || {}

	const [cartOpen, setCartOpen] = useState(false)
	const [cart, setCart] = useState<CartType | {}>({})

	const value = {
		cart,
		setCart,
		cartOpen,
		setCartOpen,
		cartCookie,
	}

	return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export default ShopProvider
