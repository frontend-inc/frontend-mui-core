'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminOrderLineItem from './AdminOrderLineItem'
import AdminOrderLineItemToolbar from './AdminOrderLineItemToolbar'

type AdminOrderLineItemsListProps = {
	orderId: string
}

const AdminOrderLineItemsList: React.FC<AdminOrderLineItemsListProps> = (
	props
) => {
	const { orderId } = props || {}
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			selectable
			url={`${apiUrl}/orders/${orderId}/order_line_items`}
			name={'order'}
			enableSearch
			enableEdit
			query={{
				sort_by: 'created_at',
				sort_direction: 'desc',
			}}
			component={AdminOrderLineItem}
			toolbar={AdminOrderLineItemToolbar}
			emptyIcon="Shirt"
			emptyTitle="No order line items"
			emptyDescription="No order line items."
		/>
	)
}

export default AdminOrderLineItemsList
