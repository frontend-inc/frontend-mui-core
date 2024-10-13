'use client'

import React from 'react'
import { Input } from '../../shadcn/ui/input'
import { Label } from '../../shadcn/ui/label'
import { cn } from '../../shadcn/lib/utils'

interface TextFieldProps
	extends Omit<
		React.InputHTMLAttributes<HTMLInputElement>,
		'value' | 'onChange' | 'type'
	> {
	label?: string
	helperText?: string
	error?: boolean
	fullWidth?: boolean
	name: string
	value: string
	placeholder?: string
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	type?:
		| 'text'
		| 'number'
		| 'email'
		| 'password'
		| 'tel'
		| 'url'
		| 'search'
		| 'date'
		| 'time'
		| 'datetime-local'
}

function TextField({
	label,
	helperText,
	error = false,
	fullWidth = false,
	className,
	id,
	name,
	value,
	handleChange,
	placeholder,
	type = 'text',
	...props
}: TextFieldProps) {
	const inputId = id || name || label?.toLowerCase().replace(/\s+/g, '-')

	return (
		<div className={cn('flex flex-col space-y-2', fullWidth && 'w-full')}>
			{label && (
				<Label
					htmlFor={inputId}
					className={cn(
						'text-sm font-medium',
						error ? 'text-destructive' : 'text-foreground'
					)}
				>
					{label}
				</Label>
			)}
			<Input
				id={inputId}
				name={name}
				value={value}
				onChange={handleChange}
				type={type}
				placeholder={placeholder}
				className={cn(
					'text-foreground',
					'transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
					error && 'border-destructive focus:ring-destructive',
					fullWidth && 'w-full',
					className
				)}
			/>
			{helperText && (
				<p
					className={cn(
						'text-sm',
						error ? 'text-destructive' : 'text-muted-foreground'
					)}
				>
					{helperText}
				</p>
			)}
		</div>
	)
}

export { TextField }
