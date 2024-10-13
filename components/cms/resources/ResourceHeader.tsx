'use client'

import React from 'react'
import { Stack, Button } from '../../../tailwind'
import { Icon, SearchInput, FilterButton, SortButton } from '../..'
import {
	SortOptionType,
	SearchFilterOptionType,
	FilterOptionType,
	SyntheticEventType,
} from '../../../types'

export type ResourceHeaderProps = {
	buttonText?: string
	direction?: 'row' | 'column'
	enableSearch: boolean
	enableFilters: boolean
	enableSorting: boolean
	enableCreate?: boolean
	handleSearch: (keywords: string) => void
	handleKeywordChange: (ev: SyntheticEventType) => void
	handleFilter: (filter: FilterOptionType) => void
	handleClearFilters: () => void
	handleSort: (field: any) => void
	handleSortDirection: (sortDirection: 'asc' | 'desc') => void
	handleAdd: () => void
	handleReload?: () => void
	keywords: string
	activeFilters: FilterOptionType[]
	filterOptions: SearchFilterOptionType[]
	sortOptions: SortOptionType[]
	query: any
	secondaryAction?: React.ReactNode
}

const ResourceHeader: React.FC<ResourceHeaderProps> = (props) => {
	const {
		direction = 'row',
		buttonText = 'Add',
		enableSearch,
		enableFilters,
		enableSorting,
		enableCreate,
		handleSearch,
		handleKeywordChange,
		handleFilter,
		handleClearFilters,
		handleSort,
		handleSortDirection,
		handleAdd,
		keywords,
		activeFilters,
		filterOptions,
		sortOptions,
		secondaryAction,
		query = {},
	} = props || {}

	return (
		<Stack
			direction={direction}
			className="w-full align-center justify-between"
			spacing={1}
		>
			<Stack alignItems="center" direction={direction} spacing={1}>
				{enableSearch && (
					<SearchInput
						value={keywords}
						handleChange={handleKeywordChange}
						handleSearch={handleSearch}
					/>
				)}
				{enableFilters && (
					<FilterButton
						filters={activeFilters}
						handleFilter={handleFilter}
						handleClear={handleClearFilters}
						filterOptions={filterOptions}
					/>
				)}
				{enableSorting && (
					<SortButton
						sortBy={query?.sort_by || 'id'}
						sortDirection={query?.sort_direction || 'desc'}
						sortOptions={sortOptions}
						handleSortBy={handleSort}
						handleSortDirection={handleSortDirection}
					/>
				)}
			</Stack>
			<Stack
				direction={direction}
				spacing={1}
				className="w-full justify-center sm:justify-end"
			>
				{secondaryAction}
				{(enableCreate || secondaryAction) && (
					<Button
						className="w-full sm:w-auto"
						onClick={handleAdd}
						startIcon={<Icon name="Plus" className="text-primary-foreground" />}
					>
						{buttonText}
					</Button>
				)}
			</Stack>
		</Stack>
	)
}

export default ResourceHeader
