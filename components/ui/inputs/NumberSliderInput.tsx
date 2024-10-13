'use client'

import React from 'react'
import { SyntheticEventType } from '../../../types'
import { InputLabel } from '../../../components'
import { Slider } from '../../../shadcn/ui/slider'

type NumberSliderInputProps = {
	label?: string
	name: string
	value?: number[]
	handleChange: (value: SyntheticEventType) => void
	min: number
	max: number
	stepSize?: number
	info?: string
}

export default function NumberSliderInput({
	value = [0],
	label,
	info,
	name,
	handleChange,
	min,
	max,
	stepSize = 1,
}: NumberSliderInputProps) {
	const handleInputChange = (newValue: number[]) => {
		handleChange({
			target: {
				name: name,
				value: newValue,
			},
		} as SyntheticEventType)
	}

	return (
		<div className="flex flex-col items-start justify-start w-full px-0">
			<InputLabel label={label} info={info} />
			<Slider
				defaultValue={value}
				onValueChange={handleInputChange}
				step={stepSize}
				min={min}
				max={max}
				value={value}
				className="w-full"
			/>
		</div>
	)
}
