'use client'

import React from 'react'
import { useApi } from 'frontend-js'
import { useApp, useLoadingWrapper } from '..'

const useStripeCustomerPortal = () => {
	const { api } = useApi()
	const { apiUrl } = useApp()

	const { loading, loadingWrapper } = useLoadingWrapper()

	const stripeCustomerPortal = async (returnUrl) => {
		return await loadingWrapper(() =>
			api.post(`${apiUrl}/shop/stripe/customer_portal`, {
				stripe: {
					return_url: returnUrl,
				},
			})
		)
	}

	return {
		loading,
		stripeCustomerPortal,
	}
}

export default useStripeCustomerPortal
