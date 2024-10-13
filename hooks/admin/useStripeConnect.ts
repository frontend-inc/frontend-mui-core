'use client'

import React from 'react'
import { useApi } from 'frontend-js'
import { useAdmin, useLoadingWrapper } from '..'

const useStripeConnect = () => {
	const { api } = useApi()
	const { apiUrl } = useAdmin()

	const { loading, loadingWrapper } = useLoadingWrapper()

	const stripeConnect = async (returnUrl) => {
		return await loadingWrapper(() =>
			api.post(`${apiUrl}/stripe/connect`, {
				stripe: {
					return_url: returnUrl,
				},
			})
		)
	}

	return {
		loading,
		stripeConnect,
	}
}

export default useStripeConnect
