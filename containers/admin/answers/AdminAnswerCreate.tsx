'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminAnswerCreate: React.FC<ResourceFormProps> = (props) => {
	let fields = [
		{ label: 'Answer Choice', name: 'title', variant: 'string' },
		{ label: 'Value', name: 'value', variant: 'string' },
		{ label: 'Image', name: 'image', variant: 'image' },
		{ label: 'Points', name: 'points', variant: 'number' },
	]

	return <ResourceForm title="Add Answer" {...props} fields={fields} />
}

export default AdminAnswerCreate
