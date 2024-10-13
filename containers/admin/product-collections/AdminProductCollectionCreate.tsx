'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { MetafieldType } from '../../../types'

type AdminProductFormProps = ResourceFormProps & {
	metafields: MetafieldType[]
}

const AdminProductForm: React.FC<AdminProductFormProps> = (props) => {
	const { metafields = [] } = props || {}

	let fields = [
		{ label: 'Image', name: 'image', variant: 'image' },
		{ label: 'Handle', name: 'handle', variant: 'string' },
		{ label: 'Title', name: 'title', variant: 'string' },
		{ label: 'Description', name: 'description', variant: 'text' },
		{ label: 'Label', name: 'label', variant: 'string' },
		...metafields,
	]

	return <ResourceForm {...props} fields={fields} />
}

export default AdminProductForm
