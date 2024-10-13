'use client'

import React from 'react'
import { FilterButton, SortButton, GeoSearchInput } from '../..'
import { SortOptionType, SearchFilterOptionType } from '../../../types'
import { useSearch } from '../../../hooks'

export type GeoHeaderProps = {
	query: any
	url: string
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
}

const GeoHeader: React.FC<GeoHeaderProps> = (props) => {
	const {
		url,
		query: defaultQuery = {},
		filterOptions = [],
		sortOptions = [],
		enableSearch = false,
		enableFilters = false,
		enableSorting = false,
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

	if (!enableSearch && !enableFilters && !enableSorting) {
		return null
	}

	return (
		<div className="flex flex-col space-y-4 mb-4">
			<div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
				<div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
					{enableSearch && (
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
			</div>
		</div>
	)
}

export default GeoHeader
