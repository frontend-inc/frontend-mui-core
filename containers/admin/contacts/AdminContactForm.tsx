'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminContactForm: React.FC<ResourceFormProps> = (props) => {
	const FORM_FIELDS = [
		{ name: 'name', label: 'Name', variant: 'string' },
		{ name: 'email', label: 'Email', variant: 'string' },
		{ name: 'phone', label: 'Phone', variant: 'string' },
		{ name: 'company', label: 'Company', variant: 'string' },
		{
			name: 'accepts_marketing',
			label: 'Accepts marketing',
			variant: 'boolean',
		},
	]

	return <ResourceForm {...props} fields={FORM_FIELDS} />
}

export default AdminContactForm
