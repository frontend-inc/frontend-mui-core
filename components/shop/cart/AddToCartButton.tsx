'use client'

import React from 'react'
import { Button } from '../../../tailwind'
import { useCart } from '../../../hooks'

type AddToCartButtonProps = {
	size?: 'small' | 'medium' | 'large'
	productId: string
	fullWidth?: boolean
	availableForSale?: boolean
}

const AddToCartButton = (props: AddToCartButtonProps) => {
	const { productId, size = 'medium', fullWidth, availableForSale } = props
	const { loading, setCartOpen, addToCart } = useCart()

	const handleClick = async () => {
		await addToCart(productId)
		setCartOpen(true)
	}

	return (
		<Button
			fullWidth={fullWidth}
			loading={loading}
			onClick={handleClick}
			disabled={!availableForSale}
			size={size}
		>
			Add to Cart
		</Button>
	)
}

export default AddToCartButton
