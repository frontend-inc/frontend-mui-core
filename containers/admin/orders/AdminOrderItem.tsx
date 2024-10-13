'use client'

import React from 'react'
import { Label, DisplayFields, ResourceListItem } from '../../../components'
import { ResourceItemProps } from '../../../components/cms/resources/ResourceItem'

const AdminOrderItem: React.FC<ResourceItemProps> = (props) => {
	const {
		resource: order,
		selectable,
		selected,
		handleClick,
		handleEdit,
		handleDelete,
		handleSelect,
		...rest
	} = props

	const product = order?.order_line_items[0]?.product

	return (
		<ResourceListItem
			selectable={selectable}
			selected={selected}
			image={product?.image?.url}
			primary={`Order ${order.display_number}`}
			secondary={
				<DisplayFields
					resource={order}
					fields={[{ label: 'Name', name: 'customer_name', variant: 'string' }]}
				/>
			}
			secondaryAction={<Label label={order?.status} />}
			handleEdit={handleEdit}
			handleClick={handleClick}
			handleSelect={handleSelect}
			{...rest}
		/>
	)
}

export default AdminOrderItem
