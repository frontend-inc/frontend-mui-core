'use client'

import React, { useState } from 'react'
import CheckboxFilterItem from './CheckboxFilterItem'
import {
	FilterOperatorType,
	FilterWhereType,
	FilterOptionType,
	OptionType,
} from '../../../types'
import { MenuList } from '../..'

type CheckboxFilterProps = {
	field: string
	where?: FilterWhereType
	operator?: FilterOperatorType
	options?: OptionType[]
	values?: any
	handleClick: (filter: FilterOptionType) => void
	label: string
	icon?: React.ReactNode
	disablePadding?: boolean
	defaultClosed?: boolean
}

const CheckboxFilter: React.FC<CheckboxFilterProps> = (props) => {
	const {
		label,
		field,
		where = 'AND',
		operator = 'eq',
		options,
		values,
		handleClick,
	} = props

	return (
		<MenuList label={label}>
			{options?.map((option, index) => (
				<CheckboxFilterItem
					key={index}
					values={values}
					option={option}
					handleClick={() =>
						handleClick({
							where,
							operator,
							field,
							value: option.value,
						})
					}
				/>
			))}
		</MenuList>
	)
}

export default CheckboxFilter
