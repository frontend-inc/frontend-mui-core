import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { Icon } from '../..'
import { autoPlay } from 'react-swipeable-views-utils'
import { Box, IconButton } from '@mui/material'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

type SwipeableProps = {
	children: React.ReactNode[]
	enableAutoPlay?: boolean
	enableArrows?: boolean
	interval?: number
}

const Swipeable: React.FC<SwipeableProps> = (props) => {
	const {
		children = [],
		interval = 5000,
		enableArrows = false,
		enableAutoPlay = false,
	} = props

	const [activeStep, setActiveStep] = useState(0)

	const handleStepChange = (step: number) => {
		setActiveStep(step)
	}

	const handlePrev = () => {
		if (activeStep === 0) {
			setActiveStep(children?.length - 1)
		} else {
			setActiveStep((prevActiveStep) => prevActiveStep - 1)
		}
	}

	const handleNext = () => {
		if (activeStep === children?.length - 1) {
			setActiveStep(0)
		} else {
			setActiveStep((prevActiveStep) => prevActiveStep + 1)
		}
	}

	const SwipeableComponent = enableAutoPlay
		? AutoPlaySwipeableViews
		: SwipeableViews

	return (
		<Box sx={sx.root}>
			<SwipeableComponent
				axis={'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
				interval={interval}
			>
				{children}
			</SwipeableComponent>
			{enableArrows && (
				<Box sx={sx.buttons}>
					<IconButton onClick={handlePrev}>
						<Icon name="ChevronLeft" size={32} />
					</IconButton>
					<IconButton onClick={handleNext}>
						<Icon name="ChevronRight" size={32} />
					</IconButton>
				</Box>
			)}
		</Box>
	)
}

export default Swipeable

const sx = {
	root: {
		width: '100%',
		position: 'relative',
	},
	buttons: {
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		zIndex: 1,
	},
}
