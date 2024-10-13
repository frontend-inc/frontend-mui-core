'use client'

import React from 'react'
import { AuthScreen, Loader } from '../..'
import { useAuth } from 'frontend-shopify'
import ShopifySignInForm from './ShopifySignInForm'
import { useRouter, useParams } from 'next/navigation'

type ShopifySignInProps = {
	redirectUrl: string
	title?: string
	subtitle?: string
	forgotPasswordUrl?: string
	signupUrl?: string
	oneTimePasswordUrl?: string
}

const ShopifySignIn: React.FC<ShopifySignInProps> = (props) => {
	const {
		redirectUrl,
		title = 'Sign In',
		subtitle = 'Log in to your account',
		forgotPasswordUrl,
		signupUrl,
	} = props || {}

	const router = useRouter()
	const { errors, loading, customer, handleChange, login } = useAuth()

	const handleSubmit = async () => {
		let resp = await login(customer)
		if (resp?.accessToken) {
			router.push(redirectUrl)
		}
	}

	const handleSignup = () => {
		if (signupUrl) router.push(signupUrl)
	}

	const handleForgotPassword = () => {
		if (forgotPasswordUrl) router.push(forgotPasswordUrl)
	}

	return (
		<>
			<Loader loading={loading} />
			<AuthScreen title={title} subtitle={subtitle}>
				<ShopifySignInForm
					errors={errors}
					loading={loading}
					customer={customer}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleSignup={handleSignup}
					handleForgotPassword={handleForgotPassword}
				/>
			</AuthScreen>
		</>
	)
}

export default ShopifySignIn
