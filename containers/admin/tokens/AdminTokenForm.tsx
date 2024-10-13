'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminTokenForm: React.FC<ResourceFormProps> = (props) => {
	return (
		<ResourceForm
			{...props}
			fields={[
				{
					label: 'Name',
					name: 'name',
					variant: 'string',
					placeholder: 'Enter name ...',
				},
				{
					label: 'Admin',
					name: 'admin',
					variant: 'boolean',
				},
			]}
		/>
	)
}

export default AdminTokenForm
