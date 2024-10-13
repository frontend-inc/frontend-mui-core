'use client'

import React, { useState } from 'react'
import { useError } from '../../../hooks'
import { InputLabel, ErrorText } from '../../../components'
import { X } from 'lucide-react'
import { SyntheticEventType } from '../../../types'
import { cn } from '../../../shadcn/lib/utils'
import { Input } from '../../../shadcn/ui/input'
import { Badge } from '../../../shadcn/ui/badge'

type ArrayInputProps = {
	errors?: any
	value?: string[]
	label?: string
	name: string
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	direction?: 'row' | 'column'
	info?: string
}

export default function ArrayInput({
	errors,
	label,
	name,
	placeholder,
	handleChange,
	direction = 'column',
	info,
	value = [],
}: ArrayInputProps) {
	const { error, clearError } = useError({ errors, name })
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = (newValues: string[]) => {
		if (error) clearError()
		handleChange({
			target: {
				name,
				value: newValues,
			},
		} as SyntheticEventType)
	}

	const addTag = (tag: string) => {
		const trimmedTag = tag.trim()
		if (trimmedTag && !value.includes(trimmedTag)) {
			handleInputChange([...value, trimmedTag])
		}
		setInputValue('')
	}

	const removeTag = (tagToRemove: string) => {
		handleInputChange(value.filter((tag) => tag !== tagToRemove))
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' || e.key === ',') {
			e.preventDefault()
			addTag(inputValue)
		} else if (e.key === 'Backspace' && inputValue === '' && value.length > 0) {
			e.preventDefault()
			const newValues = [...value]
			newValues.pop()
			handleInputChange(newValues)
		}
	}

	return (
		<div
			className={cn(
				'flex w-full space-y-2',
				direction === 'row' ? 'flex-row items-center' : 'flex-col'
			)}
		>
			<InputLabel label={label} info={info} />
			<div className="relative w-full">
				<div
					className={cn(
						'flex flex-wrap gap-2 p-1 border rounded-md min-h-[42px]',
						error && 'border-red-500'
					)}
				>
					{value.map((tag) => (
						<Badge key={tag} variant="secondary" className="text-sm">
							{tag}
							<button
								type="button"
								className="ml-1 hover:bg-secondary rounded-full"
								onClick={() => removeTag(tag)}
							>
								<X className="h-3 w-3" />
							</button>
						</Badge>
					))}
					<Input
						type="text"
						placeholder={placeholder}
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={handleKeyDown}
						onBlur={() => addTag(inputValue)}
						className="text-foreground flex-1 px-0 py-0 text-sm border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
					/>
				</div>
				<ErrorText error={error} />
			</div>
		</div>
	)
}
