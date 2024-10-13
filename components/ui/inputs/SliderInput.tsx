'use client'

import React from 'react'
import { Slider } from '../../../shadcn/ui/slider'
import { cn } from '../../../shadcn/lib/utils'

type SliderInputProps = {
	label?: string
	name: string
	value?: number[]
	handleChange: (value: number[]) => void
	min: number
	max: number
	stepSize?: number
	className?: string
}

const SliderInput: React.FC<SliderInputProps> = (props) => {
	const {
		value = [],
		name,
		handleChange,
		min = 0,
		max = 10,
		stepSize = 1,
		className,
	} = props

	return (
		<Slider
			name={name}
			defaultValue={value}
			onValueChange={handleChange}
			step={stepSize}
			min={min}
			max={max}
			value={value}
			className={cn('w-full', className)}
		/>
	)
}

export default SliderInput
