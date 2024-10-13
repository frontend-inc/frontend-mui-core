'use client'

import React from 'react'
import { UserAvatar, ResourceModal, ResourceDetails } from '../../../components'
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow'
import { DisplayFieldType } from '../../../types'

type AdminUserShowProps = ResourceShowProps & {
	metafields?: DisplayFieldType[]
}

const AdminUserShow: React.FC<AdminUserShowProps> = (props) => {
	const {
		resource,
		loading,
		open,
		handleClose,
		metafields = [],
		enableEdit,
		enableDelete,
		handleDelete,
		handleEdit,
	} = props || {}

	let fields = [
		{ label: 'First name', name: 'first_name', variant: 'string' },
		{ label: 'Last name', name: 'last_name', variant: 'string' },
		{ label: 'Email', name: 'email', variant: 'string' },
		...metafields,
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
				avatar={<UserAvatar user={resource} size={96} />}
				primary={resource?.name}
				secondary={`@${resource?.username}`}
				label={resource?.role}
				resource={resource}
				fields={fields}
			/>
		</ResourceModal>
	)
}

export default AdminUserShow
