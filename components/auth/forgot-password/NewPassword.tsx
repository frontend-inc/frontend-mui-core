'use client'

import React from 'react'
import { NewPasswordForm, AuthScreen, Loader } from '../..'
import { useAuth } from 'frontend-js'

import { useRouter, useParams } from 'next/navigation'

type NewPasswordProps = {
	redirectUrl: string
	title?: string
	subtitle?: string
	loginUrl?: string
}

const NewPassword: React.FC<NewPasswordProps> = (props) => {
	const {
		redirectUrl,
		title = 'New Password',
		subtitle = 'Create a new password',
		loginUrl,
	} = props || {}

	const router = useRouter()

	const { errors, loading, user, handleChange, updateMe } = useAuth()

	const handleSubmit = async () => {
		let resp = await updateMe(user)
		if (resp?.id) {
			router.push(redirectUrl)
		}
	}

	const handleLogin = () => {
		router.push(loginUrl)
	}

	return (
		<>
			<Loader loading={loading} />
			<AuthScreen title={title} subtitle={subtitle}>
				<NewPasswordForm
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

export default NewPassword
