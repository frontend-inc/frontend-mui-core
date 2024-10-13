'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminPolicyItem } from '../..'
import AdminPolicyForm from './AdminPolicyForm'

const AdminPolicysList: React.FC = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			sortable
			enableBorder
			url={`${apiUrl}/policies`}
			name="policy"
			enableCreate
			enableEdit
			enableSearch
			enableDelete
			query={{
				sort_by: 'position',
				sort_direction: 'asc',
			}}
			create={AdminPolicyForm}
			edit={AdminPolicyForm}
			component={AdminPolicyItem}
			emptyIcon="FileText"
			emptyTitle="No policies"
			emptyDescription="No policies yet."
			slots={{
				item: {
					enableBorder: true,
				},
			}}
		/>
	)
}

export default AdminPolicysList
