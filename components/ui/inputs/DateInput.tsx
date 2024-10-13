import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Calendar } from '../../../shadcn/ui/calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '../../../shadcn/ui/popover'
import { Button } from '../../../shadcn/ui/button'
import { cn } from '../../../shadcn/lib/utils'
import { CalendarIcon } from 'lucide-react'
import { InputLabel } from '../../../components'
import { SyntheticEventType } from '../../../types'

type DateInputProps = {
	errors?: any
	direction?: 'row' | 'column'
	required?: boolean
	label?: string
	name: string
	value?: string | Date
	placeholder?: string
	info?: string
	handleChange: (ev: SyntheticEventType) => void
}

export default function DateInput({
	errors,
	direction = 'column',
	required,
	label,
	info,
	name,
	value,
	handleChange,
	placeholder,
}: DateInputProps) {
	const [date, setDate] = useState<Date | undefined>(undefined)
	const [error, setError] = useState(false)

	useEffect(() => {
		if (value) {
			const parsedDate = moment(value)
			if (parsedDate.isValid()) {
				setDate(parsedDate.toDate())
			} else {
				setDate(undefined)
				console.error('Invalid date provided:', value)
			}
		} else {
			setDate(undefined)
		}
	}, [value])

	const handleDateSelect = (selectedDate: Date | undefined) => {
		setDate(selectedDate)
		handleChange({
			target: {
				name,
				value: selectedDate,
			},
		})
	}

	return (
		<div
			className={cn(
				'flex',
				direction === 'column'
					? 'flex-col space-y-2'
					: 'flex-row items-center space-x-2'
			)}
		>
			<InputLabel label={label} info={info} />
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						className={cn(
							'min-w-[200px] text-foreground w-full justify-start text-left font-normal',
							!date && 'text-muted-foreground',
							error && 'border-red-500'
						)}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{date ? (
							moment(date).format('MMMM D, YYYY')
						) : (
							<span>{placeholder || 'Pick a date'}</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0">
					<Calendar
						mode="single"
						selected={date}
						onSelect={handleDateSelect}
						initialFocus
					/>
				</PopoverContent>
			</Popover>
			{error && <p className="text-sm text-red-500">This field is required</p>}
		</div>
	)
}
