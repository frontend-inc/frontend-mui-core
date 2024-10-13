'use client'

import React from 'react'
import { AuthScreen, SignupForm } from '../../../components'
import { useApp } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { useRouter, useParams } from 'next/navigation'

export type SignupProps = {
	href: string
	loginUrl: string
	title?: string
	subtitle?: string
	enableGoogle?: boolean
}

const Signup: React.FC<SignupProps> = (props) => {
	const { clientUrl } = useApp()

	const {
		href,
		loginUrl,
		title = 'Sign Up',
		subtitle = 'Register your account',
		enableGoogle = false,
	} = props

	const router = useRouter()

	const { loading, errors, user, handleChange, signup } = useAuth()

	const handleSubmit = async () => {
		let resp = await signup(user)
		if (resp?.id) {
			router.push(`${clientUrl}${href}`)
		}
	}

	const handleLogin = () => {
		if (loginUrl) {
			;`${clientUrl}${loginUrl}`
		}
	}

	const handleGoogleSuccess = () => {
		router.push(`${clientUrl}${href}`)
	}

	return (
		<AuthScreen title={title} subtitle={subtitle}>
			<SignupForm
				errors={errors}
				loading={loading}
				user={user}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				handleLogin={loginUrl ? handleLogin : false}
				enableGoogle={enableGoogle}
				handleGoogleSuccess={handleGoogleSuccess}
			/>
		</AuthScreen>
	)
}

export default Signup
