'use client'

import React, { useEffect, useState } from 'react'
import { Textarea } from '../../../shadcn/ui/textarea'
import { InputLabel, ErrorText } from '../../../components'
import { InputPropsType } from '../../../types'
import { cn } from '../../../shadcn/lib/utils'

type JSONInputProps = InputPropsType

export default function JSONInput({
	errors,
	value,
	name,
	label,
	info,
	placeholder,
	handleChange,
}: JSONInputProps) {
	const defaultValue = value ? JSON.stringify(value, null, 2) : '{}'
	const [jsonValue, setJsonValue] = useState(defaultValue)
	const [jsonError, setJsonError] = useState<string | null>(null)

	useEffect(() => {
		setJsonValue(value ? JSON.stringify(value, null, 2) : '{}')
	}, [value])

	const isValidJSON = (str: string) => {
		try {
			JSON.parse(str)
			return true
		} catch (e) {
			return false
		}
	}

	const handleJSONChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = e.target.value
		setJsonValue(newValue)

		if (isValidJSON(newValue)) {
			setJsonError(null)
			handleChange({
				target: {
					name,
					value: JSON.parse(newValue),
				},
			})
		} else {
			setJsonError('Invalid JSON')
		}
	}

	const allErrors = { ...errors, ...(jsonError ? { [name]: jsonError } : {}) }
	const hasError = Object.keys(allErrors).length > 0

	return (
		<div className="w-full">
			<InputLabel label={label} info={info} />
			<Textarea
				className={cn(
					'font-mono',
					hasError && 'border-red-500 focus-visible:ring-red-500'
				)}
				value={jsonValue}
				placeholder={placeholder}
				onChange={handleJSONChange}
				name={name}
				rows={6}
			/>
			{hasError && <ErrorText error={allErrors[name]} />}
		</div>
	)
}
