'use client'

import React from 'react'
import { Button } from '../../../tailwind'
import { cn } from '../../../shadcn/lib/utils'
import {
	Icon,
	FilterButton,
	SortButton,
	SearchInput,
	GeoSearchInput,
} from '../..'
import { SortOptionType, SearchFilterOptionType } from '../../../types'
import { useSearch, useCollectionForms } from '../../../hooks'

export type CollectionHeaderProps = {
	query: any
	url: string
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	enableGeoSearch?: boolean
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	enableCreate?: boolean
	buttonText?: string
	handleAdd?: () => void
}

const CollectionHeader: React.FC<CollectionHeaderProps> = (props) => {
	const {
		url,
		query: defaultQuery = {},
		filterOptions = [],
		sortOptions = [],
		enableCreate = false,
		enableSearch = false,
		enableGeoSearch = false,
		enableFilters = false,
		enableSorting = false,
		buttonText = 'Add',
	} = props

	const {
		query,
		keywords,
		handleKeywordChange,
		location,
		handleLocationChange,
		handleSearch,
		handleSortBy,
		handleSortDirection,
		activeFilters,
		handleFilter,
		handleClearFilters,
	} = useSearch({
		url,
		query: defaultQuery,
	})

	const { handleAdd } = useCollectionForms()

	if (!enableSearch && !enableFilters && !enableSorting && !enableCreate) {
		return null
	}

	return (
		<div className="flex flex-col space-y-1 mb-1">
			<div className="flex flex-col sm:flex-row justify-between space-y-1 sm:space-y-0 sm:space-x-1">
				<div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-1">
					{enableSearch && !enableGeoSearch && (
						<SearchInput
							value={keywords}
							handleChange={handleKeywordChange}
							handleSearch={handleSearch}
						/>
					)}
					{enableGeoSearch && !enableSearch && (
						<GeoSearchInput
							value={keywords}
							location={location}
							handleChange={handleKeywordChange}
							handleLocationChange={handleLocationChange}
							handleSearch={handleSearch}
						/>
					)}
					{enableFilters && (
						<div className="w-full sm:w-auto">
							<FilterButton
								filterOptions={filterOptions}
								filters={activeFilters}
								handleFilter={handleFilter}
								handleClear={handleClearFilters}
							/>
						</div>
					)}
					{enableSorting && (
						<div className="w-full sm:w-auto">
							<SortButton
								sortOptions={sortOptions}
								sortBy={query?.sort_by || 'id'}
								sortDirection={query?.sort_direction || 'desc'}
								handleSortBy={handleSortBy}
								handleSortDirection={handleSortDirection}
							/>
						</div>
					)}
				</div>
				{enableCreate && (
					<div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-1">
						<Button
							className={cn(
								'w-full sm:w-auto',
								'bg-primary text-primary-foreground hover:bg-primary/90'
							)}
							onClick={handleAdd}
						>
							<Icon name="Plus" className="mr-2 h-4 w-4" />
							{buttonText}
						</Button>
					</div>
				)}
			</div>
		</div>
	)
}

export default CollectionHeader
