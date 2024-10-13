'use client'

import React from 'react'
import StripeContext from './StripeContext'

type StripeProviderProps = {
	publishableKey?: string
	customerPortalUrl?: string
	children: React.ReactNode
}

const StripeProvider = (props: StripeProviderProps) => {
	const { children, publishableKey, customerPortalUrl } = props || {}

	const value = {
		stripeCustomerPortalUrl: customerPortalUrl,
		stripePublishableKey: publishableKey,
	}

	return (
		<StripeContext.Provider value={value}>{children}</StripeContext.Provider>
	)
}

export default StripeProvider
