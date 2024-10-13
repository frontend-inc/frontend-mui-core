'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminUserMetafieldForm, AdminUserMetafieldItem } from '../..'

const AdminMetafieldsList = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			sortable
			url={`${apiUrl}/metafields`}
			name="metafield"
			enableCreate
			enableEdit
			enableSearch
			enableDelete
			query={{
				filters: {
					AND: [{ metafield_type: { eq: 'User' } }],
				},
				sort_by: 'position',
				sort_direction: 'asc',
			}}
			filterOptions={[
				{
					label: 'Type',
					field: 'variant',
					variant: 'multiple_choice',
					options: [
						{ label: 'String', value: 'string' },
						{ label: 'Text', value: 'text' },
						{ label: 'Number', value: 'number' },
						{ label: 'Price', value: 'price' },
					],
				},
			]}
			defaultValue={{
				metafield_type: 'User',
			}}
			edit={AdminUserMetafieldForm}
			create={AdminUserMetafieldForm}
			component={AdminUserMetafieldItem}
			emptyIcon="MessageSquare"
			emptyTitle="No metafields"
			emptyDescription="No metafields yet."
		/>
	)
}

export default AdminMetafieldsList
