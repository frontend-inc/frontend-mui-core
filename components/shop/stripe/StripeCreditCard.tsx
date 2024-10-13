'use client'

import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import StripeCreditCardElement from './StripeCreditCardElement'

type StripeCreditCardProps = {
	publishableKey: string
	handleSubmit: (stripeToken: string, last4: string) => void
	handleCancel: () => void
}

const StripeCreditCard: React.FC<StripeCreditCardProps> = (props) => {
	const { publishableKey, handleSubmit, handleCancel } = props || {}
	const stripePromise = loadStripe(publishableKey)

	return (
		<Elements stripe={stripePromise}>
			<StripeCreditCardElement
				handleSubmit={handleSubmit}
				handleCancel={handleCancel}
			/>
		</Elements>
	)
}

export default StripeCreditCard
