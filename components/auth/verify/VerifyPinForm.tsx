'use client'

import React from 'react'
import { Button } from '../../../tailwind'
import { IconLoading, TextInput } from '../..'

type SendPinFormProps = {
	errors: Record<string, any>
	loading?: boolean
	user: Record<string, any>
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleResendPin: () => void
}

const SendPinForm: React.FC<SendPinFormProps> = (props) => {
	const { errors, loading, user, handleChange, handleSubmit, handleResendPin } =
		props

	return (
		<div className="flex flex-col space-y-3">
			<TextInput
				label="Enter your PIN"
				errors={errors}
				name="pin"
				value={user?.pin}
				placeholder="Enter PIN for verification"
				handleChange={handleChange}
			/>
			<Button
				fullWidth
				variant="contained"
				color="primary"
				onClick={handleSubmit}
				startIcon={loading && <IconLoading />}
			>
				Verify Pin
			</Button>
			<Button fullWidth color="primary" onClick={handleResendPin}>
				Resend Pin
			</Button>
		</div>
	)
}

export default SendPinForm
