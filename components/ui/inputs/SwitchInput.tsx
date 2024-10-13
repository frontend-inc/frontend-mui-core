'use client'

import React from 'react'
import { InputPropsType } from '../../../types'
import { InputLabel } from '../../../components'
import { Switch } from '../../../shadcn/ui/switch'
import { Label } from '../../../shadcn/ui/label'
import { cn } from '../../../shadcn/lib/utils'

type SwitchInputProps = InputPropsType & {
	disableBorder?: boolean
}

export default function SwitchInput({
	name,
	value,
	disableBorder = false,
	label,
	placeholder,
	handleChange,
	info,
}: SwitchInputProps) {
	const onCheckedChange = (checked: boolean) => {
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
					'w-full flex flex-col rounded-md py-1 text-sm',
					!disableBorder && 'focus-within:border-primary'
				)}
			>
				<div className="flex items-center space-x-2">
					<Switch id={name} checked={value} onCheckedChange={onCheckedChange} />
					<Label htmlFor={name} className="text-base text-muted-foreground">
						{placeholder}
					</Label>
				</div>
			</div>
		</div>
	)
}
