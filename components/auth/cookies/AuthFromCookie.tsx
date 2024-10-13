'use client'

import React, { useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { getCookie } from 'cookies-next'

const AuthFromCookie: React.FC = () => {
	const { authCookie, fetchMe, currentUser, authenticateFromToken } = useAuth()

	useEffect(() => {
		if (!currentUser?.id) {
			let authToken = getCookie(authCookie)
			if (authToken) {
				authenticateFromToken(String(authToken))
				if (!currentUser) {
					fetchMe()
				}
			}
		}
	}, [currentUser?.id])

	return null
}

export default AuthFromCookie
