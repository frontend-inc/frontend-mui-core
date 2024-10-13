'use client'

import React, { useState } from 'react'
import { Button } from '../../../shadcn/ui/button'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '../../../shadcn/ui/popover'
import { Sheet, SheetContent, SheetTrigger } from '../../../shadcn/ui/sheet'
import SortList from './SortList'
import { COLLECTION_SORT_OPTIONS } from 'frontend-shopify'
import { ProductSortKeyType } from 'frontend-shopify'
import { ArrowUpDown } from 'lucide-react'

type ProductSortButtonProps = {
	sortKey?: ProductSortKeyType
	reverse?: boolean
	handleClick: (sortKey: ProductSortKeyType, reverse: boolean) => void
}

const ProductSortButton: React.FC<ProductSortButtonProps> = (props) => {
	const { sortKey = 'COLLECTION_DEFAULT', reverse, handleClick } = props

	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(!open)

	const handleClose = () => setOpen(false)

	const handleSortClick = (sortKey: ProductSortKeyType, reverse: boolean) => {
		handleClick(sortKey, reverse)
		setOpen(false)
	}

	const currentSortLabel = COLLECTION_SORT_OPTIONS.find(
		(option) => option.value === sortKey
	)?.label

	return (
		<>
			{/* Desktop view */}
			<div className="hidden sm:block">
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="secondary"
							className="w-full sm:w-auto"
							onClick={handleOpen}
						>
							{currentSortLabel}
							<ArrowUpDown className="ml-2 h-4 w-4" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-56">
						<SortList
							enableIcons
							value={sortKey}
							reverse={reverse}
							options={COLLECTION_SORT_OPTIONS}
							handleClick={handleSortClick}
						/>
					</PopoverContent>
				</Popover>
			</div>

			{/* Mobile view */}
			<div className="sm:hidden">
				<Sheet open={open} onOpenChange={setOpen}>
					<SheetTrigger asChild>
						<Button variant="secondary" className="w-full" onClick={handleOpen}>
							{currentSortLabel}
							<ArrowUpDown className="ml-2 h-4 w-4" />
						</Button>
					</SheetTrigger>
					<SheetContent side="right">
						<SortList
							enableIcons
							value={sortKey}
							reverse={reverse}
							options={COLLECTION_SORT_OPTIONS}
							handleClick={handleSortClick}
						/>
					</SheetContent>
				</Sheet>
			</div>
		</>
	)
}

export default ProductSortButton
