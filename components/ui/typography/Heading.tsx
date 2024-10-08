import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { TypographyVariantsType } from '../../../types'

type HeadingProps = {
	label?: string
	title?: string
	description?: string
	textAlign?: 'left' | 'center'
	textVariant?: TypographyVariantsType
	enableBorder?: boolean
	secondaryAction?: React.ReactNode
}

const Heading: React.FC<HeadingProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign = 'left',
		textVariant = 'h4',
		enableBorder = false,
		secondaryAction,
	} = props || {}

	if (!title && !description && !label) return null
	return (
		<Box sx={sx.root}>
			<Stack sx={sx.toolbar} direction={{ sm: 'row', xs: 'column' }}>
				<Stack
					sx={{
						...sx.stack,
						...(enableBorder && sx.border),
						alignItems: textAlign,
					}}
					direction={'column'}
					spacing={0.5}
				>
					{label && (
						<Typography variant="caption" color="text.secondary">
							{label}
						</Typography>
					)}
					{title && (
						<Typography
							variant={textVariant}
							color="text.primary"
							sx={{
								...sx.title,
								textAlign: textAlign,
							}}
						>
							{title}
						</Typography>
					)}
					{description && (
						<Typography
							variant="body1"
							color="text.secondary"
							sx={{
								...sx.description,
								textAlign: textAlign,
							}}
						>
							{description}
						</Typography>
					)}
				</Stack>
				{secondaryAction}
			</Stack>
		</Box>
	)
}

export default Heading

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: {
			xs: 'column',
			sm: 'row',
		},
	},
	stack: {
		pb: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	border: {
		py: 2,
		borderBottom: '1px solid',
		borderColor: 'divider',
	},
	title: {
		width: '100%',
		'& span': {
			color: 'primary.main',
		},
	},
	description: {
		width: '100%',
		whiteSpace: 'pre-line',
	},
	toolbar: {
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}
