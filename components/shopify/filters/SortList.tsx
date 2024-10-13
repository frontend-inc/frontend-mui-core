'use client'

import React from 'react'
import { RadioGroup, RadioGroupItem } from '../../../shadcn/ui/radio-group'
import { Label } from '../../../shadcn/ui/label'

type SortListProps = {
	enableIcons?: boolean
	value: string
	reverse?: boolean
	options: Array<{
		value: string
		reverse?: boolean
		label: string
	}>
	handleClick: (value: string, reverse?: boolean) => void
}

const SortList: React.FC<SortListProps> = (props) => {
	const { value, reverse, options, handleClick } = props || {}

	return (
		<RadioGroup
			value={`${value}-${reverse}`}
			onValueChange={(newValue) => {
				const [value, reverse] = newValue.split('-')
				handleClick(value, reverse === 'true')
			}}
			className="space-y-1"
		>
			{options?.map((option, index) => (
				<div key={index} className="flex items-center space-x-2">
					<RadioGroupItem
						value={`${option.value}-${option.reverse}`}
						id={`option-${index}`}
					/>
					<Label
						htmlFor={`option-${index}`}
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						{option.label}
					</Label>
				</div>
			))}
		</RadioGroup>
	)
}

export default SortList
