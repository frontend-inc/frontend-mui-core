'use client'

import React from 'react'
import { Slider as ShadcnSlider } from '../../shadcn/ui/slider'
import { Label } from '../../shadcn/ui/label'
import { cn } from '../../shadcn/lib/utils'

interface SliderProps {
	name: string
	value: number[]
	handleChange: (value: number[]) => void
	errors?: string
	label?: string
	min?: number
	max?: number
	step?: number
	disabled?: boolean
	className?: string
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
	(
		{
			name,
			value,
			handleChange,
			errors,
			label,
			min = 0,
			max = 100,
			step = 1,
			disabled = false,
			className,
		},
		ref
	) => {
		return (
			<div ref={ref} className={cn('space-y-2', className)}>
				{label && (
					<Label htmlFor={name} className="text-sm font-medium text-foreground">
						{label}
					</Label>
				)}
				<ShadcnSlider
					id={name}
					name={name}
					min={min}
					max={max}
					step={step}
					value={value}
					onValueChange={handleChange}
					disabled={disabled}
					className={cn('w-full', disabled && 'opacity-50 cursor-not-allowed')}
				/>
				{errors && <p className="text-sm text-destructive mt-1">{errors}</p>}
			</div>
		)
	}
)

Slider.displayName = 'Slider'

export { Slider }
