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
				className="flex items-center w-full px-0 py-2 hover:bg-accent hover:text-accent-foreground"
				onClick={handleClick}
			>
				<div className="mr-1">
					<Checkbox
						checked={values.includes(option.value)}
						onCheckedChange={handleClick}
					/>
				</div>
				<Typography color="text.primary" variant="button">
					{option?.label}
				</Typography>
			</button>
		</li>
	)
}

export default CheckboxFilterItem
