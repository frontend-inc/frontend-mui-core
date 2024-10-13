'use client'

import React from 'react'
import { Typography } from '../../../tailwind'
import { ResourceListItem, UserAvatar, DisplayFields } from '../..'
import { DisplayFieldType, UserType } from '../../../types'

type UserListItemProps = {
	size?: number
	resource: UserType
	displayFields: DisplayFieldType[]
	handleClick?: () => void
}

const UserListItem: React.FC<UserListItemProps> = (props) => {
	let {
		resource: user,
		size = 44,
		displayFields = [],
		handleClick,
	} = props || {}

	return (
		<ResourceListItem
			handleClick={handleClick}
			primary={
				<Typography variant="subtitle2" color="text.primary">
					{user?.name}
				</Typography>
			}
			avatar={<UserAvatar size={size} user={user} />}
			secondary={<DisplayFields resource={user} fields={displayFields} />}
		/>
	)
}

export default UserListItem
