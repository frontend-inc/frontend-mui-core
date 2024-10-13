'use client'

import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { SyntheticEventType } from '../../../types'
import { Icon } from '../..'
import { useGooglePlaces } from '../../../hooks'
import { Input } from '../../../shadcn/ui/input'
import { Button } from '../../../shadcn/ui/button'
import { cn } from '../../../shadcn/lib/utils'

type GeoSearchInputProps = {
	name?: string
	label?: string
	value: string
	handleChange: (e: SyntheticEventType) => void
	location: string
	handleLocationChange: (e: SyntheticEventType) => void
	placeholder?: string
	fullWidth?: boolean
	handleSearch: (keywords: string, location: string) => void
	className?: string
}

export default function GeoSearchInput({
	name = 'keywords',
	fullWidth = false,
	value,
	location = '',
	placeholder = 'Search...',
	handleChange,
	handleLocationChange,
	handleSearch,
	className,
}: GeoSearchInputProps) {
	const { loading, placeOptions, fetchPlaces } = useGooglePlaces()

	const [open, setOpen] = useState(false)
	const [text, setText] = useState(value)
	const [debouncedText] = useDebounce(text, 500)
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value)
	}

	const [locationText, setLocationText] = useState(location)
	const [debouncedLocationText] = useDebounce(locationText, 150)
	const handleLocationInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		let value = e.target.value
		setLocationText(value)
		if (value.length == 0) {
			setOpen(false)
			return
		}
		if (placeOptions?.length > 0) {
			setOpen(true)
		}
	}

	const handleClick = (option: any) => {
		setOpen(false)
		setLocationText(option?.value)
	}

	useEffect(() => {
		if (debouncedText !== value) {
			handleChange({
				target: {
					name,
					value: debouncedText,
				},
			})
		}
	}, [debouncedText])

	useEffect(() => {
		if (debouncedLocationText !== location) {
			fetchPlaces(debouncedLocationText)
			handleLocationChange({
				target: {
					name,
					value: debouncedLocationText,
				},
			})
		}
	}, [debouncedLocationText])

	useEffect(() => {
		if (value !== text) {
			setText(value)
		}
	}, [value])

	return (
		<div
			className={cn(
				'flex items-center border border-input rounded-md overflow-hidden transition-shadow hover:shadow-md',
				fullWidth ? 'w-full' : 'max-w-md min-w-[320px]',
				className
			)}
		>
			<Input
				className="flex-1 border-none focus:ring-0 focus:ring-offset-0"
				placeholder={placeholder}
				value={text}
				onChange={handleInputChange}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						e.preventDefault()
						handleSearch(text, locationText)
					}
				}}
			/>
			<div className="w-px h-7 bg-input mx-2" />
			<Input
				className="flex-1 border-none focus:ring-0 focus:ring-offset-0"
				placeholder="Location..."
				value={locationText}
				onChange={handleLocationInputChange}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						e.preventDefault()
						handleSearch(text, locationText)
					}
				}}
			/>
			<Button
				onClick={() => handleSearch(text, locationText)}
				type="button"
				variant="ghost"
				size="icon"
				className="mr-1"
			>
				<Icon name="Search" className="h-4 w-4 text-muted-foreground" />
			</Button>
		</div>
	)
}
