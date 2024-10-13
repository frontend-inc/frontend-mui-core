"use client"

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '../../shadcn/lib/utils'
import { Button } from '../../shadcn/ui/button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from '../../shadcn/ui/command'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '../../shadcn/ui/popover'

interface AutocompleteOption {
	label: string
	value: string | number
}

interface AutocompleteProps {
	name: string
	value: string | number
	onChange: (value: string | number) => void
	options: AutocompleteOption[]
	placeholder?: string
	emptyMessage?: string
}

function Autocomplete({
	name,
	value,
	onChange,
	options,
	placeholder = 'Select an option...',
	emptyMessage = 'No results found.',
}: AutocompleteProps) {
	const [open, setOpen] = React.useState(false)

	const selectedOption = options.find((option) => option.value === value)

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-full justify-between"
				>
					{selectedOption ? selectedOption.label : placeholder}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-full p-0">
				<Command>
					<CommandInput placeholder={placeholder} />
					<CommandEmpty>{emptyMessage}</CommandEmpty>
					<CommandGroup>
						{options.map((option) => (
							<CommandItem
								key={option.value}
								onSelect={() => {
									onChange(option.value)
									setOpen(false)
								}}
							>
								<Check
									className={cn(
										'mr-2 h-4 w-4',
										value === option.value ? 'opacity-100' : 'opacity-0'
									)}
								/>
								{option.label}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

export { Autocomplete }
