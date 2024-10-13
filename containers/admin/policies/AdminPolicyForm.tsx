'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminPolicyForm: React.FC<ResourceFormProps> = (props) => {
	return (
		<ResourceForm
			{...props}
			fields={[
				{
					label: 'Handle',
					name: 'handle',
					variant: 'string',
					placeholder: 'Enter handle',
				},
				{
					label: 'Title',
					name: 'title',
					variant: 'string',
					placeholder: 'Enter title',
				},
				{
					label: 'Publish Date',
					name: 'published_at',
					variant: 'date',
				},
				{
					label: 'Text',
					name: 'body',
					variant: 'text',
					placeholder: 'Enter text...',
				},
			]}
		/>
	)
}

export default AdminPolicyForm
