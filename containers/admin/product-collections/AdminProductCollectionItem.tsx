'use client'

import React from 'react'
import {
	PublishLabel,
	DisplayFields,
	ResourceListItem,
} from '../../../components'
import { ResourceItemProps } from '../../../components/cms/resources/ResourceItem'

const AdminProductItem: React.FC<ResourceItemProps> = (props) => {
	const {
		resource: product,
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
			image={product?.image?.url}
			primary={product?.title}
			secondary={
				<DisplayFields
					resource={product}
					fields={[{ label: 'Price', name: 'price', variant: 'price' }]}
				/>
			}
			secondaryAction={<PublishLabel published={product?.published} />}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			handleClick={handleClick}
			handleSelect={handleSelect}
			{...rest}
		/>
	)
}

export default AdminProductItem
