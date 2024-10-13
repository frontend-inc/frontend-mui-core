'use client'

import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../../../shadcn/ui/accordion'
import CheckboxGroupInput from './ShopifyCheckboxFilterList'
import {
	SearchFilterType,
	SearchFilterOptionType,
	PriceOptionType,
} from 'frontend-shopify'
import { SHOPIFY_SEARCH_FILTERS } from '../../../constants'
import RadioPriceRangeInput from './RadioPriceRangeInput'

type ShopifyProductFiltersListProps = {
	filters: SearchFilterType[]
	options: SearchFilterOptionType[]
	priceOptions: PriceOptionType[]
	handleFilter: (filter: SearchFilterType) => void
	handleFilterArray: (filter: SearchFilterType) => void
}

const ShopifyProductFiltersList: React.FC<ShopifyProductFiltersListProps> = (
	props
) => {
	const {
		filters = [],
		options = [],
		priceOptions = [],
		handleFilter,
		handleFilterArray,
	} = props

	return (
		<Accordion type="multiple" className="w-full">
			{SHOPIFY_SEARCH_FILTERS.map((filterType, i) => {
				let activeFilters = filters?.filter((f) => f.name == filterType.value)
				let option = options?.find((o) => o.name == filterType.value)
				if (!option) return null
				return (
					<AccordionItem value={filterType.value} key={i}>
						<AccordionTrigger className="text-sm font-medium">
							{filterType.label}
						</AccordionTrigger>
						<AccordionContent>
							<CheckboxGroupInput
								filters={activeFilters}
								option={option}
								handleClick={
									filterType.array ? handleFilterArray : handleFilter
								}
							/>
						</AccordionContent>
					</AccordionItem>
				)
			})}
			{priceOptions?.length > 0 && (
				<AccordionItem value="price">
					<AccordionTrigger className="text-sm font-medium">
						Price
					</AccordionTrigger>
					<AccordionContent>
						<RadioPriceRangeInput
							filters={filters}
							options={priceOptions}
							handleClick={handleFilter}
						/>
					</AccordionContent>
				</AccordionItem>
			)}
		</Accordion>
	)
}

export default ShopifyProductFiltersList
