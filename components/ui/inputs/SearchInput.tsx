'use client'

import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { SyntheticEventType } from '../../../types'
import { Search } from 'lucide-react'
import { cn } from '../../../shadcn/lib/utils'
import { Input } from '../../../shadcn/ui/input'
import { Button } from '../../../shadcn/ui/button'
import { IconButton } from '../../../tailwind'
import { Separator } from '../../../shadcn/ui/separator'

type SearchInputProps = {
	name?: string
	label?: string
	value: string
	placeholder?: string
	fullWidth?: boolean
	handleChange: (e: SyntheticEventType) => void
	handleSearch: (keywords: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({
	name = 'keywords',
	fullWidth = false,
	value,
	placeholder = 'Search...',
	handleChange,
	handleSearch,
}) => {
	const [text, setText] = useState(value)
	const [debouncedValue] = useDebounce(text, 500)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value)
	}

	useEffect(() => {
		if (debouncedValue !== value) {
			handleChange({
				target: {
					name,
					value: debouncedValue,
				},
			} as SyntheticEventType)
		}
	}, [debouncedValue, handleChange, name, value])

	useEffect(() => {
		if (value !== text) {
			setText(value)
		}
	}, [value])

	return (
		<div className="max-w-[400px] w-full">
			<form
				onSubmit={(e) => {
					e.preventDefault()
					handleSearch(text)
				}}
				className={cn(
					'flex items-center w-full border border-input rounded-md transition-shadow hover:shadow-md',
					fullWidth ? 'w-full' : 'max-w-[400px] min-w-[320px] sm:min-w-full'
				)}
			>
				<Input
					type="text"
					placeholder={placeholder}
					value={text}
					onChange={handleInputChange}
					className="text-foreground flex-grow border-none focus-visible:ring-0 focus-visible:ring-offset-0"
				/>
				<div className="h-7 border-l border-input" />
				<IconButton className="m-1" onClick={() => handleSearch(text)}>
					<Search className="h-5 w-5 text-foreground" />
					<span className="sr-only">Search</span>
				</IconButton>
			</form>
		</div>
	)
}

export default SearchInput
