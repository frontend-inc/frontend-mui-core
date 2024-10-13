'use client'

import React from 'react'
import { UserAvatar } from '../..'
import { UserType } from '../../../types'

type UserChipProps = {
	user: UserType
	enableUsername?: boolean
	enableEmail?: boolean
	size?: number
}

export default function UserChip({
	user,
	enableEmail,
	enableUsername,
	size = 24,
}: UserChipProps) {
	if (!user?.name) return null

	return (
		<div className="flex items-center py-0.5 space-x-2">
			<UserAvatar user={user} size={size} />
			<div className="flex flex-col py-0.5">
				<span className="text-xs text-muted-foreground">{user.name}</span>
				{enableEmail && user?.email && (
					<span className="text-xs text-muted-foreground">{user.email}</span>
				)}
				{enableUsername && (
					<span className="text-xs text-muted-foreground">
						@{user.username}
					</span>
				)}
			</div>
		</div>
	)
}
