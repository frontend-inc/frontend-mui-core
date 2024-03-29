import React, { useState } from 'react'
import { Avatar, Box, Link, Stack, Typography } from '@mui/material'
import { DocumentType } from '../../../types'
import { SocialLink } from '../..'

type PersonProps = {
	resource: DocumentType
}

const Person: React.FC<PersonProps> = (props) => {
	const MAX_CHARS = 500

	const { resource } = props || {}
	const { title, image, description } = resource || {}
	const [open, setOpen] = useState(false)

	return (
		<Box sx={sx.root}>
			<Stack
				sx={sx.container}
				direction={{ md: 'row', xs: 'column' }}
				spacing={4}
			>
				<Stack direction="column">
					{resource?.image?.url && (
						<Avatar sx={sx.avatarContainer}>
							<Avatar src={image?.url} alt={title} sx={sx.avatar}>
								<Box />
							</Avatar>
							<Box />
						</Avatar>
					)}
				</Stack>
				<Stack spacing={2} sx={sx.content}>
					<Typography color="text.primary" variant="h4">
						{title}
					</Typography>
					<Stack direction="row" spacing={0} sx={sx.socialUrls}>
						{resource?.data?.facebook && (
							<SocialLink provider="facebook" url={resource?.data?.facebook} />
						)}
						{resource?.data?.instagram && (
							<SocialLink
								provider="instagram"
								url={resource?.data?.instagram}
							/>
						)}
						{resource?.data?.linked && (
							<SocialLink provider="linkedin" url={resource?.data?.linkedin} />
						)}
						{resource?.data?.twitter && (
							<SocialLink provider="twitter" url={resource?.data?.twitter} />
						)}
						{resource?.data?.youtube && (
							<SocialLink provider="youtube" url={resource?.data?.youtube} />
						)}
						{resource?.data?.blog && (
							<SocialLink provider="blog" url={resource?.data?.blog} />
						)}
					</Stack>
					<Box>
						{open ? (
							<Typography variant="body1" color="text.primary" sx={sx.text}>
								{description}
							</Typography>
						) : (
							<Typography variant="body1" color="text.primary" sx={sx.text}>
								{description?.slice(0, MAX_CHARS)}
							</Typography>
						)}
						{description?.length > MAX_CHARS && (
							<Link onClick={() => setOpen(!open)} sx={sx.link}>
								{open ? 'See less' : '... See all'}
							</Link>
						)}
					</Box>
				</Stack>
			</Stack>
		</Box>
	)
}

export default Person

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: {
			md: 'flex-start',
			xs: 'center',
		},
	},
	avatar: {
		height: {
			sm: 256,
			xs: 180,
		},
		width: {
			sm: 256,
			xs: 180,
		},
	},
	avatarContainer: {
		height: {
			sm: 260,
			xs: 184,
		},
		width: {
			sm: 260,
			xs: 184,
		},
		bgcolor: 'primary.contrastText',
	},
	header: {
		width: '100%',
		textAlign: 'center',
	},
	content: {
		width: '100%',
	},
	text: {
		width: '100%',
		whiteSpace: 'pre-line',
	},
	caption: {
		color: 'text.secondary',
	},
	link: {
		cursor: 'pointer',
		color: 'text.secondary',
	},
	socialUrls: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
}
