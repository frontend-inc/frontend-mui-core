'use client'

import React from 'react'
import { Button } from '../../../shadcn/ui/button'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '../../../shadcn/ui/popover'
import { Sheet, SheetContent, SheetTrigger } from '../../../shadcn/ui/sheet'
import { useMenu } from '../../../hooks'
import { ListFilter } from 'lucide-react'
import ProductFiltersList from './ShopifyProductFiltersList'
import {
	SearchFilterType,
	SearchFilterOptionType,
	PriceOptionType,
} from 'frontend-shopify'

type ShopifyProductFilterButtonProps = {
	filters: SearchFilterType[]
	options: SearchFilterOptionType[]
	priceOptions: PriceOptionType[]
	handleFilter: (filter: SearchFilterType) => void
	handleFilterArray: (filter: SearchFilterType) => void
}

const ShopifyProductFilterButton: React.FC<ShopifyProductFilterButtonProps> = (
	props
) => {
	const { open, toggleMenu, closeMenu } = useMenu()

	const {
		filters = [],
		options = [],
		priceOptions = [],
		handleFilter,
		handleFilterArray,
	} = props

	return (
		<>
			{/* Desktop view */}
			<div className="hidden sm:block">
				<Popover open={open} onOpenChange={toggleMenu}>
					<PopoverTrigger asChild>
						<Button
							variant="default"
							className="w-full sm:w-auto"
							onClick={toggleMenu}
						>
							<ListFilter className="mr-2 h-4 w-4" />
							Filter
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-80">
						<ProductFiltersList
							filters={filters}
							options={options}
							priceOptions={priceOptions}
							handleFilter={handleFilter}
							handleFilterArray={handleFilterArray}
						/>
					</PopoverContent>
				</Popover>
			</div>

			{/* Mobile view */}
			<div className="sm:hidden">
				<Sheet open={open} onOpenChange={toggleMenu}>
					<SheetTrigger asChild>
						<Button variant="default" className="w-full" onClick={toggleMenu}>
							<ListFilter className="mr-2 h-4 w-4" />
							Filter
						</Button>
					</SheetTrigger>
					<SheetContent>
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

export default ShopifyProductFilterButton
