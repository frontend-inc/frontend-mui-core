'use client'

import React, { useState } from 'react'

const useLoaders = () => {
	const [loading, setLoading] = useState(false)
	const showLoading = () => setLoading(true)
	const hideLoading = () => setLoading(false)

	const loadingWrapper = async (fn) => {
		try {
			showLoading()
			let resp = await fn()
			return resp
		} catch (e) {
			console.log(e)
		} finally {
			hideLoading()
		}
	}

	return {
		loading,
		setLoading,
		showLoading,
		hideLoading,
		loadingWrapper,
	}
}

export default useLoaders
