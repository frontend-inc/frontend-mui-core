'use client'

import React from 'react'
import { UserAvatar, ResourceListItem } from '../../../components'

type AdminLeadItemProps = {
	resource: any
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminLeadItem: React.FC<AdminLeadItemProps> = (props) => {
	const { resource: lead, handleClick, handleEdit, handleDelete } = props

	return (
		<ResourceListItem
			primary={lead?.name}
			secondary={lead?.email}
			avatar={<UserAvatar user={lead} />}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminLeadItem
