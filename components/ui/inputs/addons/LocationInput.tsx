'use client'

import React, { useEffect, useState, useRef } from 'react'
import { useGooglePlaces } from '../../../../hooks'
import { TextInput, GoogleMap, Icon } from '../../..'
import { TextInputPropsType } from '../../../../types'
import { useDebounce } from 'use-debounce'
import { cn } from '../../../../shadcn/lib/utils'
import { useClickOutside } from '@raddix/use-click-outside'

type LocationInputProps = TextInputPropsType & {
	enablePosition?: boolean
	lat?: number
	lng?: number
	height?: number
	width?: number
	zoom?: number
	darkTheme?: boolean
}

export default function LocationInput({
	name = 'location',
	value = '',
	label,
	placeholder = 'Search location',
	handleChange,
	direction = 'column',
	height = 240,
	width = 320,
	zoom = 15,
	darkTheme = false,
	enablePosition = false,
	lat,
	lng,
}: LocationInputProps) {
	const { placeOptions, fetchPlaces } = useGooglePlaces()

	const [keywords, setKeywords] = useState(value)
	const [debouncedText] = useDebounce(keywords, 150)
	const [open, setOpen] = useState(false)
	const wrapperRef = useRef<HTMLDivElement>(null)

	const handleKeywordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = ev.target
		setKeywords(value)
		if (value.length > 0) setOpen(true)
		else setOpen(false)
	}

	const handleClick = (option: any) => {
		setOpen(false)
		setKeywords(option?.value)
		handleChange({
			target: {
				name: name,
				value: option?.value,
			},
		})
	}

	useEffect(() => {
		if (debouncedText?.length > 0) fetchPlaces(debouncedText)
		else setOpen(false)
	}, [debouncedText])

	useClickOutside(wrapperRef, () => setOpen(false))

	return (
		<div
			className={cn(
				'w-full',
				direction === 'column' ? 'space-y-4' : 'space-x-4 flex'
			)}
		>
			{enablePosition && lat && lng && (
				<div className="overflow-hidden" style={{ height, width }}>
					<GoogleMap
						enableBorder
						darkTheme={darkTheme}
						height={height}
						width={width}
						zoom={zoom}
						resources={[{ lat, lng }]}
					/>
				</div>
			)}
			<div className="flex-grow relative" ref={wrapperRef}>
				<TextInput
					name={name}
					label={label}
					value={keywords}
					handleChange={handleKeywordChange}
					direction={direction}
					placeholder={placeholder}
				/>
				{open && (
					<div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
						{placeOptions.length > 0 ? (
							<ul className="max-h-[300px] overflow-auto">
								{placeOptions.map((option, index) => (
									<li
										key={index}
										className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
										onClick={() => handleClick(option)}
									>
										<Icon name="map-pin" className="mr-2 h-4 w-4" />
										<span>{option.value}</span>
									</li>
								))}
							</ul>
						) : (
							<p className="p-4 text-sm text-gray-500">No results found</p>
						)}
					</div>
				)}
			</div>
		</div>
	)
}
