import React from 'react'
import { Label, ResourceListItem } from '../../../components'
import { FieldIcon } from '../..'

type AdminShopifyMetafieldItemProps = {
	resource: any
	sortable?: boolean
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminShopifyMetafieldItem: React.FC<AdminShopifyMetafieldItemProps> = (props) => {
	const { resource, sortable, handleClick, handleEdit, handleDelete } = props

	return (
		<ResourceListItem
			enableBorder
			sortable={sortable}
			avatar={
        <FieldIcon 
          variant={resource?.variant} 
        />
      }
			primary={resource?.label}
			secondary={`${resource?.name}`}
			secondaryActions={
        <Label label={resource?.variant} />
      }
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminShopifyMetafieldItem
