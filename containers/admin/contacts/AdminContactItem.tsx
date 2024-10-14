'use client'

import React from 'react'
import { Label, UserAvatar, ResourceListItem } from '../../../components'
import { Typography } from '../../../tailwind'

type AdminContactItemProps = {
	resource: any
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminContactItem: React.FC<AdminContactItemProps> = (props) => {
	const { resource: contact, handleClick, handleEdit, handleDelete } = props

	return (
		<ResourceListItem
			primary={
				<div className="flex flex-row space-x-1 items-center">
					{contact?.name && (
						<Typography variant="body1" >
							{contact?.name}
						</Typography>
					)}
					<Label label={contact?.source} />
				</div>
			}
			secondary={contact?.email}
			avatar={
				<UserAvatar
					user={{
						...contact,
						name: contact?.name || contact?.email,
					}}
				/>
			}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminContactItem
