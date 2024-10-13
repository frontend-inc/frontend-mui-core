'use client'

import React from 'react'
import { ResourceListItem } from '../../../components'
import { ResourceItemProps } from '../../../components/cms/resources/ResourceItem'

const AdminFormResponseItem: React.FC<ResourceItemProps> = (props) => {
	const {
		resource,
		selectable,
		selected,
		handleClick,
		handleEdit,
		handleDelete,
		handleSelect,
		...rest
	} = props

	return (
		<ResourceListItem
			selectable={selectable}
			selected={selected}
			image={resource?.image?.url}
			primary={resource?.name}
			secondary={resource?.email}
			handleDelete={handleDelete}
			handleClick={handleClick}
			handleSelect={handleSelect}
			{...rest}
		/>
	)
}

export default AdminFormResponseItem
