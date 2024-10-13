'use client'

import React from 'react'
import { ResourceModal, ResourceDetails } from '../../../components'
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow'

const AdminProductShow: React.FC<ResourceShowProps> = (props) => {
	const {
		resource,
		loading,
		open,
		handleClose,
		enableEdit,
		enableDelete,
		handleDelete,
		handleEdit,
	} = props || {}

	let fields = [
		{ label: 'Number', name: 'display_number', variant: 'string' },
		{ label: 'Subtotal', name: 'display_subtotal', variant: 'string' },
		{ label: 'Total', name: 'display_total', variant: 'string' },
	]

	return (
		<ResourceModal
			loading={loading}
			open={open}
			handleClose={handleClose}
			enableEdit={enableEdit}
			enableDelete={enableDelete}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		>
			<ResourceDetails
				image={resource?.product?.image?.url}
				primary={resource?.display_number}
				secondary={resource?.display_total}
				label={resource?.status}
				resource={resource}
				fields={fields}
				direction="column"
			/>
		</ResourceModal>
	)
}

export default AdminProductShow
