'use client'

import React from 'react'
import { PriceOptionType, SearchFilterType } from 'frontend-shopify'
import { formatCurrency } from 'frontend-shopify'
import { RadioGroup, RadioGroupItem } from '../../../shadcn/ui/radio-group'
import { Label } from '../../../shadcn/ui/label'

type RadioPriceRangeOptionProps = {
	priceOption: PriceOptionType
	values: PriceOptionType[]
	handleClick: (filter: PriceOptionType) => void
}

const RadioPriceRangeOption: React.FC<RadioPriceRangeOptionProps> = (props) => {
	const { priceOption, values, handleClick } = props
	return (
		<div className="flex items-center space-x-2">
			<RadioGroupItem
				value={`${priceOption.min}-${priceOption.max}`}
				id={`${priceOption.min}-${priceOption.max}`}
				checked={values?.includes(priceOption)}
				onClick={() => handleClick(priceOption)}
			/>
			<Label
				htmlFor={`${priceOption.min}-${priceOption.max}`}
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				{formatCurrency(priceOption.min, 0)} -{' '}
				{formatCurrency(priceOption.max, 0)}
			</Label>
		</div>
	)
}

type RadioPriceRangeInputProps = {
	filters: SearchFilterType[]
	options: PriceOptionType[]
	handleClick: (filter: SearchFilterType) => void
}

const RadioPriceRangeInput: React.FC<RadioPriceRangeInputProps> = (props) => {
	const { filters = [], options, handleClick } = props
	let values = filters.map((f) => f.value)

	const handleFilterClick = (value: PriceOptionType) => {
		handleClick({
			name: 'price',
			value: value,
		})
	}

	if (options?.length == 0) return null
	return (
		<RadioGroup className="space-y-1">
			{options?.map((priceOption, index) => (
				<RadioPriceRangeOption
					key={index}
					values={values as PriceOptionType[]}
					priceOption={priceOption}
					handleClick={handleFilterClick}
				/>
			))}
		</RadioGroup>
	)
}

export default RadioPriceRangeInput
