import React, { useState } from 'react'
import {
	Box,
	List,
	ListItem,
	ListItemText,
	ListItemButton,
	Typography,
	IconButton,
	Collapse,
} from '@mui/material'
import { ChevronRight } from '@mui/icons-material'

type MenuListProps = {
	children: React.ReactNode
	label?: string
	icon?: React.ReactNode
	enableBorder?: boolean
	disablePadding?: boolean
	defaultClosed?: boolean
}

const MenuList: React.FC<MenuListProps> = (props) => {
	const {
		label,
		defaultClosed = false,
		children,
		enableBorder = false,
		disablePadding = false,
	} = props

	const [open, setOpen] = useState(!defaultClosed)
	const handleToggleClick = () => {
		setOpen(!open)
	}

	return (
		<List
			disablePadding
			sx={{
				...sx.root,
				...(enableBorder && sx.border),
			}}
		>
			{label && (
				<ListItem
					sx={sx.listItem}
					disablePadding
					disableGutters
					secondaryAction={
						<IconButton onClick={handleToggleClick}>
							<ChevronRight
								sx={{
									...sx.icon,
									...(open && sx.expandMore),
								}}
							/>
						</IconButton>
					}
				>
					<ListItemButton
						sx={sx.listItemButton}
						disableRipple
						onClick={handleToggleClick}
					>
						<ListItemText
							primary={
								<Typography sx={sx.label} variant={'overline'}>
									{label}
								</Typography>
							}
						/>
					</ListItemButton>
				</ListItem>
			)}
			<Collapse in={open}>
				<Box
					sx={{
						...sx.content,
						...(disablePadding && sx.contentDisablePadding),
					}}
				>
					{children}
				</Box>
			</Collapse>
		</List>
	)
}

export default MenuList

const sx = {
	root: {
		width: '100%',
		minWidth: 200,
		my: 0,
	},
	listItem: {},
	listItemButton: {
		py: 0,
		height: '40px',
	},
	listItemIcon: {
		minWidth: '40px',
		width: '40px',
	},
	label: {
		py: 0,
		color: 'text.secondary',
		lineHeight: '1em',
	},
	icon: {
		transition: 'transform 0.3s ease-in-out',
		color: 'text.secondary',
	},
	expandMore: {
		transform: 'rotate(90deg)',
	},
	border: {
		borderTop: '1px solid',
		borderColor: 'divider',
	},
	content: {
		pb: 2,
		px: 2,
	},
	contentDisablePadding: {
		p: 0,
	},
}
