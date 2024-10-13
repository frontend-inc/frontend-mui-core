'use client'

import React from 'react'
import { ResourceList } from '../../../components'

import { useAdmin } from '../../../hooks'
import { AdminWebhookItem } from '../../../containers'

const WEBHOOK_EVENT_TYPES = [
	{ label: 'User registered', value: 'users.create' },
	{ label: 'User updated', value: 'users.update' },
	{ label: 'Resource created', value: 'resources.create' },
	{ label: 'Resource updated', value: 'resources.save' },
	{ label: 'Resource deleted', value: 'resources.delete' },
]

const AdminWebhooksList: React.FC = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			url={`${apiUrl}/webhooks`}
			name="webhook"
			enableCreate
			enableEdit
			enableSearch
			enableDelete
			query={{
				sort_by: 'event_type',
				sort_direction: 'asc',
			}}
			filterOptions={[
				{
					label: 'Type',
					field: 'event_type',
					variant: 'multiple_choice',
					options: WEBHOOK_EVENT_TYPES,
				},
			]}
			fields={[
				{
					label: 'Event type',
					name: 'event_type',
					variant: 'select',
					options: WEBHOOK_EVENT_TYPES,
				},
				{
					label: 'Collection',
					name: 'collection_id',
					variant: 'autosuggest',
					displayField: 'name',
					url: `${apiUrl}/collections`,
					query: {},
					conditions: [
						{
							name: 'event_type',
							operator: 'in',
							value: ['resources.create', 'resources.save', 'resources.delete'],
						},
					],
				},
			]}
			component={AdminWebhookItem}
			emptyIcon="Hook"
			emptyTitle="No webhooks"
			emptyDescription="No webhooks yet."
		/>
	)
}

export default AdminWebhooksList
