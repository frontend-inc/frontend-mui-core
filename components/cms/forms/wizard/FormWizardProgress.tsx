'use client'

import React from 'react'
import { Progress } from '../../../../shadcn/ui/progress'
import { Badge } from '../../../../shadcn/ui/badge'

type FormWizardProgressProps = {
	currentStep: number
	totalSteps: number
}

export default function FormWizardProgress({
	currentStep,
	totalSteps,
}: FormWizardProgressProps) {
	const progressValue = (currentStep / totalSteps) * 100

	return (
		<div className="w-full">
			<Progress value={progressValue} className="w-full h-2.5 rounded-none" />
			<div className="m-4">
				<Badge className="text-sm font-medium">
					Step {currentStep} of {totalSteps}
				</Badge>
			</div>
		</div>
	)
}
