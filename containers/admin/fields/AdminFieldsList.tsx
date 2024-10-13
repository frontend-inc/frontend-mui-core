'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminFieldForm, AdminFieldItem } from '../..'

type AdminFieldsListProps = {
	collectionId: string | number | string[]
}

const AdminFieldsList: React.FC<AdminFieldsListProps> = (props) => {
	const { apiUrl } = useAdmin()
	const { collectionId } = props || {}

	const url = `${apiUrl}/collections/${collectionId}/fields`
	const slots = {
		item: {
			url,
		},
	}

	return (
		<ResourceList
			sortable
			url={url}
			name="field"
			enableCreate
			enableEdit
			enableSearch
			enableDelete
			query={{
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
			edit={AdminFieldForm}
			create={AdminFieldForm}
			component={AdminFieldItem}
			emptyIcon="Type"
			emptyTitle="No fields"
			emptyDescription="No fields yet."
			slots={slots}
		/>
	)
}

export default AdminFieldsList
