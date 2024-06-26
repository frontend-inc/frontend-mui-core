import React, { useEffect, useState } from 'react'
import { Fade, Box } from '@mui/material'
import { muiTheme } from '../../theme'
import { AuthGuard } from '../../components'
import { SectionProps } from '../../types'

const Section: React.FC<SectionProps> = (props) => {
	const {
		enableTransitions = false,
		requireAuth = false,
		requireTeam = false,
		requirePaid = false,
		requireAdmin = false,
		children,
		bgcolor,
		maxWidth,
		py = 4,
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
						...(enableTransitions && sx.containerTransitions),
						py,
						px,
						maxWidth: width,
					}}
				>
					<AuthGuard
						requireAuth={requireAuth}
						requireTeam={requireTeam}
						requirePaid={requirePaid}
						requireAdmin={requireAdmin}
					>
						{children}
					</AuthGuard>
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
	containerTransitions: {
		transition: 'all 0.3s ease-in-out',
	},
	title: {
		width: '100%',
	},
}
