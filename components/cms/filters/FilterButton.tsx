import React, { useState } from 'react'
import { Icon, Drawer, IconLoading } from '../..'
import FilterList from './FilterList'
import { Hidden } from '../../../tailwind'
import { FilterOptionType, SearchFilterOptionType } from '../../..'
import { Button } from '../../../shadcn/ui/button'
import { Badge } from '../../../shadcn/ui/badge'
import { Popover, PopoverContent, PopoverTrigger } from '../../../shadcn/ui/popover'

export type FilterButtonProps = {
	filters?: FilterOptionType[]
	loading?: boolean
	filterOptions?: SearchFilterOptionType[]
	disableFilterCount?: boolean
	handleFilter: (filter: FilterOptionType) => void
	handleClear: () => void
}

const FilterButton: React.FC<FilterButtonProps> = (props) => {
	const {
		loading = false,
		filters = [],
		filterOptions = [],
		handleFilter,
		disableFilterCount = false,
	} = props || {}

	const [open, setOpen] = useState(false)

	return (
		<div className="w-full sm:w-auto">
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant="secondary"
						className={`relative w-full sm:w-auto ${
							filters?.length > 0 ? 'border-r-0' : ''
						}`}
					>
						{loading ? (
							<IconLoading className="mr-2" />
						) : (
							<Icon
								name="SlidersHorizontal"
								className="mr-2 text-secondary-foreground"
							/>
						)}
						Filters
						{!disableFilterCount && filters?.length > 0 && (
							<Badge className="absolute -top-1 -right-1" color="primary">
								{filters.length}
							</Badge>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-80 p-0">
					<FilterList
						filters={filters}
						filterOptions={filterOptions}
						handleFilter={handleFilter}
					/>
				</PopoverContent>
			</Popover>
			<Hidden smUp>
				<Drawer
					open={open}
					handleClose={() => setOpen(false)}
					title="Search"
					disablePadding
				>
					<FilterList
						filters={filters}
						filterOptions={filterOptions}
						handleFilter={handleFilter}
					/>
				</Drawer>
			</Hidden>
		</div>
	)
}

export default FilterButton
