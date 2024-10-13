'use client'

import React, { useEffect, useState } from 'react'
import { Badge, IconButton } from '../../../tailwind'
import { useCart } from '../../../hooks'
import { Icon } from '../../../components'
import { getCookie, setCookie } from 'cookies-next'
import { useDebounce } from 'use-debounce'

type CartIconButtonProps = {
	icon?: string
	totalItems: number
	handleClick: () => void
}

type CartButtonProps = {	
	icon?: string
}

const CartButton: React.FC<CartButtonProps> = (props) => {
	const { icon = 'ShoppingBag' } = props

	const [loaded, setLoaded] = useState(false)
	const [debouncedLoaded] = useDebounce(loaded, 1000)

	const { cart, fetchCart, createCart, cartCookie, cartOpen, setCartOpen } =
		useCart()

	const handleFindOrCreateCart = async () => {
		if (cartCookie?.length > 0 && !cart?.uid) {
			let createResp
			let cartUID = await getCookie(cartCookie)
			if (cartUID && cartUID !== undefined) {
				let fetchResp = await fetchCart(cartUID)
				if (!fetchResp?.uid) {
					createResp = await createCart()
					if (createResp?.uid) {
						setCookie(cartCookie, createResp?.uid)
					}
				}
			} else {
				createResp = await createCart()
				if (createResp?.uid) {
					setCookie(cartCookie, createResp?.uid)
				}
			}
		}
	}

	// Fix: We create an artificial useEffect
	// since handleFindOrCreateCart event was firing twice
	// for unknown reasons
	useEffect(() => {
		setLoaded(true)
	}, [])

	useEffect(() => {
		if (debouncedLoaded == true) {
			handleFindOrCreateCart()
		}
	}, [debouncedLoaded])

	return (
		<IconButton onClick={() => setCartOpen(!cartOpen)}>
			<Badge color="primary" badgeContent={cart?.total_items}>
				<Icon name={icon} size={24} />
			</Badge>
		</IconButton>
	)
}

export default CartButton
