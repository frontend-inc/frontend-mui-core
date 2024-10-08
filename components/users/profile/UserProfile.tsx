import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
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
		<Box sx={sx.container}>
			<Stack
				sx={sx.userContainer}
				direction={{ sm: 'row', xs: 'column' }}
				spacing={{ sm: 4, xs: 0 }}
				alignItems="flex-start"
			>
				<Stack direction="column" alignItems="center">
					{avatar?.url && <UserAvatar user={user} size={120} enableGradient />}
					<SocialFields fields={socialFields} resource={user} />
				</Stack>
				<Stack direction="column" spacing={1}>
					<Typography variant="caption" color="text.secondary" sx={sx.username}>
						@{username}
					</Typography>
					<Typography variant="h6" color="text.primary" sx={sx.name}>
						{name}
					</Typography>
					<Stack direction="column" spacing={1}>
						<DisplayFields resource={user} fields={displayFields} />
						{about_me && (
							<ExpandableText text={about_me} color="text.secondary" />
						)}
					</Stack>
				</Stack>
				{buttons?.length > 0 && (
					<Stack direction="row" sx={sx.buttons}>
						<ButtonActions
							numVisible={1}
							buttons={buttons}
							resource={user}
							user={user}
						/>
					</Stack>
				)}
			</Stack>
		</Box>
	)
}

export default UserProfile

const sx = {
	container: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 1,
	},
	containerBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
	userContainer: {
		maxWidth: 600,
	},
	button: {
		boxShadow: 0,
		color: 'text.secondary',
	},
	name: {
		width: '100%',
		minWidth: 200,
		textAlign: {
			sm: 'left',
			xs: 'center',
		},
	},
	avatar: {
		width: 110,
		height: 110,
	},
	avatarContainer: {
		bgcolor: 'common.white',
		height: 126,
		width: 126,
		borderRadius: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	username: {
		boxShadow: 0,
		width: '100%',
		display: 'flex',
		justifyContent: {
			sm: 'flex-start',
			xs: 'center',
		},
	},
	buttons: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
	},
}
