'use client'

import React from 'react'
import CheckboxFilterItem from './CheckboxFilterItem'
import { FilterOptionType } from '../../../types'
import { MenuList } from '../..'

type CheckboxDatesFutureFilterProps = {
	field: string
	handleClick: (filter: FilterOptionType) => void
	label: string
	values?: string[]
	disablePadding?: boolean
}

const CheckboxDatesFutureFilter: React.FC<CheckboxDatesFutureFilterProps> = (
	props
) => {
	const { label, field, values, handleClick, disablePadding = false } = props

	let OPTIONS = [
		{ label: 'Next day', value: '1_day' },
		{ label: 'Next 7 days ', value: '7_days' },
		{ label: 'Next 30 days', value: '30_days' },
		{ label: 'Next 90 days', value: '90_days' },
		{ label: 'Next Year', value: 'next_year' },
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
							operator: 'lt',
							value: option.value,
						})
					}
				/>
			))}
		</MenuList>
	)
}

export default CheckboxDatesFutureFilter
