'use client'

import React from 'react'
import { AuthScreen, Loader } from '../..'
import { useAuth } from 'frontend-js'

import { OneTimePasswordForm } from '../..'
import { useRouter, useParams } from 'next/navigation'

type OneTimePasswordProps = {
	redirectUrl: string
	title?: string
	subtitle?: string
	loginUrl?: string
}

const OneTimePassword: React.FC<OneTimePasswordProps> = (props) => {
	const {
		redirectUrl,
		title = 'One-Time Password',
		subtitle = 'Get a one-time password link',
		loginUrl,
	} = props || {}

	const router = useRouter()

	const { errors, loading, user, handleChange, sendOneTimePassword } = useAuth()

	const handleSubmit = async () => {
		let resp = await sendOneTimePassword(user)
		if (resp?.id) {
			router.push(redirectUrl)
		}
	}

	const handleLogin = () => {
		if (loginUrl) {
			router.push(loginUrl)
		}
	}

	return (
		<>
			<Loader loading={loading} />
			<AuthScreen title={title} subtitle={subtitle}>
				<OneTimePasswordForm
					loading={loading}
					errors={errors}
					user={user}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleLogin={handleLogin}
				/>
			</AuthScreen>
		</>
	)
}

export default OneTimePassword
