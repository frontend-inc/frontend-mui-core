'use client'

import React from 'react'
import { SelectInput } from '../../..'

type TableFilterSortProps = {
	label: string
	fieldOptions: {
    label: string 
    value: string 
  }[]
	sortBy?: string
	sortDirection?: 'asc' | 'desc'
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SORT_DIRECTIONS = [
	{ label: 'decreasing', value: 'desc' },
	{ label: 'increasing', value: 'asc' },
]

const TableFilterSortInput: React.FC<TableFilterSortProps> = ({
	label,
	sortBy = '',
	sortDirection = '',
	fieldOptions = [],
	handleChange,
}) => {
	return (
		<div className="flex flex-col py-2 px-0">
			{label && (
				<div className="min-w-[100px]">
					<label className="text-sm font-medium text-gray-500">{label}</label>
				</div>
			)}
			<div className="flex flex-row space-x-2">
				<div className=" mr-4">
					<SelectInput
						name="sort_by"
						options={fieldOptions}
						placeholder="Sort field"
						value={sortBy}
						handleChange={handleChange}
					/>
				</div>
				<div className="mr-12">
					<SelectInput
						name="sort_direction"
						options={SORT_DIRECTIONS}
						placeholder="Sort direction"
						value={sortDirection}
						handleChange={handleChange}
					/>
				</div>
			</div>
		</div>
	)
}

export default TableFilterSortInput
