'use client'

import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { Icon } from '../..'
import { autoPlay } from 'react-swipeable-views-utils'
import { IconButton } from '../../../tailwind'
import { cn } from '../../../shadcn/lib/utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

type SwipeableProps = {
	children: React.ReactNode[]
	enableAutoPlay?: boolean
	enableArrows?: boolean
	interval?: number
	className?: string
}

const Swipeable: React.FC<SwipeableProps> = (props) => {
	const {
		children = [],
		interval = 5000,
		enableArrows = false,
		enableAutoPlay = false,
		className,
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
		<div className={cn('w-full relative', className)}>
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
				<div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full z-10">
					<IconButton color="ghost" onClick={handlePrev} className="ml-2">
						<Icon name="ChevronLeft" size={32} />
					</IconButton>
					<IconButton color="ghost" onClick={handleNext} className="mr-2">
						<Icon name="ChevronRight" size={32} />
					</IconButton>
				</div>
			)}
		</div>
	)
}

export default Swipeable
