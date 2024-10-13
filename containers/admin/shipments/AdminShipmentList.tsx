'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminShipment from './AdminShipmentItem'
import AdminShipmentToolbar from './AdminShipmentToolbar'
import AdminShipmentForm from './AdminShipmentForm'

type AdminShipmentsListProps = {
	orderId: string
}

const AdminShipmentsList: React.FC<AdminShipmentsListProps> = (props) => {
	const { orderId } = props || {}
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			url={`${apiUrl}/orders/${orderId}/shipments`}
			name={'shipment'}
			enableSearch
			enableCreate
			enableEdit
			query={{
				sort_by: 'created_at',
				sort_direction: 'desc',
			}}
			component={AdminShipment}
			edit={AdminShipmentForm}
			create={AdminShipmentForm}
			toolbar={AdminShipmentToolbar}
			emptyIcon="Package"
			emptyTitle="No shipments"
			emptyDescription="No shipments yet."
		/>
	)
}

export default AdminShipmentsList
