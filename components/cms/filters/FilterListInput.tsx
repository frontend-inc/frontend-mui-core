'use client'

import React from 'react'
import { FilterOptionType, SearchFilterOptionType } from '../../../types'
import CheckboxFilter from './CheckboxFilter'
import CheckboxBooleanFilter from './CheckboxBooleanFilter'
import CheckboxNumberRangeFilter from './CheckboxNumberRangeFilter'
import CheckboxRatingsFilter from './CheckboxRatingsFilter'
import CheckboxDatesPastFilter from './CheckboxDatesPastFilter'
import CheckboxDatesFutureFilter from './CheckboxDatesFutureFilter'

type FilterListInputProps = {
	filters: FilterOptionType[]
	filterOption: SearchFilterOptionType
	handleFilter: (filter: FilterOptionType) => void
}

const FilterListInput: React.FC<FilterListInputProps> = (props) => {
	const { filterOption, filters = [], handleFilter } = props || {}

	const findFilterValues = (fieldName, filters) => {
		let _filters = filters.filter((f) => f.field == fieldName)
		return _filters.map((f) => f.value)
	}

	const Component = {
		boolean: CheckboxBooleanFilter,
		date_range: CheckboxDatesPastFilter,
		date_range_past: CheckboxDatesPastFilter,
		date_range_future: CheckboxDatesFutureFilter,
		multiple_choice: CheckboxFilter,
		number_range: CheckboxNumberRangeFilter,
		ratings_scale: CheckboxRatingsFilter,
	}[filterOption?.variant]

	return (
		<Component
			field={filterOption?.field}
			label={filterOption?.label}
			values={findFilterValues(filterOption?.field, filters)}
			handleClick={handleFilter}
			options={filterOption.options}
		/>
	)
}

export default FilterListInput
