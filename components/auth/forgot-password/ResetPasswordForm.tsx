'use client'

import React from 'react'
import { Button } from '../../../tailwind'
import { IconLoading, TextInput } from '../../../components'

type ResetPasswordFormProps = {
	loading: boolean
	errors: Record<string, any>
	user: Record<string, any>
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleLogin?: () => void
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = (props) => {
	const { loading, errors, user, handleChange, handleSubmit, handleLogin } =
		props

	return (
		<div className="flex flex-col space-y-2">
			<TextInput
				errors={errors}
				name="password"
				value={user?.password}
				handleChange={handleChange}
				type="password"
				placeholder="New password"
			/>
			<TextInput
				errors={errors}
				name="password_confirmation"
				value={user?.password_confirmation}
				handleChange={handleChange}
				type="password"
				placeholder="Confirm password"
			/>
			<Button
				fullWidth
				variant="contained"
				color="primary"
				onClick={handleSubmit}
				endIcon={loading && <IconLoading />}
			>
				Save and Continue
			</Button>
			{handleLogin && (
				<Button fullWidth color="primary" onClick={handleLogin}>
					Back to login
				</Button>
			)}
		</div>
	)
}

export default ResetPasswordForm
