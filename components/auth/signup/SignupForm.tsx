'use client'

import React from 'react'
import { Button } from '../../../tailwind'
import { IconLoading, TextInput, GoogleLoginButton } from '../..'

type SignupFormProps = {
	loading: boolean
	user: Record<string, any>
	errors: Record<string, any>
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleLogin: false | (() => void)
	disableUsername?: boolean
	enableGoogle?: boolean
	handleGoogleSuccess?: () => void
}

const SignupForm: React.FC<SignupFormProps> = (props) => {
	const {
		loading,
		errors,
		user,
		handleChange,
		enableGoogle,
		disableUsername = false,
		handleSubmit,
		handleLogin,
		handleGoogleSuccess,
	} = props || {}

	return (
		<div className="flex flex-col space-y-4 w-full">
			{enableGoogle && (
				<GoogleLoginButton handleSuccess={handleGoogleSuccess} />
			)}
			<div className="flex flex-col space-y-4 w-full">
				{!disableUsername && (
					<TextInput
						direction="column"
						errors={errors}
						name="username"
						label="Username"
						value={user?.username}
						placeholder="Username"
						handleChange={handleChange}
					/>
				)}
				<div className="flex flex-row space-x-3 w-full items-center">
					<TextInput
						errors={errors}
						direction="column"
						name="first_name"
						label="First name"
						value={user?.first_name}
						placeholder="First name"
						handleChange={handleChange}
					/>
					<TextInput
						errors={errors}
						direction="column"
						name="last_name"
						label="Last name"
						value={user?.last_name}
						placeholder="Last name"
						handleChange={handleChange}
					/>
				</div>
				<TextInput
					errors={errors}
					direction="column"
					name="email"
					label="Email"
					value={user?.email}
					placeholder="Email"
					handleChange={handleChange}
				/>
				<TextInput
					errors={errors}
					direction="column"
					name="password"
					label="Password"
					value={user?.password}
					type="password"
					placeholder="Password"
					handleChange={handleChange}
				/>
			</div>
			<div className="flex flex-col space-y-3 w-full">
				<Button
					fullWidth
					color="primary"
					onClick={handleSubmit}
					variant="contained"
					startIcon={loading && <IconLoading />}
				>
					Register
				</Button>
				{handleLogin && (
					<Button
						fullWidth
						color="secondary"
						variant="text"
						onClick={handleLogin}
					>
						Already have an account? Sign in
					</Button>
				)}
			</div>
		</div>
	)
}

export default SignupForm
