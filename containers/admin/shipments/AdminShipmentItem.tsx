'use client'

import React from 'react'
import { Label, ResourceListItem } from '../../../components'
import { ResourceItemProps } from '../../../components/cms/resources/ResourceItem'

const AdminShipment: React.FC<ResourceItemProps> = (props) => {
	const {
		resource: shipment,
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
			color="secondary.main"
			icon="Package"
			primary={shipment.carrier}
			secondary={shipment.tracking_code}
			secondaryAction={<Label label={shipment?.status} />}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			handleClick={handleClick}
			handleSelect={handleSelect}
			{...rest}
		/>
	)
}

export default AdminShipment
