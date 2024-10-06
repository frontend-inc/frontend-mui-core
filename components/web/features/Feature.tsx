import React from 'react'
import { Icon } from '../..'
import { Avatar, Stack, Typography } from '../../../tailwind'

type FeatureProps = {
	icon?: string
	title?: string
	description?: string
	enableBorder?: boolean
}

const Feature: React.FC<FeatureProps> = (props) => {
	const { icon, title, description } = props || {}
	return (
		<Stack
			direction="column"      
			spacing={2}			
      alignItems='center'
		>
			{icon && <Avatar><Icon name={icon} color="primary.main" /></Avatar>}
			<Stack direction="column" spacing={1} alignItems='center'>
				<Typography color="text.primary" variant="subtitle1">
					{title}
				</Typography>
				<Typography color="text.secondary" variant="body1">
					{description}
				</Typography>
			</Stack>
		</Stack>
	)
}

export default Feature

const sx = {
	root: {
		p: 2,
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		borderRadius: 1,
	},
	avatar: {
		bgcolor: 'primary.main',
		height: '54px',
		width: '54px',
	},
	title: {
		textAlign: 'left',
		color: 'grey.900',
		'& span': {
			color: 'primary.main',
		},
	},
	text: {
		maxWidth: '280px',
		textAlign: 'left',
		'& span': {
			color: 'primary.main',
		},
	},
	enableBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
}
