'use client'

import React from 'react'
import { Stack, Typography } from '../../../tailwind'
import { useCart } from '../../../hooks'

const CartTotals: React.FC = () => {
	const { cart } = useCart()
	if (cart?.total_items === 0) return null
	return (
		<Stack spacing={1} direction="row" justifyContent="space-between">
			<Typography variant="caption">Subtotal</Typography>
			<Typography variant="subtitle2">{cart?.display_subtotal}</Typography>
		</Stack>
	)
}

export default CartTotals
