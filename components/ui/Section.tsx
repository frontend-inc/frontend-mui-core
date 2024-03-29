import React, { useEffect, useState } from 'react'
import { Fade, Box, Typography } from '@mui/material'
import { muiTheme } from '../../theme'

type SectionProps = {
	children: React.ReactNode
	title?: string
	textAlign?: 'left' | 'center'
	bgcolor?: string
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false
	py?: number
	px?: number
}

const Section: React.FC<SectionProps> = (props) => {
	const {
		children,
		title,
		textAlign = 'left',
		bgcolor,
		maxWidth,
		py = 6,
		px = 3,
	} = props

	const [width, setWidth] = useState<string | number>(
		muiTheme.breakpoints.values.md
	)

	// Since breakpoints are modified to
	// to compensate for the extra width of the Editor
	// we need to adjust the width of the Section component manually
	useEffect(() => {
		switch (maxWidth) {
			case 'sm':
				setWidth(muiTheme.breakpoints.values.sm)
				break
			case 'md':
				setWidth(muiTheme.breakpoints.values.md)
				break
			default:
				setWidth('100%')
				break
		}
	}, [maxWidth])

	return (
		<Fade in={true} timeout={1000}>
			<Box
				sx={{
					...sx.root,
					bgcolor,
				}}
			>
				<Box
					sx={{
						...sx.container,
						py,
						px,
						maxWidth: width,
					}}
				>
					{title && (
						<Typography
							sx={{
								...sx.title,
								textAlign,
							}}
							variant="h5"
							color="textPrimary"
						>
							{title}
						</Typography>
					)}
					{children}
				</Box>
			</Box>
		</Fade>
	)
}

export default Section

const sx = {
	root: {
		width: '100%',
		minHeight: '60px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		width: '100%',
		overflowX: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	title: {
		width: '100%',
	},
}
