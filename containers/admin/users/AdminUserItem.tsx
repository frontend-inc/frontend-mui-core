import React from 'react'
import { Typography } from '@mui/material'
import { Label, UserAvatar, ResourceListItem } from '../../../components'
import { ResourceItemProps } from '../../../components/cms/resources/ResourceItem'
import { useAuth } from 'frontend-js'

const AdminUserItem: React.FC<ResourceItemProps> = (props) => {
	const {
		resource: user,
		selectable,
		selected,
		handleClick,
		handleEdit,
		handleDelete,
		handleSelect,
		...rest
	} = props

	return (
		<ResourceListItem
			selectable={selectable}
			selected={selected}
			primary={
				<Typography variant="body1" color="text.primary">
					{user?.name} <Label label={user.role} />
				</Typography>
			}
			secondary={`@${user?.username}`}
			secondaryAction={user.paid && <Label label={'Paid'} />}
			avatar={<UserAvatar user={user} size={44} />}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			handleClick={handleClick}
			handleSelect={handleSelect}
			{...rest}
		/>
	)
}

export default AdminUserItem
