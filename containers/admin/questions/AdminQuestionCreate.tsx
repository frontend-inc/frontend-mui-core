'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminQuestionCreate: React.FC<ResourceFormProps> = (props) => {
	let fields = [
		{ label: 'Image', name: 'image', variant: 'image' },
		{ label: 'Question', name: 'title', variant: 'string' },
		{ label: 'Description', name: 'description', variant: 'text' },
		{ label: 'API name', name: 'name', variant: 'snake_case' },
		{
			label: 'Question type',
			name: 'variant',
			variant: 'select',
			options: [
				{
					icon: 'ListChecks',
					value: 'multiple_choice',
					label: 'Multiple choice',
				},
				{ icon: 'ListTodo', value: 'single_choice', label: 'Single choice' },
				{ icon: 'List', value: 'array', label: 'Array' },
				{ icon: 'MenuSquare', value: 'select', label: 'Select' },
				{ icon: 'Calendar', value: 'date', label: 'Date' },
				{ icon: 'Type', value: 'string', label: 'String' },
				{ icon: 'MapPin', value: 'location', label: 'Location' },
				{ icon: 'FileText', value: 'text', label: 'Text' },
				{ icon: 'Hash', value: 'number', label: 'Number' },
				{ icon: 'Star', value: 'rating', label: 'Rating' },
				{ icon: 'DollarSign', value: 'price', label: 'Price' },
				{ icon: 'Link', value: 'url', label: 'URL' },
				{ icon: 'Image', value: 'image', label: 'Image' },
				{ icon: 'File', value: 'file', label: 'File' },
			],
		},
		{
			label: 'Options',
			name: 'options',
			variant: 'array',
			conditions: [{ name: 'variant', operator: 'eq', value: 'select' }],
			default: [],
		},
	]

	return <ResourceForm {...props} title="Add Question" fields={fields} />
}

export default AdminQuestionCreate
