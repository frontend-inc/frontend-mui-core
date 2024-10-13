'use client'

import React, { useState, useRef } from 'react'
import { TextInput, Icon } from '../..'
import { TextInputPropsType } from '../../../types'
import { Avatar, AvatarFallback, AvatarImage } from '../../../shadcn/ui/avatar'
import { useClickOutside } from '@raddix/use-click-outside'

type AutocompleteInput = TextInputPropsType & {
	handleInputChange: (keywords: string) => void
}

export default function AutocompleteInput({
	name = 'title',
	value = '',
	label,
	placeholder = 'Search',
	handleChange,
	handleInputChange,
	options = [],
	direction = 'column',
	info,
}: AutocompleteInput) {
	const [open, setOpen] = useState(false)
	const wrapperRef = useRef<HTMLDivElement>(null)

	const handleClick = (option: any) => {
		setOpen(false)
		handleChange({
			target: {
				name: name,
				value: option?.value,
			},
		})
	}

	const handleKeywordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		let { value } = ev.target
		handleInputChange(value)
		if (options?.length > 0) setOpen(true)
		if (value == '') {
			setOpen(false)
		}
	}

	useClickOutside(wrapperRef, () => setOpen(false))

	return (
		<div className="w-full relative" ref={wrapperRef}>
			<TextInput
				name={name}
				label={label}
				value={value}
				options={options}
				handleChange={handleKeywordChange}
				direction={direction}
				placeholder={placeholder}
				info={info}
			/>
			{open && options.length > 0 && (
				<div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
					{options.map((option, index) => (
						<div
							key={index}
							onClick={() => handleClick(option)}
							className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
						>
							<div className="mr-2 flex-shrink-0">
								{option?.image && (
									<Avatar className="h-8 w-8">
										<AvatarImage src={option.image} alt={option.label} />
										<AvatarFallback>{option.label[0]}</AvatarFallback>
									</Avatar>
								)}
								{option?.icon && (
									<Icon name={option.icon} className="h-5 w-5" />
								)}
							</div>
							<span className="flex-grow text-sm">{option.label}</span>
						</div>
					))}
				</div>
			)}
		</div>
	)
}
