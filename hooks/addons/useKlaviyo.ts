'use client'

import React, { useState } from 'react'

type UseKlaviyoParams = {
	apiKey: string
}

const useKlaviyo = (params: UseKlaviyoParams) => {
	const { apiKey } = params

	const [loading, setLoading] = useState(false)

	// Subscribe to newsletter
	const handleSubmit = async (params) => {
		const { email, listId } = params || {}
		try {
			setLoading(true)
			let body = JSON.stringify({
				email,
				listId,
				apiKey,
			})
			const resp = await fetch(`/api/klaviyo-subscribe`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: body,
			})
			return resp?.json()
		} catch (e) {
			console.log('Error', e)
		} finally {
			setLoading(false)
		}
	}

	return {
		loading,
		handleSubmit,
	}
}

export default useKlaviyo
