import React from 'react'
import { ResourceListItem, Label } from '../../../components'
import { deepPurple } from '@mui/material/colors'

type EmailItemProps = {
	resource: any
	handleEdit: (resource: any) => void
	handleDelete: (resource: any) => void
}

const EmailItem: React.FC<EmailItemProps> = (props) => {
	const { resource: email, handleEdit, handleDelete } = props

	return (
		<ResourceListItem
			enableBorder
			primary={email.name}
			secondary={email.subject}
			icon="Mail"
			color={deepPurple[500]}
			secondaryAction={email?.internal && <Label label="System" />}
			handleClick={() => handleEdit(email)}
			handleEdit={() => handleEdit(email)}
			handleDelete={email?.internal ? undefined : () => handleDelete(email)}
		/>
	)
}

export default EmailItem

const sx = {
	root: {
		p: 0,
		borderRadius: 1,
		border: '2px solid',
		borderColor: 'divider',
		bgcolor: 'background.paper',
		'&:hover': {
			borderColor: 'primary.main',
		},
		my: 1,
	},
	secondaryActions: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	listItemButton: {
		p: 2,
	},
}
