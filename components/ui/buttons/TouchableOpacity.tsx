import React from 'react'
import { useClickOrDrag } from '../../../hooks'
import { CardActionArea } from '@mui/material'

type TouchableOpacityProps = {
	children: any
	handleClick?: () => void
	disableRipple?: boolean
	disableBorderRadius?: boolean
	justifyContent?: string
}

const TouchableOpacity: React.FC<TouchableOpacityProps> = (props) => {
	const {
		children,
		justifyContent = 'center',
		handleClick,
		disableRipple = false,
		disableBorderRadius = false,
	} = props

	const { onMouseDown, onMouseUp } = useClickOrDrag({
		onClick: handleClick,
	})

	return (
		<CardActionArea
			sx={{
				...sx.root,
				...(disableBorderRadius && sx.disableBorderRadius),
				justifyContent,
			}}
			disableRipple={disableRipple}
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
		>
			{children}
		</CardActionArea>
	)
}

export default TouchableOpacity

const sx = {
	root: {
		p: 0,
		cursor: 'pointer !important',
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		'.MuiCardActionArea-focusHighlight': {
			background: 'transparent',
		},
	},
	disableBorderRadius: {
		borderRadius: 0,
	},
}
