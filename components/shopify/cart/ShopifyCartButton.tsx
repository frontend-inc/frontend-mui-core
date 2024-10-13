'use client'

import React, { useContext } from 'react'
import { ShopifyContext } from 'frontend-shopify'
import { AppContext } from '../../../context'
import { Icon } from '../../../components'
import { IconButton, Badge } from '../../../tailwind'

type ShopifyCartButtonProps = {
	icon?: string
}

export default function ShopifyCartButton({
	icon = 'ShoppingCart',
}: ShopifyCartButtonProps) {
	const { cart, toggleCart } = useContext(ShopifyContext) as any
	const { setMenuOpen } = useContext(AppContext)

	const handleCartClick = () => {
		setMenuOpen(false)
		toggleCart()
	}
	return (
		<IconButton onClick={handleCartClick}>
			<Badge badgeContent={cart?.totalQuantity}>
				<Icon name={icon} size={24} />
			</Badge>
		</IconButton>
	)
}
