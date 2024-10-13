'use client'

import React from 'react'
import ResourceDetails from './ResourceDetails'
import ResourceModal from './ResourceModal'

export type ResourceShowProps = {
	title?: string
	open: boolean
	handleClose: () => void
	loading: boolean
	errors: any
	resource: any
	enableEdit?: boolean
	enableDelete?: boolean
	handleEdit?: () => void
	handleDelete?: () => void
	handleReload: () => void
	fields: any[]
}

const ResourceShow: React.FC<ResourceShowProps> = (props) => {
	const {
		loading,
		title,
		open,
		handleClose,
		resource,
		enableEdit,
		enableDelete,
		handleEdit,
		handleDelete,
		fields = [],
	} = props || {}

	return (
		<ResourceModal
      title={title}
			loading={loading}
			open={open}
			handleClose={handleClose}
			enableEdit={enableEdit}
			enableDelete={enableDelete}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		>
			<ResourceDetails
				label={resource?.label}
				image={resource?.image?.url}
				primary={resource?.title}
				secondary={resource?.description}
				resource={resource}
				fields={fields}
			/>
		</ResourceModal>
	)
}

export default ResourceShow
