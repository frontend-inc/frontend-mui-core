'use client'

import React, { useState } from 'react'
import { Button } from '../../../shadcn/ui/button'
import { Progress } from '../../../shadcn/ui/progress'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../../../shadcn/lib/utils'

type CarouselProgressProps = {
	children: React.ReactNode[]
	className?: string
}

const CarouselProgress: React.FC<CarouselProgressProps> = ({
	children,
	className,
}) => {
	const [currentStep, setCurrentStep] = useState(0)

	const handleNextStep = () => {
		let nextStep = currentStep + 1
		if (nextStep > children.length - 1) {
			nextStep = 0
		}
		setCurrentStep(nextStep)
	}

	const handlePrevStep = () => {
		let nextStep = currentStep - 1
		if (nextStep < 0) {
			nextStep = children.length - 1
		}
		setCurrentStep(nextStep)
	}

	return (
		<div className={cn('space-y-4', className)}>
			<div>{children[currentStep]}</div>
			<div className="flex flex-col items-center space-y-2">
				<Progress
					value={((currentStep + 1) / children.length) * 100}
					className="w-full"
				/>
				<div className="flex justify-center items-center space-x-4">
					<Button variant="outline" size="icon" onClick={handlePrevStep}>
						<ChevronLeft className="h-4 w-4" />
					</Button>
					<Button variant="outline" size="icon" onClick={handleNextStep}>
						<ChevronRight className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CarouselProgress
