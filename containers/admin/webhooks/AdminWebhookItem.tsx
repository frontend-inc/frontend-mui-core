'use client'

import React from 'react'
import { Label, ResourceListItem } from '../../../components'

type AdminWebhookItemProps = {
	resource: any
	sortable?: boolean
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminWebhookItem: React.FC<AdminWebhookItemProps> = (props) => {
	const { resource, sortable, handleClick, handleEdit, handleDelete } = props

	return (
		<ResourceListItem
			enableBorder
			sortable={sortable}
			icon="Webhook"
			color="primary.main"
			primary={resource?.event_type}
			secondary={resource?.collection?.name}
			secondaryAction={<Label label={resource?.event_type} />}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminWebhookItem
