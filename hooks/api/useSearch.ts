'use client'

import React, { useState } from 'react'
import { useResourceContext } from 'frontend-js'
import { useFilters } from '..'
import {
	SortOptionType,
	FilterOptionType,
	SyntheticEventType,
} from '../../types'

const useSearch = (props) => {
	const { query: defaultQuery = {} } = props

	const {
		loading,
		delayedLoading,
		resources,
		query,
		setQuery,
		findMany,
		reloadMany,
		page,
		numPages,
		loadMore,
	} = useResourceContext()

	const [keywords, setKeywords] = useState('')
	const [location, setLocation] = useState('')

	const handleKeywordChange = (ev: SyntheticEventType) => {
		setKeywords(ev.target.value)
	}

	const handleLocationChange = (ev: SyntheticEventType) => {
		setLocation(ev.target.value)
	}

	const handleSearch = (keywords = '', location = '') => {
		let searchQuery = {
			...query,
			...defaultQuery,
			keywords: keywords,
			page: 1,
		}
		if (location?.length > 0) {
			searchQuery = {
				...searchQuery,
				method: 'location',
				location: location,
			}
		} else {
			searchQuery = {
				...searchQuery,
				location: null,
			}
		}
		findMany(searchQuery)
	}

	const handleSortBy = (field: SortOptionType) => {
		findMany({
			...query,
			sort_by: field?.name,
		})
	}

	const handleSortDirection = (sortDirection: 'asc' | 'desc') => {
		findMany({
			...query,
			sort_direction: sortDirection,
		})
	}

	const {
		mergeFilters,
		buildQueryFilters,
		activeFilters,
		setActiveFilters,
		handleAddFilter,
	} = useFilters({
		query,
	})

	// Filter methods
	const handleClearFilters = () => {
		setActiveFilters([])
		findMany({
			...defaultQuery,
			filters: defaultQuery?.filters,
			sort_by: 'id',
			sort_direction: 'desc',
			keywords: '',
			page: 1,
		})
	}

	const handleFilter = (filter: FilterOptionType) => {
		let newFilters = handleAddFilter(filter)
		let queryFilter = buildQueryFilters(newFilters)
		let mergedFilters = mergeFilters(defaultQuery?.filters, queryFilter)
		findMany({
			...defaultQuery,
			...query,
			filters: mergedFilters,
			page: 1,
		})
	}

	return {
		loading,
		delayedLoading,
		resources,
		query,
		findMany,
		reloadMany,
		page,
		numPages,
		loadMore,
		keywords,
		setKeywords,
		handleKeywordChange,
		location,
		setLocation,
		handleLocationChange,
		handleSearch,
		handleSortBy,
		handleSortDirection,
		activeFilters,
		handleFilter,
		handleClearFilters,
	}
}

export default useSearch
