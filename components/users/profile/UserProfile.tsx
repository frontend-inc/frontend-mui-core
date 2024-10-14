'use client'

import React from 'react'
import { Typography } from '../../../tailwind'
import {
	ButtonActions,
	UserAvatar,
	ExpandableText,
	DisplayFields,
	SocialFields,
} from '../..'
import { SocialFieldType, DisplayFieldType, ButtonType } from '../../../types'
import { UserType } from 'frontend-js'

export type UserProfileProps = {
	user: UserType
	displayFields?: DisplayFieldType[]
	socialFields?: SocialFieldType[]
	buttons?: ButtonType[]
}

const UserProfile: React.FC<UserProfileProps> = (props) => {
	const {
		user,
		displayFields = [],
		socialFields = [],
		buttons = [],
	} = props || {}

	const { name, username, about_me, avatar } = user || {}

	if (!user?.id) return null
	return (
		<div className="w-full flex flex-col items-center justify-center rounded">
			<div className="flex flex-col sm:flex-row items-start sm:space-x-4 max-w-[600px]">
				<div className="flex flex-col items-center">
					{avatar?.url && <UserAvatar user={user} size={120} enableGradient />}
					<SocialFields fields={socialFields} resource={user} />
				</div>
				<div className="flex flex-col space-y-1">
					<Typography
						variant="caption"
						className="text-muted-foreground"
						className="w-full flex justify-center sm:justify-start"
					>
						@{username}
					</Typography>
					<Typography
						variant="h6"
						
						className="w-full min-w-[200px] text-center sm:text-left"
					>
						{name}
					</Typography>
					<div className="flex flex-col space-y-1">
						<DisplayFields resource={user} fields={displayFields} />
						{about_me && (
							<ExpandableText text={about_me} className="text-muted-foreground"/>
						)}
					</div>
				</div>
				{buttons?.length > 0 && (
					<div className="w-full flex justify-end items-start">
						<ButtonActions buttons={buttons} />
					</div>
				)}
			</div>
		</div>
	)
}

export default UserProfile
