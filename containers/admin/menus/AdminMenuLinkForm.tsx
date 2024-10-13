'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { useAdmin } from '../../../hooks'

const AdminMenuLinkForm: React.FC<ResourceFormProps> = (props) => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceForm
			{...props}
			fields={[
				{
					label: 'Label',
					name: 'label',
					variant: 'string',
					placeholder: 'Label',
				},
				{
					label: 'Link to',
					name: 'link_type',
					variant: 'select',
					options: [
						{ value: 'page', label: 'Page', icon: 'StickyNote' },
						{ value: 'url', label: 'URL', icon: 'ExternalLink' },
					],
				},
				{
					label: 'URL',
					name: 'url',
					variant: 'string',
					placeholder: 'URL',
					conditions: [{ name: 'link_type', operator: 'eq', value: 'url' }],
				},
				{
					label: 'Page',
					name: 'page_id',
					variant: 'autosuggest',
					placeholder: 'Select page',
					displayField: 'title',
					url: `${apiUrl}/pages`,
					query: {},
					conditions: [{ name: 'link_type', operator: 'eq', value: 'page' }],
				},
			]}
		/>
	)
}

export default AdminMenuLinkForm
