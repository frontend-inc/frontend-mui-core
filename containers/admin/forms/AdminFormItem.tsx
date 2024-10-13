'use client'

import React from 'react'
import { PublishLabel, ResourceListItem } from '../../../components'
import { ResourceItemProps } from '../../../components/cms/resources/ResourceItem'

const AdminFormItem: React.FC<ResourceItemProps> = (props) => {
	const {
		resource: form,
		sortable,
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
			sortable={sortable}
			selectable={selectable}
			selected={selected}
			image={form?.image?.url}
			primary={form?.title}
			secondaryAction={<PublishLabel published={form?.published} />}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			handleClick={handleClick}
			handleSelect={handleSelect}
			{...rest}
		/>
	)
}

export default AdminFormItem
