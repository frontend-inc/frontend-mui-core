'use client'

import React, { useState } from 'react'
import { Button } from '../../../tailwind'
import { TextInput, IconLoading } from '../..'
import { useAlerts, useKlaviyo } from '../../../hooks'

export type KlaviyoSubscribeProps = {
	listId: string
	apiKey: string
	buttonText?: string
}

const KlaviyoSubscribe: React.FC<KlaviyoSubscribeProps> = (props) => {
	const { listId, apiKey, buttonText = 'Subscribe' } = props || {}

	const { showAlertError, showAlertSuccess } = useAlerts()

	const { loading, handleSubmit } = useKlaviyo({
		apiKey,
	})

	const [email, setEmail] = useState('')

	const handleFormSubmit = async () => {
		if (!email || !email?.includes('@')) {
			return showAlertError('Please enter a valid email')
		}
		if (!listId) {
			return showAlertError('Please enter a klaviyo list ID')
		}
		if (!apiKey) {
			return showAlertError('Please enter your public klaviyo API key')
		}
		try {
			await handleSubmit({
				email,
				listId,
			})
			showAlertSuccess('You have been subscribed to our newsletter!')
		} catch (e) {
			console.log('Error', e)
		}
	}

	const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(ev.target.value)
	}

	return (
		<div className="py-2 w-full flex flex-col items-center justify-center">
			<div className="flex flex-row max-w-[400px]">
				<TextInput
					direction="row"
					placeholder={'Enter email...'}
					name="email"
					value={email}
					handleChange={handleChange}
					className="rounded-r-none"
				/>
				<Button
					variant="contained"
					color="secondary"
					onClick={handleFormSubmit}
					className="min-w-[120px] rounded-l-none"
				>
					{loading ? <IconLoading /> : buttonText}
				</Button>
			</div>
		</div>
	)
}

export default KlaviyoSubscribe
