'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminFormCreate: React.FC<ResourceFormProps> = (props) => {
	let fields = [
		{ label: 'Image', name: 'image', variant: 'image' },
		{ label: 'Handle', name: 'handle', variant: 'snake_case' },
		{ label: 'Label', name: 'label', variant: 'string' },
		{ label: 'Title', name: 'title', variant: 'string' },
		{ label: 'Description', name: 'description', variant: 'text' },
		{ label: 'Button Text', name: 'button_text', variant: 'string' },
	]

	return <ResourceForm {...props} fields={fields} />
}

export default AdminFormCreate
