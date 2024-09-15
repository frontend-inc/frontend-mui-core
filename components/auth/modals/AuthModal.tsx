import React, { useState, useEffect } from 'react'
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
import { useRouter } from 'next/router'
import { Tab, Tabs, Box } from '@mui/material'
import { useApp } from '../../../hooks'

type AuthModalProps = {
	disableUsername?: boolean
  enableGoogle?: boolean
  handleSuccess?: () => void
}

const AuthModal: React.FC<AuthModalProps> = (props) => {
	const {
    disableUsername = false, 
    enableGoogle,
    handleSuccess 
  } = props

	const router = useRouter()
	const { app_id: appId } = router.query

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

	const handleTabChange = (ev, newValue) => {
		setTab(newValue)
	}

	const handleLogin = async () => {
		let resp = await login({
			...user,
			app_id: appId,
		})
		if (resp?.id) {
			setAuthOpen(false)
			if(handleSuccess){
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
    if(handleSuccess){
      handleSuccess()
    }
	}

  const handleGoogleSuccess = async () => {
    setAuthOpen(false)
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
		<Modal open={authOpen} handleClose={() => setAuthOpen(false)}>
			<Box sx={sx.tabsContainer}>
				<Tabs value={tab} onChange={handleTabChange} variant="fullWidth">
					<Tab label="Login" value={0} />
					<Tab label="Register" value={1} />
				</Tabs>
			</Box>
			<Box px={4} sx={sx.content}>
				{tab === 0 && (
					<LoginForm
						errors={errors}
						loading={loading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleLogin}
						handleSignup={handleSignupClick}
						handleForgotPassword={handleForgotPasswordClick}
            enableGoogle={ enableGoogle }
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
            enableGoogle={ enableGoogle }
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
			</Box>
		</Modal>
	)
}

export default AuthModal

const sx = {
	logo: {
		display: 'flex',
		justifyContent: 'center',
	},
	content: {
    mt: 1,
		width: '100%',
	},
	tabsContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
	},
}
