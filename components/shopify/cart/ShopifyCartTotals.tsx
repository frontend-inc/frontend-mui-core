'use client'

import React from 'react'
import { useCart } from 'frontend-shopify'
import { formatCurrency } from 'frontend-shopify'
import {
	ShopifyCartText,
	ShopifyCartDiscountCode,
} from '../../../components/shopify'

const ShopifyCartTotals: React.FC = () => {
	const { cart } = useCart()

	const subtotal = Number(cart?.cost?.subtotalAmount?.amount) || 0
	const tax = Number(cart?.totalTaxAmount?.amount) || 0
	const total = Number(cart?.totalAmount?.amount) || 0
	const discounts = Number(cart?.discountAllocation?.amount) || 0

	if (!cart) return null
	return (
		<div className="flex flex-col space-y-2">
			<ShopifyCartText label={'Subtotal'} value={formatCurrency(subtotal)} />
			{cart?.discountCodes?.map((discountCode) => (
				<ShopifyCartDiscountCode
					key={discountCode?.id}
					discountCode={discountCode}
				/>
			))}
			{discounts > 0 && (
				<ShopifyCartText
					label={'Discounts'}
					value={formatCurrency(-discounts)}
				/>
			)}
			<ShopifyCartText label={'Tax'} value={formatCurrency(tax)} />
			<ShopifyCartText label={'Total'} value={formatCurrency(total)} />
		</div>
	)
}

export default ShopifyCartTotals
