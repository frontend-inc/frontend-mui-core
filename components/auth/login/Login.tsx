'use client'

import React, { useContext } from 'react'
import { LoginForm, AuthScreen, Loader } from '../..'
import { useAuth } from 'frontend-js'
import { useRouter, useParams } from 'next/navigation'
import { useApp } from '../../../hooks'

export type LoginProps = {
	title?: string
	subtitle?: string
	forgotPasswordUrl?: string
	signupUrl?: string
	oneTimePasswordUrl?: string
	disableUsername?: boolean
	enableGoogle?: boolean
	href?: string
}

const Login: React.FC<LoginProps> = (props) => {
	const { clientUrl } = useApp()

	const {
		href,
		title = 'Sign In',
		subtitle = 'Log in to your account',
		forgotPasswordUrl,
		signupUrl,
		oneTimePasswordUrl,
		enableGoogle = false,
	} = props || {}

	const router = useRouter()
	const { errors, loading, user, handleChange, login } = useAuth()

	const handleSubmit = async () => {
		let resp = await login(user)
		if (resp?.id && href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	const handleGoogleSuccess = () => {
		router.push(`${clientUrl}${href}`)
	}

	const handleSignup = () => {
		if (signupUrl) {
			router.push(`${clientUrl}${signupUrl}`)
		}
	}

	const handleForgotPassword = () => {
		if (forgotPasswordUrl) {
			router.push(`${clientUrl}${forgotPasswordUrl}`)
		}
	}

	const handleOneTimePassword = () => {
		if (oneTimePasswordUrl) {
			router.push(`${clientUrl}${oneTimePasswordUrl}`)
		}
	}

	return (
		<>
			<Loader loading={loading} />
			{!loading && (
				<AuthScreen title={title} subtitle={subtitle}>
					<LoginForm
						errors={errors}
						loading={loading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						handleOneTimePassword={
							oneTimePasswordUrl ? handleOneTimePassword : false
						}
						handleSignup={signupUrl ? handleSignup : false}
						handleForgotPassword={
							forgotPasswordUrl ? handleForgotPassword : false
						}
						enableGoogle={enableGoogle}
						handleGoogleSuccess={handleGoogleSuccess}
					/>
				</AuthScreen>
			)}
		</>
	)
}

export default Login
