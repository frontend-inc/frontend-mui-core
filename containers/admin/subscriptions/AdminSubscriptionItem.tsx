'use client'

import React from 'react'
import { Label, ResourceListItem } from '../../../components'

type AdminSubscriptionItemProps = {
	resource: any
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminSubscriptionItem: React.FC<AdminSubscriptionItemProps> = (props) => {
	const {
		resource: subscription,
		handleClick,
		handleEdit,
		handleDelete,
	} = props

	return (
		<ResourceListItem
			icon="CreditCard"
			primary={subscription?.name}
			secondary={subscription?.display_price}
			secondaryAction={
				subscription?.label && <Label label={subscription?.label} />
			}
			color={'bg-amber-500'}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminSubscriptionItem
