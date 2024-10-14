'use client'

import React from 'react'
import { Typography } from '../../../tailwind'
import { Checkbox } from '../../../shadcn/ui/checkbox'
import { OptionType } from '../../../types'

type CheckboxFilterItemProps = {
	label?: string
	option: {
    label: string
    value: string | number | boolean 
  }
	values?: any[]
	handleClick: () => void
}

const CheckboxFilterItem: React.FC<CheckboxFilterItemProps> = (props) => {
	const { values = [], option, handleClick } = props

	return (
		<li className="list-none">
			<button
				className="flex p-1 items-center w-full"
				onClick={handleClick}
			>
				<div className="mr-1">
					<Checkbox
						checked={values.includes(option.value)}
						onCheckedChange={handleClick}
					/>
				</div>
				<Typography variant="button">
					{option?.label}
				</Typography>
			</button>
		</li>
	)
}

export default CheckboxFilterItem
