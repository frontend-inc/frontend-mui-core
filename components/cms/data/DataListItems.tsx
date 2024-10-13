'use client'

import React from 'react'
import { LoadMore } from '../..'
import { useResourceContext } from 'frontend-js'
import { DataItem, DataLayout } from '../..'
import { useCollectionForms } from '../../../hooks'

export type DataListItemsProps = {
	grid?: boolean
	selectable?: boolean
	href?: string
	enableShow?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	handleClick?: (resource: any) => void
	handleAdd?: (resource: any) => void
	pagination?: React.FC<any>
	component?: React.FC<any>
	slots?: {
		item?: any
		list?: any
	}
}

const DataListItems: React.FC<DataListItemsProps> = (props) => {
	const {
		loading,
		resources,
		page,
		numPages,
		loadMore,
		selectedIds,
		handleSelect,
	} = useResourceContext()

	const {
		grid,
		selectable,
		enableShow,
		enableEdit,
		enableDelete,
		handleClick,
		pagination: Pagination = LoadMore,
		component: Component = DataItem,
		slots = {
			item: {},
			list: {},
		},
	} = props

	const { handleShow, handleEdit, handleDeleteClick } = useCollectionForms()

	const handleShowClick = (resource: any) => {
		if (handleClick) {
			handleClick(resource)
		} else if (enableShow) {
			handleShow(resource)
		}
	}

	const handlePaginate = async () => {
		await loadMore()
	}

	return (
		<DataLayout {...slots.list} grid={grid} loading={loading}>
			{resources?.map((resource, index) => (
				<Component
					key={index}
					selectable={selectable}
					selected={selectedIds?.includes(resource.id)}
					resource={resource}
					handleClick={() => handleShowClick(resource)}
					handleSelect={() => handleSelect(resource)}
					enableShow={enableShow}
					enableEdit={enableEdit}
					enableDelete={enableDelete}
					handleEdit={enableEdit ? () => handleEdit(resource) : undefined}
					handleDelete={
						enableDelete ? () => handleDeleteClick(resource) : undefined
					}
					{...slots.item}
				/>
			))}
			<Pagination
				page={page}
				numPages={numPages}
				handlePaginate={handlePaginate}
			/>
		</DataLayout>
	)
}

export default DataListItems
