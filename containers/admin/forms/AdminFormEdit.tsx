'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminFormEdit: React.FC<ResourceFormProps> = (props) => {
	let fields = [
		{ label: 'Image', name: 'image', variant: 'media' },
		{ label: 'Handle', name: 'handle', variant: 'string' },
		{ label: 'Title', name: 'title', variant: 'string' },
		{ label: 'Description', name: 'description', variant: 'text' },
		{ label: 'Button Text', name: 'button_text', variant: 'string' },
		{ label: 'Completed Title', name: 'end_title', variant: 'string' },
		{
			label: 'Completed Description',
			name: 'end_description',
			variant: 'text',
		},
		{
			label: 'Completed Button Text',
			name: 'end_button_text',
			variant: 'string',
		},
	]

	return <ResourceForm {...props} fields={fields} />
}

export default AdminFormEdit
