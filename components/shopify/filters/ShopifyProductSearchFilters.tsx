'use client'

import React from 'react'
import { Button } from '../../../shadcn/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../../../shadcn/ui/sheet'
import ProductFiltersList from './ShopifyProductFiltersList'
import {
	SearchFilterType,
	SearchFilterOptionType,
	PriceOptionType,
} from 'frontend-shopify'
import { SlidersHorizontal } from 'lucide-react'
import { useMenu } from '../../../hooks'

type ShopifyProductSearchFiltersProps = {
	filters: SearchFilterType[]
	options?: SearchFilterOptionType[]
	priceOptions?: PriceOptionType[]
	handleFilter: (filter: SearchFilterType) => void
	handleFilterArray: (filter: SearchFilterType) => void
}

const ShopifyProductSearchFilters: React.FC<
	ShopifyProductSearchFiltersProps
> = (props) => {
	const {
		filters = [],
		options = [],
		priceOptions = [],
		handleFilter,
		handleFilterArray,
	} = props

	const { open, toggleMenu } = useMenu()

	return (
		<>
			{/* Desktop view */}
			<div className="hidden sm:block">
				<ProductFiltersList
					filters={filters}
					options={options}
					priceOptions={priceOptions}
					handleFilter={handleFilter}
					handleFilterArray={handleFilterArray}
				/>
			</div>

			{/* Mobile view */}
			<div className="sm:hidden">
				<Sheet open={open} onOpenChange={toggleMenu}>
					<SheetTrigger asChild>
						<Button variant="secondary" className="w-full" onClick={toggleMenu}>
							<SlidersHorizontal className="mr-2 h-4 w-4" />
							Filters
						</Button>
					</SheetTrigger>
					<SheetContent side="right">
						<ProductFiltersList
							filters={filters}
							options={options}
							priceOptions={priceOptions}
							handleFilter={handleFilter}
							handleFilterArray={handleFilterArray}
						/>
					</SheetContent>
				</Sheet>
			</div>
		</>
	)
}

export default ShopifyProductSearchFilters
