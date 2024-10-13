'use client'

import React from 'react'
import { ResourceModal, ResourceDetails } from '../../../components'
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow'
import { DisplayFieldType } from '../../../types'

type AdminFormShowProps = ResourceShowProps & {
	metafields?: DisplayFieldType[]
}

const AdminFormShow: React.FC<AdminFormShowProps> = (props) => {
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
		{ label: 'Handle', name: 'handle', variant: 'string' },
		{ label: 'Title', name: 'title', variant: 'string' },
		{ label: 'Description', name: 'description', variant: 'text' },
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
				image={resource?.image?.url}
				primary={resource?.title}
				secondary={resource?.description}
				resource={resource}
				fields={fields}
				direction="column"
			/>
		</ResourceModal>
	)
}

export default AdminFormShow
