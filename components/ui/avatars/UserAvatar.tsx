'use client'

import React from 'react'
import Avatar from './Avatar'
import { getInitials } from '../../../helpers'

type UserAvatarProps = {
	user: any
	size?: number
	enableGradient?: boolean
	className?: string
}

const UserAvatar: React.FC<UserAvatarProps> = (props) => {
	const { user, size = 36, className, enableGradient = false } = props
	return (
		<Avatar
			variant="rounded"
			label={getInitials(user?.name)}
			size={size}
			src={user?.avatar?.url}
			enableGradient={enableGradient}
			className={className}
		/>
	)
}

export default UserAvatar
