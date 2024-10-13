'use client'

import React from 'react'
import { Button } from '../../../tailwind'

type OneTimePasswordVerifyFormProps = {
	verified: boolean
	handleLogin?: () => void
	handleRedirect: () => void
}

const OneTimePasswordVerifyForm: React.FC<OneTimePasswordVerifyFormProps> = (
	props
) => {
	const { verified = false, handleRedirect, handleLogin } = props

	return (
		<div className="flex flex-col space-y-3">
			{verified ? (
				<Button
					fullWidth
					variant="contained"
					color="primary"
					onClick={handleRedirect}
				>
					Success! You can now continue
				</Button>
			) : (
				<Button fullWidth color="primary" onClick={handleLogin}>
					Back to Login
				</Button>
			)}
		</div>
	)
}

export default OneTimePasswordVerifyForm
