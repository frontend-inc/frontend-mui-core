'use client'

import React, { useState } from 'react'
import { ShopifyProductModal } from '../../../components/shopify'
import { Button } from '../../../tailwind'

type ShopifyQuickShopButtonProps = {
	size?: 'small' | 'medium' | 'large'
	color?: 'primary' | 'secondary'
	buttonText?: string
	quickShopButtonText?: string
	product?: any
	enableQuantity?: boolean
}

const ShopifyQuickShopButton: React.FC<ShopifyQuickShopButtonProps> = (
	props
) => {
	const {
		size,
		product,
		color = 'secondary',
		buttonText = 'Add to Cart',
		quickShopButtonText = 'Quick Shop',
		enableQuantity = false,
	} = props || {}

	const [open, setOpen] = useState(false)

	const handleQuickShop = () => {
		setOpen(true)
	}

	return (
		<>
			<Button
				size={size}
				color={color}
				variant="contained"
				onClick={handleQuickShop}
			>
				{quickShopButtonText}
			</Button>
			<ShopifyProductModal
				open={open}
				handleClose={() => setOpen(false)}
				shopifyProduct={product}
				enableQuantity={enableQuantity}
				buttonText={buttonText}
			/>
		</>
	)
}

export default ShopifyQuickShopButton
