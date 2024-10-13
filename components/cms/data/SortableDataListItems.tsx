'use client'

import React from 'react'
import { LoadMore, SortableList } from '../..'
import { useResourceContext } from 'frontend-js'
import { DataItem, DataLayout } from '../..'
import { useCollectionForms } from '../../../hooks'

export type SortableDataListItemsProps = {
	enableShow?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	handleClick: (resource: any) => void
	pagination?: React.FC<any>
	component?: React.FC<any>
	slots?: {
		item?: any
		list?: any
	}
}

const SortableDataListItems: React.FC<SortableDataListItemsProps> = (props) => {
	const {
		loading,
		resources,
		page,
		numPages,
		query = {},
		setQuery,
		updatePositions,
		reloadMany,
	} = useResourceContext()

	const {
		enableShow,
		enableEdit,
		enableDelete,
		handleClick,
		pagination: Pagination = LoadMore,
		component: Component = DataItem,
		slots = {
			list: {},
			item: {},
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

	const handlePaginate = () => {
		let perPage = (query?.per_page || 12) + 12
		setQuery({
			...query,
			per_page: perPage,
		})
	}

	const handleDrop = async (sorted: any) => {
		await updatePositions(sorted)
		reloadMany()
	}

	return (
		<DataLayout {...slots.list} loading={loading}>
			<SortableList
				droppableId="sortable"
				handleDrop={handleDrop}
				items={resources}
				renderItem={(resource) => (
					<Component
						sortable
						key={resource?.id}
						resource={resource}
						enableShow={enableShow}
						enableEdit={enableEdit}
						enableDelete={enableDelete}
						handleClick={() => handleShowClick(resource)}
						handleEdit={enableEdit ? () => handleEdit(resource) : undefined}
						handleDelete={
							enableDelete ? () => handleDeleteClick(resource) : undefined
						}
						{...slots.item}
					/>
				)}
			/>
			<Pagination
				page={page}
				numPages={numPages}
				handlePaginate={handlePaginate}
			/>
		</DataLayout>
	)
}

export default SortableDataListItems
