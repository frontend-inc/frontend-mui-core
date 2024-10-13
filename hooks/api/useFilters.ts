import { is } from 'immutable'
'use client'

import React, { useEffect, useState } from 'react'
import { mergeFilters, mergeAllFilters, formatFilterArray } from '../../helpers'

type UseFiltersProps = {
	query?: any
}

const useFilters = (props: UseFiltersProps) => {
	const { query } = props || {}

	const [showFilterModal, setShowFilterModal] = useState(false)

	const [filter, setFilter] = useState()
	const [queryFilters, setQueryFilters] = useState({})
	const [activeFilters, setActiveFilters] = useState([])

	const handleOpenFilterModal = () => {
		setShowFilterModal(true)
	}

	const handleCloseFilterModal = () => {
		setShowFilterModal(false)
	}

	const findFilter = (fieldName, filters) => {
		let foundFilter = filters.find((f) => f.field == fieldName)
		setFilter(foundFilter)
		return foundFilter
	}

	const compareValues = (a, b) => {
		if (Array.isArray(a) && Array.isArray(b)) {
			return a.sort().join(',') === b.sort().join(',')
		}
		return a === b
	}

	const findDuplicateFilterIndex = (filters, filter) => {
		return filters.findIndex(
			(f) =>
				f.field === filter.field &&
				f.operator === filter.operator &&
				f.where === filter.where &&
				compareValues(f.value, filter.value)
		)
	}

	const findDuplicateFilter = (filters, filter) => {
		return filters.find(
			(f) =>
				f.field === filter.field &&
				f.operator === filter.operator &&
				f.where === filter.where &&
				compareValues(f.value, filter.value)
		)
	}

	const handleAddFilter = (filter) => {
		let updatedFilters = [...activeFilters]
		let duplicateIndex = findDuplicateFilterIndex(activeFilters, filter)
		if (duplicateIndex > -1) {
			updatedFilters = updatedFilters?.filter(
				(f, index) => index !== duplicateIndex
			)
		} else {
			//@ts-ignore
			updatedFilters = [...updatedFilters, filter]
		}
		setActiveFilters(updatedFilters)
		return updatedFilters
	}

	const isBlank = (value) => {
		return (
			value === '' ||
			value == undefined ||
			value == null ||
			(Array.isArray(value) && value.length === 0)
		)
	}

	const buildQueryFilters = (activeFilters) => {
		let filters = {}
		activeFilters
			.filter((filter) => !isBlank(filter?.value))
			.forEach((filter) => {
				let { where, field, operator, value } = filter
				if (!filters[where]) {
					filters[where] = []
				}
				filters = {
					...filters,
					[where]: [
						...filters[where],
						{
							[field]: {
								[operator]: value,
							},
						},
					],
				}
			})

		return filters
	}

	useEffect(() => {
		setQueryFilters(buildQueryFilters(activeFilters))
	}, [activeFilters])

	useEffect(() => {
		if (query?.filters?.length >= 0) {
			let filterArray = formatFilterArray(query?.filters)
			setActiveFilters(filterArray)
		}
	}, [query?.filters?.length])

	return {
		filter,
		findFilter,
		showFilterModal,
		setShowFilterModal,
		handleOpenFilterModal,
		handleCloseFilterModal,
		handleAddFilter,
		queryFilters,
		activeFilters,
		setActiveFilters,
		findDuplicateFilter,
		findDuplicateFilterIndex,
		mergeFilters,
		mergeAllFilters,
		buildQueryFilters,
	}
}

export default useFilters
