import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { Icon } from '../../components'

type PlaceholderProps = {
	icon?: string
	title?: string
	description?: string
	buttons?: any
	color?: string
	enableBorder?: boolean
	enableAvatarBorder?: boolean
}

const Placeholder: React.FC<PlaceholderProps> = (props) => {
	const {
		icon,
		title,
		description,
		buttons,
		color = 'text.secondary',
		enableBorder = false,
	} = props

	return (
		<Box
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
			}}
		>
			<Stack spacing={1} alignItems="center">
				{icon && <Icon name={icon} size={24} color={color} />}
				<Typography sx={sx.title} variant="subtitle2" color="text.primary">
					{title}
				</Typography>
				<Typography sx={sx.description} variant="body1" color="text.secondary">
					{description}
				</Typography>
				{buttons && <Box sx={sx.buttons}>{buttons}</Box>}
			</Stack>
		</Box>
	)
}
export default Placeholder

const sx = {
	root: {
		p: 4,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		maxWidth: '100vw',
		borderRadius: 1,
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
	title: {
		color: 'text.primary',
		textAlign: 'center',
	},
	description: {
		textAlign: 'center',
	},
	border: {
		border: '1px solid',
		borderColor: 'divider',
	},
	buttons: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
}
