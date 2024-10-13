'use client'

import React from 'react'

export type StripeBuyButtonProps = {
	buyButtonId: string
	publishableKey: string
}

// Script tag included in html head
//<script async src="https://js.stripe.com/v3/buy-button.js"></script>

const StripeBuyButton: React.FC<StripeBuyButtonProps> = (props) => {
	const { buyButtonId, publishableKey } = props

	if (!buyButtonId || !publishableKey) return null
	return (
		<div className="w-full flex justify-center items-center">
			{/* @ts-ignore */}
			<stripe-buy-button
				buy-button-id={buyButtonId}
				publishable-key={publishableKey}
			/>
		</div>
	)
}

export default StripeBuyButton
