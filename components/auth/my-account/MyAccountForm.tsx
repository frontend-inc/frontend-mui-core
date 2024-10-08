import React from 'react'
import { Button, Box } from '@mui/material'
import { Form } from '../../../components'
import { MetafieldType } from '../../../types'
import { ACCOUNT_FORM_FIELDS } from '../../../constants'

type MyAccountFormProps = {
	loading?: boolean
	errors?: any
	user: any
	metafields?: MetafieldType[]
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleDeleteAvatar: () => void
	handleLogout: () => void
}

const MyAccountForm: React.FC<MyAccountFormProps> = (props) => {
	const {
		loading,
		errors,
		user,
		handleSubmit,
		handleChange,
		handleLogout,
		handleDeleteAvatar,
	} = props

	let formFields = ACCOUNT_FORM_FIELDS

	formFields = [
		...formFields,
		{
			label: 'Accept email marketing',
			name: 'accepts_marketing',
			variant: 'boolean',
		},
	]

	return (
		<Box sx={sx.root}>
			<Form
				loading={loading}
				errors={errors}
				//@ts-ignore
				fields={formFields}
				resource={user}
				handleChange={handleChange}
				handleRemove={handleDeleteAvatar}
				handleSubmit={handleSubmit}
				buttonText="Save"
			/>
			<Button color="secondary" variant="contained" onClick={handleLogout}>
				Logout
			</Button>
		</Box>
	)
}

export default MyAccountForm

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		gap: 2,
	},
}
