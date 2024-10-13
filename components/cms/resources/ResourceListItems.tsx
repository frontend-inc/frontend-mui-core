'use client'

import React from 'react'
import { LoadMore } from '../..'
import {
	TableHeaderType,
	SortOptionType,
	QueryParamsType,
} from '../../../types'

export type ResourceListItemsProps = {
	grid?: boolean
	query?: QueryParamsType
	resources: any[]
	headers?: TableHeaderType[]
	page: number
	numPages: number
	totalCount?: number
	enableBorder?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	handleClick?: (resource: any) => void
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	handleDrop?: (sorted: any[]) => void
	handlePaginate: (page: number) => void
	handleSort?: (field: SortOptionType) => void
	handleReload?: () => void
	renderItem: (resource: any, props: any) => React.ReactNode
}

const ResourceListItems: React.FC<ResourceListItemsProps> = (props) => {
	const {
		page,
		grid = false,
		numPages,
		handlePaginate,
		resources,
		renderItem,
	} = props || {}

	return (
		<div className="w-full flex flex-col space-y-3">
			{!grid ? (
				<ul className="flex flex-col space-y-2">
					{resources?.map((resource) => renderItem(resource, props))}
				</ul>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{resources?.map((resource) => renderItem(resource, props))}
				</div>
			)}
			<LoadMore
				page={page}
				numPages={numPages}
				handlePaginate={() => handlePaginate(page + 1)}
			/>
		</div>
	)
}

export default ResourceListItems
