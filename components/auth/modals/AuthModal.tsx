'use client'

import React, { useEffect, useState } from 'react'
import {
	Modal,
	LoginForm,
	SignupForm,
	ForgotPasswordForm,
	ResetPasswordForm,
	VerifyPinForm,
	VerifySendPinForm,
} from '../..'
import { useAuth } from 'frontend-js'
import { useRouter, useParams } from 'next/navigation'
import { Typography, Stack } from '../../../tailwind'
import { useApp } from '../../../hooks'

type AuthModalProps = {
	disableUsername?: boolean
	enableGoogle?: boolean
	handleSuccess?: () => void
}

const AuthModal: React.FC<AuthModalProps> = (props) => {
	const { disableUsername = false, enableGoogle, handleSuccess } = props

	const router = useRouter()
	const { app_id: appId } = useParams() as any

	const { authOpen, setAuthOpen } = useApp()

	const {
		errors,
		loading,
		user,
		updateMe,
		handleChange,
		login,
		signup,
		verifyPin,
		sendPin,
	} = useAuth()

	const [tab, setTab] = useState(1)

	const handleLogin = async () => {
		let resp = await login({
			...user,
			app_id: appId,
		})
		if (resp?.id) {
			setAuthOpen(false)
			if (handleSuccess) {
				handleSuccess()
			}
		}
	}

	const handleSignup = async () => {
		let resp = await signup({
			...user,
			app_id: appId,
		})
		if (resp?.id) {
			setAuthOpen(false)
		}
		if (handleSuccess) {
			handleSuccess()
		}
	}

	const handleGoogleSuccess = async () => {
		setAuthOpen(false)
		if (handleSuccess) {
			handleSuccess()
		}
	}

	const handleSendPin = async () => {
		await sendPin({
			...user,
			app_id: appId,
		})
		setTab(3)
	}

	const handleVerifyPin = async () => {
		let resp = await verifyPin(user?.email, user?.pin)
		if (resp?.id) {
			setTab(5)
		}
	}

	const handleResetPassword = async () => {
		//@ts-ignore
		let resp = await updateMe({
			password: user?.password,
			password_confirmation: user?.password_confirmation,
		})
		if (resp?.id) {
			setAuthOpen(false)
		}
	}

	const handleSignupClick = () => {
		setTab(1)
	}

	const handleLoginClick = () => {
		setTab(0)
	}

	const handleForgotPasswordClick = () => {
		setTab(2)
	}

	const handleResendPinClick = () => {
		setTab(4)
	}

	useEffect(() => {
		if (authOpen) {
			setTab(1)
		}
	}, [authOpen])

	return (
		<Modal
			title={
				tab == 0
					? 'Login'
					: tab == 1
					? 'Signup'
					: tab == 2
					? 'Forgot Password'
					: tab == 3
					? 'Verify Pin'
					: tab == 4
					? 'Resend Pin'
					: 'Reset Password'
			}
			description="Register or login"
			open={authOpen}
			handleClose={() => setAuthOpen(false)}
		>
			<div className="flex flex-col space-y-3">
				{tab === 0 && (
					<LoginForm
						errors={errors}
						loading={loading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleLogin}
						handleSignup={handleSignupClick}
						handleForgotPassword={handleForgotPasswordClick}
						enableGoogle={enableGoogle}
						handleGoogleSuccess={handleGoogleSuccess}
					/>
				)}
				{tab === 1 && (
					<SignupForm
						disableUsername={disableUsername}
						errors={errors}
						loading={loading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleSignup}
						handleLogin={handleLoginClick}
						enableGoogle={enableGoogle}
						handleGoogleSuccess={handleGoogleSuccess}
					/>
				)}
				{tab === 2 && (
					<ForgotPasswordForm
						errors={errors}
						loading={loading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleSendPin}
						handleLogin={handleLoginClick}
					/>
				)}
				{tab === 3 && (
					<VerifyPinForm
						errors={errors}
						loading={loading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleVerifyPin}
						handleResendPin={handleResendPinClick}
					/>
				)}
				{tab === 4 && (
					<VerifySendPinForm
						errors={errors}
						loading={loading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleSendPin}
						handleLogin={handleLoginClick}
					/>
				)}
				{tab == 5 && (
					<ResetPasswordForm
						errors={errors}
						loading={loading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleResetPassword}
						handleLogin={handleLoginClick}
					/>
				)}
			</div>
		</Modal>
	)
}

export default AuthModal
