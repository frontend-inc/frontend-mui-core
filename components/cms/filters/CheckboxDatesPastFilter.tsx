'use client'

import React from 'react'
import CheckboxFilterItem from './CheckboxFilterItem'
import { FilterOptionType } from '../../../types'
import { MenuList } from '../..'

type CheckboxDatesPastFilterProps = {
	field: string
	handleClick: (filter: FilterOptionType) => void
	label: string
	values?: string[]
	disablePadding?: boolean
}

const CheckboxDatesPastFilter: React.FC<CheckboxDatesPastFilterProps> = (
	props
) => {
	const { label, field, values, handleClick, disablePadding = false } = props

	let OPTIONS = [
		{ label: 'Today', value: 'current_time' },
		{ label: '1 day ago', value: '1_day_ago' },
		{ label: '7 days ago', value: '7_days_ago' },
		{ label: '30 days ago', value: '30_days_ago' },
		{ label: '90 days ago', value: '90_days_ago' },
		{ label: 'Current Year', value: 'current_year' },
	]

	return (
		<MenuList label={label}>
			{OPTIONS?.map((option, index) => (
				<CheckboxFilterItem
					key={index}
					values={values}
					option={option}
					handleClick={() =>
						handleClick({
							field,
							where: 'AND',
							operator: 'gt',
							value: option.value,
						})
					}
				/>
			))}
		</MenuList>
	)
}

export default CheckboxDatesPastFilter
