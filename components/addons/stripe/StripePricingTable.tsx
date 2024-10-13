'use client'

import React from 'react'

export type StripePricingTableProps = {
	pricingTableId: string
	publishableKey: string
}

// Script tag included in html head
// <script async src="https://js.stripe.com/v3/pricing-table.js"></script>

const StripePricingTable: React.FC<StripePricingTableProps> = (props) => {
	const { pricingTableId, publishableKey } = props
	if (!pricingTableId || !publishableKey) return null
	return (
		<div className="flex flex-row justify-center items-center">
			{/* @ts-ignore */}
			<stripe-pricing-table
				pricing-table-id={pricingTableId}
				publishable-key={publishableKey}
			/>
		</div>
	)
}

export default StripePricingTable
