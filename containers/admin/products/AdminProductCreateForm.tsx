'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { MetafieldType } from '../../../types'

type AdminProductCreateFormProps = ResourceFormProps & {
	metafields: MetafieldType[]
}

const AdminProductCreateForm: React.FC<AdminProductCreateFormProps> = (
	props
) => {
	const { metafields = [] } = props || {}

	let fields = [
		{ label: 'Image', name: 'image', variant: 'image' },
		{ label: 'Handle', name: 'handle', variant: 'string' },
		{ label: 'Title', name: 'title', variant: 'string' },
		{ label: 'Description', name: 'description', variant: 'text' },
		{ label: 'Label', name: 'label', variant: 'string' },
		{ label: 'Price', name: 'price', variant: 'number' },
		{ label: 'Compare at price', name: 'compare_at_price', variant: 'number' },
		{ label: 'SKU', name: 'sku', variant: 'string' },
		...metafields,
	]

	return <ResourceForm {...props} fields={fields} />
}

export default AdminProductCreateForm
