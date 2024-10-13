'use client'

import React from 'react'
import { Placeholder, StripeCustomerPortalButton } from '../../../components'

const StripeCustomerPortal = () => {
	return (
		<Placeholder
			icon="CreditCard"
			title="Stripe Customer Portal"
			description="Manage your subscription and order history."
			buttons={<StripeCustomerPortalButton />}
		/>
	)
}

export default StripeCustomerPortal
