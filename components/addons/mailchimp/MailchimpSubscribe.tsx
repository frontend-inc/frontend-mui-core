import React, { useEffect, useState } from 'react'
import { Stack, Box, Button } from '@mui/material'
import { Heading, TextInput, ButtonLoader } from '../..'
import { useMailChimpForm } from 'use-mailchimp-form'
import { useAlerts } from '../../../hooks'

type MailchimpEmbedProps = {
	title?: string
	description?: string
	formId: string
	buttonText?: string
}

const MailchimpEmbed: React.FC<MailchimpEmbedProps> = (props) => {
	const { title, description, formId, buttonText = 'Subscribe' } = props || {}

	const { loading, error, success, message, handleSubmit } =
		useMailChimpForm(formId)

	const { showAlertSuccess } = useAlerts()

	const [email, setEmail] = useState('')

	const handleFormSubmit = async () => {
		if (!email || !email?.includes('@')) {
			return showAlertSuccess('Please enter a valid email')
		}
		if (!formId) {
			return showAlertSuccess('Please enter a mailchimp form ID')
		}
		handleSubmit({
			EMAIL: email,
		})
	}

	const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(ev.target.value)
	}

	useEffect(() => {
		if (message) {
			showAlertSuccess(message)
		}
	}, [message])

	return (
		<Stack direction="column" spacing={2} sx={sx.root}>
			{(title || description) && (
				<Heading title={title} description={description} textAlign="center" />
			)}
			<Stack direction="row" spacing={0} sx={sx.form}>
				<TextInput
					direction="row"
					placeholder="Enter email..."
					name="EMAIL"
					value={email}
					handleChange={handleChange}
					styles={sx.input}
				/>
				<Button
					sx={sx.button}
					variant="contained"
					color="secondary"
					onClick={handleFormSubmit}
				>
					{loading ? <ButtonLoader loading={loading} /> : `${buttonText}`}
				</Button>
			</Stack>
		</Stack>
	)
}

export default MailchimpEmbed

const sx = {
	root: {
		py: 2,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	form: {
		maxWidth: 400,
	},
	text: {
		pt: 2,
	},
	button: {
		minWidth: 120,
		borderRadius: (theme) =>
			`0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
	},
	input: {
		'& .MuiInputBase-input': {
			borderRadius: (theme) =>
				`${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`,
		},
	},
}
