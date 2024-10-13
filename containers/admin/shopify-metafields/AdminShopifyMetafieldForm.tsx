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
				{ label: 'Name', name: 'name', variant: 'snake_case' },
				{
					label: 'Type',
					name: 'variant',
					variant: 'select',
					options: [
						{ icon: 'Type', value: 'string', label: 'String' },
						{ icon: 'FileText', value: 'text', label: 'Text' },
						{ icon: 'Hash', value: 'number', label: 'Number' },
						{
							icon: 'Shirt',
							value: 'shopify_products',
							label: 'Shopify Products',
						},
						{
							icon: 'ShoppingCard',
							value: 'shopify_collection',
							label: 'Shopify Collection',
						},
					],
				},
			]}
		/>
	)
}

export default AdminMetafieldForm
