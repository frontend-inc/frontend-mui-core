'use client'

import React from 'react'
import {
	Label,
	Image,
	DisplayFields,
	ResourceListItem,
} from '../../../components'
import { Badge } from '../../../tailwind'
import { ResourceItemProps } from '../../../components/cms/resources/ResourceItem'

const AdminOrderLineItem: React.FC<ResourceItemProps> = (props) => {
	const {
		resource: orderLineItem,
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
			image={orderLineItem?.product_data?.image_url}
			avatar={
				<Badge badgeContent={2}>
					<div className="w-[64px] h-[64px]">
						<Image
							alt={orderLineItem?.product_data?.title || ''}
							src={orderLineItem?.product_data?.image_url}
							height={64}
							width={64}
						/>
					</div>
				</Badge>
			}
			primary={orderLineItem.product_data?.title}
			secondary={
				<DisplayFields
					resource={orderLineItem}
					fields={[
						{ label: 'Price', name: 'product_data.price', variant: 'price' },
					]}
				/>
			}
			secondaryAction={<Label label={orderLineItem?.status} />}
			handleEdit={handleEdit}
			handleClick={handleClick}
			handleSelect={handleSelect}
			{...rest}
		/>
	)
}

export default AdminOrderLineItem
