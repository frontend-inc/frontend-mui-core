'use client'

import React from 'react'
import { ResourceListItem, Label } from '../../../components'

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
			color={'bg-purple-500'}
			secondaryAction={email?.internal && <Label label="System" />}
			handleClick={() => handleEdit(email)}
			handleEdit={() => handleEdit(email)}
			handleDelete={email?.internal ? undefined : () => handleDelete(email)}
		/>
	)
}

export default EmailItem
