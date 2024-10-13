'use client'

import React from 'react'
import { ResourceModal, ResourceDetails } from '../../../components'
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow'
import { DisplayFieldType } from '../../../types'

type AdminQuestionShowProps = ResourceShowProps & {
	metafields?: DisplayFieldType[]
}

const AdminQuestionShow: React.FC<AdminQuestionShowProps> = (props) => {
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
		{ label: 'Value', name: 'value', variant: 'string' },
		{ label: 'Points', name: 'points', variant: 'number' },
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

export default AdminQuestionShow
