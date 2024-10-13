'use client'

import React, { useContext } from 'react'
import { StripeContext } from '../../context'

const useStripe = () => {
	const { publishableKey, stripeCustomerPortal } = useContext(
		StripeContext
	) as any

	return {
		publishableKey,
		stripeCustomerPortal,
	}
}

export default useStripe
