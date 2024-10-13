'use client'

import React from 'react'
import ResourceListItem from './ResourceListItem'
import { truncate } from '../../../helpers'

export type ResourceItemProps = {
	resource: any
	avatar?: React.ReactNode
	icon?: string
	color?: string
	layout?: 'list' | 'grid'
	handleClick: (resource: any) => void
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	handleSelect?: () => void
	handleReload?: () => void
	secondaryAction?: React.ReactNode
	menuActions?: any
	sortable?: boolean
	selectable?: boolean
	selected?: boolean
	isDragging?: boolean
	enableBorder?: boolean
}

const ResourceItem: React.FC<ResourceItemProps> = (props) => {
	const {
		icon,
		color,
		avatar,
		resource,
		handleClick,
		handleEdit,
		handleDelete,
		handleSelect,
		handleReload,
		secondaryAction,
		menuActions,
		sortable,
		selectable,
		selected,
		isDragging = false,
		enableBorder = false,
	} = props

	return (
		<ResourceListItem
			icon={icon}
			color={color}
			avatar={avatar}
			primary={resource?.title}
			secondary={truncate(resource?.description, 60)}
			image={resource?.image?.url}
			handleClick={() => handleClick(resource)}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			handleSelect={handleSelect}
			handleReload={handleReload}
			menuActions={menuActions}
			secondaryAction={secondaryAction}
			sortable={sortable}
			selectable={selectable}
			selected={selected}
			isDragging={isDragging}
			enableBorder={enableBorder}
		/>
	)
}

export default ResourceItem
