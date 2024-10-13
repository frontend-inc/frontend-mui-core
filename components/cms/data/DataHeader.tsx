'use client'

import React from 'react'
import { Button } from '../../../tailwind'
import { Icon, FilterButton, SortButton, SearchInput } from '../..'
import { SortOptionType, SearchFilterOptionType } from '../../../types'
import { useSearch, useCollectionForms } from '../../../hooks'

export type DataHeaderProps = {
	query: any
	url: string
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	enableCreate?: boolean
	handleAdd?: () => void
	component?: React.FC<any>
	buttonText?: string
	secondaryAction?: React.ReactNode
	slots?: {
		search?: any
	}
}

const DataHeader: React.FC<DataHeaderProps> = (props) => {
	const {
		url,
		query: defaultQuery = {},
		filterOptions = [],
		sortOptions = [],
		enableCreate = false,
		enableSearch = false,
		enableFilters = false,
		enableSorting = false,
		buttonText = 'Add',
		secondaryAction,
		component: SearchComponent = SearchInput,
		slots = {
			search: {},
		},
	} = props

	const {
		query,
		keywords,
		handleKeywordChange,
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
					{enableSearch && (
						<SearchComponent
							value={keywords}
							handleChange={handleKeywordChange}
							handleSearch={handleSearch}
							{...slots.search}
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
				{(enableCreate || secondaryAction) && (
					<div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-1">
						<Button
							className="sm:w-auto"
							color="primary"
							variant="contained"
							onClick={handleAdd}
						>
							<Icon name="Plus" className="mr-2 text-primary-foreground" />
							{buttonText}
						</Button>
						{secondaryAction}
					</div>
				)}
			</div>
		</div>
	)
}

export default DataHeader
