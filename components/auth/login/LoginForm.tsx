'use client'

import React from 'react'
import { Button } from '../../../tailwind'
import { GoogleLoginButton, TextInput } from '../..'

type LoginFormProps = {
	errors?: any
	loading?: boolean
	user: any
	enableGoogle?: boolean
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleForgotPassword: false | (() => void)
	handleSignup: false | (() => void)
	handleOneTimePassword?: false | (() => void)
	handleGoogleSuccess?: () => void
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
	const {
		errors,
		loading = false,
		user,
		handleChange,
		handleSubmit,
		handleForgotPassword,
		handleSignup,
		handleOneTimePassword,
		enableGoogle = false,
		handleGoogleSuccess,
	} = props

	return (
		<div className="flex flex-col space-y-4 w-full">
			{enableGoogle && (
				<GoogleLoginButton handleSuccess={handleGoogleSuccess} />
			)}
			<div className="flex flex-col space-y-4">
				<TextInput
					errors={errors}
					label="Email"
					name="email"
					value={user?.email}
					placeholder="Email"
					handleChange={handleChange}
				/>
				<TextInput
					errors={errors}
					label="Password"
					name="password"
					value={user?.password}
					type="password"
					placeholder="Password"
					handleChange={handleChange}
				/>
			</div>
			<div className="flex flex-col space-y-2">
				<Button
					fullWidth
					color="primary"
					onClick={handleSubmit}
					variant="contained"
					loading={loading}
				>
					Sign In
				</Button>
				{handleSignup && (
					<Button
						fullWidth
						color="secondary"
						variant="contained"
						onClick={handleSignup}
					>
						No account? Sign up
					</Button>
				)}
				{handleForgotPassword && (
					<Button
						fullWidth
						color="secondary"
						variant="text"
						onClick={handleForgotPassword}
					>
						Forgot password?
					</Button>
				)}
				{handleOneTimePassword && (
					<Button
						fullWidth
						color="secondary"
						variant="text"
						onClick={handleOneTimePassword}
					>
						One-time password
					</Button>
				)}
			</div>
		</div>
	)
}

export default LoginForm
