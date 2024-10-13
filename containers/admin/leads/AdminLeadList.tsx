'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminLeadItem } from '../..'
import AdminLeadForm from './AdminLeadForm'

const AdminLeadsList: React.FC = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			enableBorder={false}
			url={`${apiUrl}/leads`}
			name="lead"
			enableSearch
			enableEdit
			enableShow
			enableDelete
			sortOptions={[
				{ name: 'created_at', label: 'Date' },
				{ name: 'name', label: 'Name' },
				{ name: 'email', label: 'Email' },
				{ name: 'phone', label: 'Phone' },
				{ name: 'company', label: 'Company' },
			]}
			displayFields={[
				{ name: 'name', label: 'Name', variant: 'string' },
				{ name: 'email', label: 'Email', variant: 'string' },
				{ name: 'phone', label: 'Phone', variant: 'string' },
				{ name: 'company', label: 'Company', variant: 'string' },
				{ name: 'message', label: 'Message', variant: 'text' },
			]}
			edit={AdminLeadForm}
			create={AdminLeadForm}
			component={AdminLeadItem}
			emptyIcon="Users"
			emptyTitle="No leads"
			emptyDescription="No leads have been submitted yet."
		/>
	)
}

export default AdminLeadsList
