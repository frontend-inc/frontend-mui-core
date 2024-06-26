import React from 'react'
import { Box, Popover, PopoverOrigin } from '@mui/material'

type PopupProps = {
	open: boolean
	handleClose: () => void
	anchorEl: any
	children: any
	disablePadding?: boolean
	p?: number
	anchorOrigin?: PopoverOrigin
	transformOrigin?: PopoverOrigin
}

const Popup: React.FC<PopupProps> = (props) => {
	const {
		open,
		handleClose,
		anchorEl,
		children,
		disablePadding = false,
		p = 2,
		anchorOrigin = {
			vertical: 'bottom',
			horizontal: 'left',
		},
		transformOrigin = {
			vertical: 'top',
			horizontal: 'left',
		},
	} = props || {}

	return (
		<Popover
			open={open}
			anchorEl={anchorEl}
			onClose={handleClose}
			anchorOrigin={anchorOrigin}
			transformOrigin={transformOrigin}
			sx={sx.root}
		>
			<Box
				sx={{
					...sx.content,
					p,
					...(disablePadding && sx.disablePadding),
				}}
			>
				{children}
			</Box>
		</Popover>
	)
}

export default Popup

const sx = {
	root: {
		'& .MuiPopover-paper': {
			border: '1px solid',
			borderColor: 'divider',
			borderRadius: 1,
		},
	},
	content: {
		maxHeight: '520px',
		maxWidth: '520px',
		overflowY: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	disablePadding: {
		p: 0,
	},
}
