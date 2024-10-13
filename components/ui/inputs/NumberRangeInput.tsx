'use client'

import React from 'react'
import { InputLabel } from '../../../components'
import { SyntheticEventType } from '../../../types'
import { Input } from '../../../shadcn/ui/input'
import { cn } from '../../../shadcn/lib/utils'

export type NumberRangeInputProps = {
	label?: string
	name?: string
	value?: {
		min: number
		max: number
	}
	handleChange?: (value: SyntheticEventType) => void
	currency?: string
	info?: string
	startAdornment?: React.ReactNode
}

export default function NumberRangeInput({
	value = {
		min: 0,
		max: 0,
	},
	name,
	label,
	handleChange,
	currency = 'usd',
	info,
	startAdornment,
}: NumberRangeInputProps) {
	const handleMinChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const min = ev.target.value
		handleChange?.({
			target: {
				name: name,
				value: {
					...value,
					min: Number(min),
				},
			},
		} as SyntheticEventType)
	}

	const handleMaxChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const max = ev.target.value
		handleChange?.({
			target: {
				name: name,
				value: {
					...value,
					max: Number(max),
				},
			},
		} as SyntheticEventType)
	}

	return (
		<div className="w-full">
			<InputLabel label={label} info={info} />
			<div className="flex flex-row items-center justify-between w-full">
				<div className="relative flex-1">
					{startAdornment && (
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<span className="text-sm text-gray-500">{currency}</span>
						</div>
					)}
					<Input
						type="number"
						onChange={handleMinChange}
						value={value?.min}
						className={cn('pr-2', startAdornment && 'pl-8')}
					/>
				</div>
				<div className="mx-2 text-sm text-gray-500">to</div>
				<div className="relative flex-1">
					{startAdornment && (
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							{startAdornment}
						</div>
					)}
					<Input
						type="number"
						value={value?.max}
						onChange={handleMaxChange}
						className={cn('pr-2', startAdornment && 'pl-8')}
					/>
				</div>
			</div>
		</div>
	)
}
