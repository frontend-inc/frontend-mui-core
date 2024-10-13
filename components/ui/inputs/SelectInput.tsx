import React from 'react'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../../../shadcn/ui/select'
import { InputLabel } from '../../../components'
import { cn } from '../../../shadcn/lib/utils'
import { SyntheticEventType } from 'frontend-js'

type SelectInputPropsType = {
	label?: string
	direction?: 'column' | 'row'
	name: string
	value: string
  placeholder?: string
	options?: { 
    value: string | number | boolean
    label: string 
  }[]
	handleChange: (e: SyntheticEventType) => void
	info?: string
}

export default function SelectInput({
	label,
	direction = 'column',
	name,
	value,
	options,
	handleChange,
	info,
}: SelectInputPropsType) {
	return (
		<div
			className={cn(
				'w-full',
				direction === 'row'
					? 'flex items-center space-x-4'
					: 'flex flex-col space-y-2'
			)}
		>
			<InputLabel label={label} info={info} />
			<Select
				value={value}
				onValueChange={(newValue) =>
					handleChange({ target: { name, value: newValue } })
				}
			>
				<SelectTrigger className="w-full min-w-[165px] h-10 bg-background border border-input shadow-none rounded">
					<SelectValue placeholder="Select an option" />
				</SelectTrigger>
				<SelectContent>
					{options?.map((option, idx) => (
						<SelectItem 
              key={idx} 
              // @ts-ignore
              value={option.value}
            >
							{option.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
