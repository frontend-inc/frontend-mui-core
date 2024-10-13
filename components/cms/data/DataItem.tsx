'use client'

import React from 'react'
import { DataListItem } from '../..'

type DataItemProps = {
	sortable?: boolean
	selectable?: boolean
	selected?: boolean
	resource: any
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	handleClick?: () => void
	handleEdit?: () => void
	handleDelete?: () => void
	handleSelect?: () => void
	slots?: {
		item?: any
		image?: any
	}
}

// This component is responsible for converting a resource
// into a DataItem UI component
const DataItem: React.FC<DataItemProps> = (props) => {
	const {
		sortable,

		selectable,
		selected,

		resource,
		actions,
		secondaryAction,
		handleClick,
		handleEdit,
		handleDelete,
		handleSelect,
		slots = {
			item: {},
			image: {},
		},
	} = props || {}

	const { label, title, image, description } = resource || {}

	return (
		<DataListItem
			sortable={sortable}
			selectable={selectable}
			selected={selected}
			label={label}
			primary={title}
			secondary={description}
			image={image?.url}
			actions={actions}
			secondaryAction={secondaryAction}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			handleSelect={handleSelect}
			slots={slots}
		/>
	)
}

export default DataItem
