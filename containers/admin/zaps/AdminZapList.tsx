'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminZapForm from './AdminZapForm'
import AdminZapItem from './AdminZapItem'

const AdminZapsList: React.FC = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			sortable
			enableBorder
			url={`${apiUrl}/zaps`}
			name="zap"
			enableSearch
			enableCreate
			enableEdit
			enableDelete
			query={{
				sort_by: 'position',
				sort_direction: 'asc',
			}}
			edit={AdminZapForm}
			create={AdminZapForm}
			component={AdminZapItem}
			emptyIcon="Zap"
			emptyTitle="No zaps"
			emptyDescription="No zaps yet."
		/>
	)
}

export default AdminZapsList
