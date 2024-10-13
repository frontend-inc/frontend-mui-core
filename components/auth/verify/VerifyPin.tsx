'use client'

import React, { useState } from 'react'
import { Button } from '../../../tailwind'
import { VerifyPinForm, VerifySendPinForm, AuthScreen, Loader } from '../..'
import { useAuth } from 'frontend-js'

import { useRouter, useParams } from 'next/navigation'

type VerifyPinProps = {
	title: string
	subtitle?: string
	redirectUrl: string
	loginUrl: string
}

const VerifyPin: React.FC<VerifyPinProps> = (props) => {
	const { title, subtitle, redirectUrl, loginUrl } = props || {}

	const [showVerifyPin, setShowVerifyPin] = useState(false)

	const { loading, errors, user, setUser, handleChange, sendPin, verifyPin } =
		useAuth()

	const router = useRouter()

	const handleSendPin = async () => {
		let resp = await sendPin(user)
		if (resp?.id) {
			setShowVerifyPin(true)
		}
	}

	const handleVerifyPin = async () => {
		let resp = await verifyPin(user?.email, user?.pin)
		if (resp?.id) {
			router.push(redirectUrl)
		}
	}

	const handleResendPin = async () => {
		setUser({
			...user,
			pin: '',
		})
		await sendPin(user)
	}

	const handleLogin = () => {
		router.push(loginUrl)
	}

	return (
		<>
			<Loader loading={loading} />
			<AuthScreen title={title} subtitle={subtitle}>
				<div className="flex flex-col space-y-3">
					{!showVerifyPin ? (
						<VerifySendPinForm
							errors={errors}
							user={user}
							handleChange={handleChange}
							handleSubmit={handleSendPin}
							handleLogin={handleLogin}
						/>
					) : (
						<VerifyPinForm
							errors={errors}
							user={user}
							handleChange={handleChange}
							handleSubmit={handleVerifyPin}
							handleResendPin={handleResendPin}
						/>
					)}
					{loginUrl && (
						<Button fullWidth onClick={handleLogin} color="primary">
							Back to login
						</Button>
					)}
				</div>
			</AuthScreen>
		</>
	)
}

export default VerifyPin
