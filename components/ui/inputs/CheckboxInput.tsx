'use client'

import React from 'react'
import { SyntheticEventType } from '../../../types'
import { Checkbox } from '../../../shadcn/ui/checkbox'
import { InputLabel } from '../../../components'
import { cn } from '../../../shadcn/lib/utils'

type CheckboxInputProps = {
	name: string
	value: boolean
	placeholder: string
	label?: string
	handleChange: (e: SyntheticEventType) => void
	disableBorder?: boolean
	info?: string
}

export default function CheckboxInput({
	name,
	value,
	placeholder,
	label,
	handleChange,
	disableBorder = false,
	info,
}: CheckboxInputProps) {
	const handleCheckboxChange = (checked: boolean) => {
		handleChange({
			target: {
				name,
				value: checked,
			},
		})
	}

	return (
		<div className="w-full">
			<InputLabel label={label} info={info} />
			<div
				className={cn(
					'flex flex-col text-sm',
					!disableBorder && 'border border-input shadow-sm rounded-md p-2'
				)}
			>
				<div className="flex items-center space-x-2">
					<Checkbox
						id={name}
						checked={value}
						onCheckedChange={handleCheckboxChange}
						className="border-secondary"
					/>
					<label
						htmlFor={name}
						className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						{placeholder}
					</label>
				</div>
			</div>
		</div>
	)
}
