'use client'

import React from 'react'
import { AuthLayout, AuthScreen } from '../..'
import { ShopifyRegisterForm } from '..'
import { useAuth } from 'frontend-shopify'
import { useRouter, useParams } from 'next/navigation'

type ShopifyRegisterProps = {
	title?: string
	subtitle?: string
	redirectUrl: string
	loginUrl: string
}

const ShopifyRegister: React.FC<ShopifyRegisterProps> = (props) => {
	const {
		title = 'Sign up',
		subtitle = 'Register your account',
		redirectUrl,
		loginUrl,
	} = props

	const { loading, errors, customer, handleChange, signup } = useAuth()

	const router = useRouter()

	const handleSubmit = async () => {
		let resp = await signup(customer)
		if (resp?.email) {
			router.push(redirectUrl)
		}
	}

	const handleLogin = () => {
		router.push(loginUrl)
	}

	return (
		<AuthScreen title={title} subtitle={subtitle}>
			<ShopifyRegisterForm
				errors={errors}
				loading={loading}
				customer={customer}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				handleLogin={handleLogin}
			/>
		</AuthScreen>
	)
}

export default ShopifyRegister
