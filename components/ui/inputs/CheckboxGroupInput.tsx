'use client'

import React from 'react'
import { Checkbox } from '../../../shadcn/ui/checkbox'
import { InputLabel } from '../../../components'
import { OptionType, SyntheticEventType } from '../../../types'
import { cn } from '../../../shadcn/lib/utils'

type CheckboxGroupInputProps = {
	errors: any
	name: string
	label: string
	value?: string[]
	options: OptionType[]
	info?: string
	handleChange: (e: SyntheticEventType) => void
}

export default function CheckboxGroupInput({
	errors,
	label,
	name,
	value: values = [],
	options,
	handleChange,
	info,
}: CheckboxGroupInputProps) {
	const handleCheckboxChange = (checked: boolean, value: string) => {
		let newValues = checked
			? [...values, value]
			: values.filter((v) => v !== value)

		handleChange({
			target: {
				name: name,
				// @ts-ignore
				value: newValues,
			},
		})
	}

	return (
		<div className="w-full">
			<InputLabel label={label} info={info} />
			<div className="space-y-2">
				{options?.map((option, idx) => (
					<div key={idx} className="flex items-center space-x-2">
						<Checkbox
							id={`${name}-${option.value}`}
							checked={values.includes(String(option.value))}
							onCheckedChange={(checked) =>
								handleCheckboxChange(checked as boolean, String(option.value))
							}
						/>
						<label
							htmlFor={`${name}-${option.value}`}
							className={cn(
								'text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
								errors && errors[name] ? 'text-red-500' : 'text-gray-500'
							)}
						>
							{option.label}
						</label>
					</div>
				))}
			</div>
			{errors && errors[name] && (
				<p className="mt-2 text-sm text-red-500">{errors[name]}</p>
			)}
		</div>
	)
}
