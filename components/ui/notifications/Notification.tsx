import React from 'react'
import {
	ListItem,
	ListItemText,
	ListItemButton,
	Typography,
	Button,
} from '@mui/material'
import { useClickOrDrag } from '../../../hooks'
import { useApp } from '../../../hooks'
import { useRouter } from 'next/router'
import { NotificationType } from '../../../types'

type NotificationProps = {
	notification: NotificationType
}

const Notification: React.FC<NotificationProps> = (props) => {
	const router = useRouter()

	const { notification } = props || {}

	const { text, path, url, notification_type } = notification || {}

	const { clientUrl } = useApp()

	const handleClick = () => {
		switch (notification_type) {
			case 'url':
				window.open(url, '_blank')
				break
			case 'page':
			case 'document':
				router.push(`${clientUrl}${path}`)
				break
		}
	}

	const { onMouseDown, onMouseUp } = useClickOrDrag({
		onClick: handleClick,
	})

	return (
		<ListItem sx={sx.root}>
			<ListItemButton
				sx={sx.listItemButton}
				onMouseDown={onMouseDown}
				onMouseUp={onMouseUp}
			>
				<ListItemText
					primary={
						<Typography
							color="primary.contrastText"
							variant="body2"
							sx={sx.text}
						>
							{text}
						</Typography>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

export default Notification

const sx = {
	root: {
		p: 0,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		bgcolor: 'primary.main',
		overflowX: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	text: {
		textWrap: 'nowrap',
		textAlign: 'center',
		overflowX: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	listItemButton: {},
}
