'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminEmailForm: React.FC<ResourceFormProps> = (props) => {
	return (
		<ResourceForm
			{...props}
			fields={[
				{ label: 'Name', name: 'name', variant: 'string' },
				{ label: 'Subject', name: 'subject', variant: 'string' },
				{ label: 'Body', name: 'body', variant: 'text' },
			]}
		/>
	)
}

export default AdminEmailForm
