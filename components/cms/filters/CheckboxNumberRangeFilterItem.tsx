'use client'

import React, { useEffect, useState } from 'react'
import { Typography } from '../../../tailwind'
import { Checkbox } from '../../../shadcn/ui/checkbox'

type CheckboxNumberRangeFilterItemProps = {
	label?: string
	option: {
		label: string
		min: number
		max: number
	}
	values?: any[]
	handleClick: () => void
}

const CheckboxNumberRangeFilterItem: React.FC<
	CheckboxNumberRangeFilterItemProps
> = (props) => {
	const { values = [], option, handleClick } = props
	const [checked, setChecked] = useState(false)

	// Compare an array of min / max values to see if they are equal
	// to the option min / max pair
	const compareValues = (values: any[], option: number[]) => {
		let isEqual = false
		values.forEach((value) => {
			if (value.sort().join(',') === option.sort().join(',')) {
				isEqual = true
			}
		})
		return isEqual
	}

	useEffect(() => {
		if (!option) return
		if (compareValues(values, [option.min, option.max])) {
			setChecked(true)
		} else {
			setChecked(false)
		}
	}, [values, option])

	return (
		<li className="list-none">
			<button
				className="flex items-center w-full px-0 py-2 hover:bg-accent hover:text-accent-foreground"
				onClick={handleClick}
			>
				<div className="mr-2">
					<Checkbox checked={checked} onCheckedChange={handleClick} />
				</div>
				<Typography color="text.primary" variant="button">
					{option.label}
				</Typography>
			</button>
		</li>
	)
}

export default CheckboxNumberRangeFilterItem
