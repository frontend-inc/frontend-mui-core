'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'

type UseOAuthProps = {
	provider: string
	onComplete: (code: string) => void
}

const useOAuth = (props: UseOAuthProps) => {
	const { provider, onComplete } = props || {}
	const router = useRouter()
	const queryParams = useParams() as any

	// Handle the login once the code is retrieved
	// Listen for messages from popup window
	useEffect(() => {
		const handleEventListener = async (event) => {
			if (event.data) {
				const code = event.data
				await onComplete(code)
				window.close()
			}
		}
		window.addEventListener('message', handleEventListener, false)
		return () => {
			window.removeEventListener('message', handleEventListener)
		}
	}, [onComplete])

	// Once the code is returned after a successful login,
	// post the message to the parent window
	useEffect(() => {
		if (queryParams?.code) {
			const { code } = queryParams
			const message = JSON.stringify({
				code: code,
				provider: provider,
			})
			window.opener.postMessage(message)
			window.close()
		}
	}, [queryParams?.code])
}

export default useOAuth
