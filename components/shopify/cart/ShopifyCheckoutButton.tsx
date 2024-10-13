'use client'

import React, { useState } from 'react'
import { useCart } from 'frontend-shopify'
import { useSegment } from '../../../hooks/addons'
import { Button } from '../../../tailwind'

type ShopifyCheckoutButtonProps = {
	size?: 'small' | 'medium' | 'large'
}

const ShopifyCheckoutButton: React.FC<ShopifyCheckoutButtonProps> = (props) => {
	const [loading, setLoading] = useState(false)
	const { cart } = useCart()

	const { trackCheckoutStarted } = useSegment()

	const handleCheckoutClick = () => {
		setLoading(true)
		setTimeout(() => redirectToWebUrl(), 500)
	}

	const redirectToWebUrl = () => {
		trackCheckoutStarted(cart)
		window.location = cart?.checkoutUrl
		setLoading(false)
	}

	return (
		<Button
			fullWidth
			color="primary"
			onClick={handleCheckoutClick}
			variant="contained"
			size="large"
			loading={loading}
		>
			Checkout
		</Button>
	)
}

export default ShopifyCheckoutButton
