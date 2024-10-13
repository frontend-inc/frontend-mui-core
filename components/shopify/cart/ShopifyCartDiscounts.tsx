'use client'

import React, { useState } from 'react'
import { useCart } from 'frontend-shopify'
import { Button, TextField } from '../../../tailwind'

const ShopifyCartDiscountCodeInput: React.FC = () => {
	const [discountCode, setDiscountCode] = useState<string | null>(null)

	const { loading, cartApplyDiscountCode } = useCart()

	const handleSubmit = async () => {
		if (discountCode && discountCode != '') {
			await cartApplyDiscountCode(discountCode)
			setDiscountCode('')
		}
	}

	const handleChange = (e) => setDiscountCode(e.target.value)

	return (
		<div className="px-1 flex flex-row justify-center items center space-x-1">
			<TextField
				fullWidth
				name="discountCode"
				value={discountCode}
				handleChange={handleChange}
				placeholder="Enter discount code"
				className="rounded-l-md rounded-r-none border-r-0"
			/>
			<Button
				onClick={handleSubmit}
				color="secondary"
				variant="contained"
				className="rounded-l-none rounded-r-md"
				loading={loading}
			>
				Apply
			</Button>
		</div>
	)
}

export default ShopifyCartDiscountCodeInput
