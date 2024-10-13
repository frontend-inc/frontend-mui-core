'use client'

import React from 'react'
import TableFilterInput from './TableFilterInput'
import { SyntheticEventType } from '../../../../types'

type FilterInputProps = {
	filters: any[]
	fieldOptions: any[]
	handleChange: (e: SyntheticEventType, index: number) => void
	handleRemove: (index: number) => void
}

const FilterInputs: React.FC<FilterInputProps> = (props) => {
	const { filters, fieldOptions, handleChange, handleRemove } = props

	return (
		<div>
			{Array.isArray(filters) &&
				filters?.map((filter, index) => (
					<TableFilterInput
						key={index}
						index={index}
						filter={filter}
						fieldOptions={fieldOptions}
						handleChange={handleChange}
						handleRemove={handleRemove}
					/>
				))}
		</div>
	)
}

export default FilterInputs
