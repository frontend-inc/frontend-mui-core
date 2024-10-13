'use client'

import React from 'react'
import { Checkbox } from '../../../shadcn/ui/checkbox'
import { Label } from '../../../shadcn/ui/label'
import { SearchFilterOptionType, SearchFilterType } from 'frontend-shopify'

type ShopifyCheckboxFilterListProps = {
	filters: SearchFilterType[]
	option: SearchFilterOptionType
	handleClick: (filter: SearchFilterType) => void
}

const ShopifyCheckboxFilterList: React.FC<ShopifyCheckboxFilterListProps> = (
	props
) => {
	const { filters = [], option, handleClick } = props
	let values = filters.map((f) => f.value)

	const handleFilterClick = (value: string) => {
		handleClick({
			name: option.name,
			value: value,
		})
	}

	if (!option || !(typeof option?.value == 'object')) return null
	return (
		<div className="space-y-2">
			{option?.value?.map((optionValue, index) => (
				<div key={index} className="flex items-center space-x-2">
					<Checkbox
						id={`${option.name}-${index}`}
						checked={values?.includes(optionValue)}
						onCheckedChange={() => handleFilterClick(optionValue)}
					/>
					<Label
						htmlFor={`${option.name}-${index}`}
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						{optionValue}
					</Label>
				</div>
			))}
		</div>
	)
}

export default ShopifyCheckboxFilterList
