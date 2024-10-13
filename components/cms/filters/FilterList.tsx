'use client'

import React from 'react'
import FilterListInput from './FilterListInput'

type FilterListProps = {
	filters: any
	filterOptions: any
	handleFilter: any
}

const FilterList: React.FC<FilterListProps> = (props) => {
	const { filters = [], filterOptions = [], handleFilter } = props || {}

	return (
		<div className="flex flex-col">
			{filterOptions?.map((filterOption, index) => (
				<FilterListInput
					key={index}
					filters={filters}
					filterOption={filterOption}
					handleFilter={handleFilter}
				/>
			))}
		</div>
	)
}

export default FilterList
