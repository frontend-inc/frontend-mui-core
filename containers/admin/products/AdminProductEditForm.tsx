'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { FormFieldType } from '../../../types'
import { MediaInput } from '../../../components'

type AdminProductEditFormProps = ResourceFormProps & {
	metafields?: FormFieldType[]
}

const AdminProductEditForm: React.FC<AdminProductEditFormProps> = (props) => {
	const { metafields = [] } = props || {}

	let fields = [
		{ label: 'Image', name: 'image', variant: 'media' },
		{ label: 'Handle', name: 'handle', variant: 'string' },
		{ label: 'Title', name: 'title', variant: 'string' },
		{ label: 'Description', name: 'description', variant: 'text' },
		{ label: 'Label', name: 'label', variant: 'string' },
		{ label: 'Price', name: 'price', variant: 'number' },
		{ label: 'Compare at price', name: 'compare_at_price', variant: 'number' },
		{ label: 'SKU', name: 'sku', variant: 'string' },
		...metafields,
	]

	const inputOptions = {
		media: MediaInput,
	}

	return <ResourceForm {...props} fields={fields} inputOptions={inputOptions} />
}

export default AdminProductEditForm
