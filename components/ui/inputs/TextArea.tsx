'use client'

import React, { useEffect, useState } from 'react'
import { Textarea } from '../../../shadcn/ui/textarea'
import { InputLabel, ErrorText } from '../..'
import { useError } from '../../../hooks'
import { TextInputPropsType } from '../../../types'
import { useDebounce } from 'use-debounce'
import { cn } from '../../../shadcn/lib/utils'

type TextAreaProps = Omit<TextInputPropsType, 'type'> & {
	debounceDelay?: number
	disableDebounce?: boolean
	rows?: number
}

export default function TextArea({
	label,
	name,
	value = '',
	handleChange,
	placeholder,
	disabled,
	errors,
	direction = 'column',
	info,
	debounceDelay = 350,
	disableDebounce = false,
	rows = 3,
}: TextAreaProps) {
	const [text, setText] = useState(value)
	const [debouncedText] = useDebounce(text, debounceDelay)

	const { error, clearError } = useError({
		errors,
		name,
	})

	const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		clearError()
		setText(e.target.value)
		if (disableDebounce) {
			handleChange(e)
		}
	}

	useEffect(() => {
		if (debouncedText !== value) {
			handleChange({
				target: {
					name,
					value: debouncedText,
				},
			} as React.ChangeEvent<HTMLTextAreaElement>)
		}
	}, [debouncedText])

	useEffect(() => {
		setText(value)
	}, [value])

	return (
		<div
			className={cn(
				'flex flex-col space-y-2 w-full',
				direction === 'row' && 'sm:flex-row sm:items-start'
			)}
		>
			<InputLabel label={label} info={info} />
			<div className="relative w-full">
				<Textarea
					className={cn(
						'w-full text-foreground resize-none min-w-[230px]',
						error && 'border-red-500'
					)}
					name={name}
					disabled={disabled}
					placeholder={placeholder}
					onChange={handleTextAreaChange}
					value={text}
					rows={rows}
				/>
				<ErrorText error={error} />
			</div>
		</div>
	)
}
