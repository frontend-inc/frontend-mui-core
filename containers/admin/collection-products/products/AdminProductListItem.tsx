'use client'

import React from 'react'
import {
	PublishLabel,
	DisplayFields,
	ResourceListItem,
} from '../../../../components'
import { ResourceItemProps } from '../../../../components/cms/resources/ResourceItem'

const AdminProductItem: React.FC<ResourceItemProps> = (props) => {
	const {
		resource: product,
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
			image={product?.image?.url}
			primary={product?.title}
			secondary={
				<div className="flex flex-col space-y-1">
					<DisplayFields
						resource={product}
						fields={[{ label: 'Price', name: 'price', variant: 'price' }]}
					/>
					<PublishLabel published={product?.published} />
				</div>
			}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			handleClick={handleClick}
			handleSelect={handleSelect}
			{...rest}
		/>
	)
}

export default AdminProductItem
