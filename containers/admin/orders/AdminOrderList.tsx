'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminOrderItem from './AdminOrderItem'
import AdminOrderForm from './AdminOrderForm'
import AdminOrderShow from './AdminOrderShow'
import AdminOrderToolbar from './AdminOrderToolbar'
import { useRouter, useParams } from 'next/navigation'
import { OrderType } from '../../../types'
import { ORDER_STATES } from '../../../constants'

const AdminOrdersList: React.FC = (props) => {
	const { apiUrl } = useAdmin()
	const router = useRouter()

	const { clientUrl } = useAdmin()

	const handleClick = (order: OrderType) => {
		router.push(`${clientUrl}/shop/orders/${order.id}`)
	}

	return (
		<ResourceList
			selectable
			url={`${apiUrl}/orders`}
			name={'order'}
			enableSearch
			enableEdit
			handleClick={handleClick}
			query={{
				sort_by: 'number',
				sort_direction: 'desc',
			}}
			filterOptions={[
				{
					label: 'Status',
					field: 'status',
					variant: 'multiple_choice',
					options: ORDER_STATES,
				},
			]}
			edit={AdminOrderForm}
			toolbar={AdminOrderToolbar}
			component={AdminOrderItem}
			emptyIcon="ShoppingCart"
			emptyTitle="No orders"
			emptyDescription="No orders added yet."
		/>
	)
}

export default AdminOrdersList
