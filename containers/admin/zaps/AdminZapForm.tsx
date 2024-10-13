'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ZAP_TYPES } from '../../../constants'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { useAdmin } from '../../../hooks'

const AdminZapForm: React.FC<ResourceFormProps> = (props) => {
	const { apiUrl } = useAdmin()

	const FORM_FIELDS = [
		{
			label: 'Name',
			name: 'name',
			variant: 'string',
		},
		{
			label: 'Zap',
			name: 'zap_type',
			variant: 'select',
			options: ZAP_TYPES,
		},
		{
			label: 'Post URL',
			name: 'url',
			variant: 'string',
			conditions: [
				{
					name: 'zap_type',
					operator: 'eq',
					value: 'webhook',
				},
			],
		},
		{
			label: 'Email',
			name: 'email_id',
			variant: 'autosuggest',
			displayField: 'name',
			url: `${apiUrl}/emails`,
			query: {
				filters: {
					AND: [{ internal: { eq: false } }],
				},
			},
			conditions: [
				{
					name: 'zap_type',
					operator: 'eq',
					value: 'email',
				},
			],
		},
	]

	return <ResourceForm {...props} fields={FORM_FIELDS} />
}

export default AdminZapForm
