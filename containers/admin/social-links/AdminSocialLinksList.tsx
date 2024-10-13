'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminSocialLinkItem } from '../..'
import AdminSocialLinkForm from './AdminSocialLinkForm'

const AdminSocialLinksList: React.FC = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			sortable
			url={`${apiUrl}/social_links`}
			name="social_link"
			enableCreate
			enableEdit
			enableSearch
			enableDelete
			query={{
				sort_by: 'position',
				sort_direction: 'asc',
			}}
			create={AdminSocialLinkForm}
			edit={AdminSocialLinkForm}
			component={AdminSocialLinkItem}
			emptyIcon="Instagram"
			emptyTitle="No social media"
			emptyDescription="No social media yet."
		/>
	)
}

export default AdminSocialLinksList
