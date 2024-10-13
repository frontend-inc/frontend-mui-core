'use client'

import React from 'react'
import { Textarea } from '../../shadcn/ui/textarea'
import { Label } from '../../shadcn/ui/label'
import { cn } from '../../shadcn/lib/utils'

interface TextAreaProps
	extends Omit<
		React.TextareaHTMLAttributes<HTMLTextAreaElement>,
		'value' | 'onChange'
	> {
	label?: string
	helperText?: string
	error?: boolean
	fullWidth?: boolean
	name: string
	value: string
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

function TextArea({
	label,
	helperText,
	error = false,
	fullWidth = false,
	className,
	id,
	name,
	value,
	onChange,
	...props
}: TextAreaProps) {
	const textareaId = id || name || label?.toLowerCase().replace(/\s+/g, '-')

	return (
		<div className={cn('flex flex-col space-y-2', fullWidth && 'w-full')}>
			{label && (
				<Label
					htmlFor={textareaId}
					className={cn(
						'text-sm font-medium',
						error ? 'text-destructive' : 'text-foreground'
					)}
				>
					{label}
				</Label>
			)}
			<Textarea
				id={textareaId}
				name={name}
				value={value}
				onChange={onChange}
				className={cn(
					'transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
					error && 'border-destructive focus:ring-destructive',
					fullWidth && 'w-full',
					className
				)}
				{...props}
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

export { TextArea }
