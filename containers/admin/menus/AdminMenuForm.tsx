'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminMenuForm: React.FC<ResourceFormProps> = (props) => {
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
					label: 'API name',
					name: 'name',
					variant: 'snake_case',
					placeholder: 'Name',
				},
			]}
		/>
	)
}

export default AdminMenuForm
