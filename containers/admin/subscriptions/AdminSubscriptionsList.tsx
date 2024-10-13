'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminSubscriptionItem from './AdminSubscriptionItem'
import AdminSubscriptionForm from './AdminSubscriptionForm'

const AdminSubscriptionsList: React.FC = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			url={`${apiUrl}/subscriptions`}
			name="subscription"
			enableSearch
			enableCreate
			enableEdit
			enableDelete
			sortOptions={[
				{ name: 'name', label: 'Name' },
				{ name: 'price', label: 'price' },
			]}
			edit={AdminSubscriptionForm}
			create={AdminSubscriptionForm}
			component={AdminSubscriptionItem}
		/>
	)
}

export default AdminSubscriptionsList
