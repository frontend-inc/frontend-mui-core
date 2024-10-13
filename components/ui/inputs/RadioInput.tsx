'use client'

import React from 'react'
import { RadioGroup, RadioGroupItem } from '../../../shadcn/ui/radio-group'
import { Label } from '../../../shadcn/ui/label'
import { InputLabel } from '../../../components'
import { FormControl } from '../../../shadcn/ui/form'
import { Typography } from '../../../tailwind'

type Option = {
	value: string | number
	label: string
}

type SelectInputPropsType = {
	label: string
	info?: string
	name: string
	value: string | number
	options?: Option[]
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function RadioInput({
	label,
	info,
	name,
	value,
	options,
	handleChange,
}: SelectInputPropsType) {
	return (
		<FormControl className="w-full">
			<InputLabel label={label} info={info} />
			<RadioGroup
				name={name}
				value={String(value)}
				onValueChange={(newValue) =>
					handleChange({
						target: { name, value: newValue },
					} as React.ChangeEvent<HTMLInputElement>)
				}
				className="mt-2"
			>
				{options?.map((option, idx) => (
					<div key={idx} className="flex items-center space-x-2">
						<RadioGroupItem
							value={String(option.value)}
							id={`${name}-${option.value}`}
						/>
						<Label htmlFor={`${name}-${option.value}`}>
							<Typography variant="body2">{option.label}</Typography>
						</Label>
					</div>
				))}
			</RadioGroup>
		</FormControl>
	)
}
