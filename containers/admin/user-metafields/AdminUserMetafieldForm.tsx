'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminMetafieldForm: React.FC<ResourceFormProps> = (props) => {
	return (
		<ResourceForm
			{...props}
			fields={[
				{ label: 'Label', name: 'label', variant: 'string' },
				{ label: 'API name', name: 'name', variant: 'snake_case' },
				{
					label: 'Type',
					name: 'variant',
					variant: 'select',
					options: [
						{ icon: 'List', value: 'array', label: 'Array' },
						{ icon: 'MenuSquare', value: 'select', label: 'Select' },
						{ icon: 'Type', value: 'string', label: 'String' },
						{ icon: 'FileText', value: 'text', label: 'Text' },
						{ icon: 'Hash', value: 'number', label: 'Number' },
						{ icon: 'Star', value: 'rating', label: 'Rating' },
						{ icon: 'Link', value: 'url', label: 'URL' },
						{ icon: 'DollarSign', value: 'price', label: 'Price' },
					],
				},
				{
					label: 'Options',
					name: 'options',
					variant: 'array',
					conditions: [{ name: 'variant', operator: 'eq', value: 'select' }],
				},
			]}
		/>
	)
}

export default AdminMetafieldForm
