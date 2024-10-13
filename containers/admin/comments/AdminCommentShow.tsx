'use client'

import React from 'react'
import { ResourceModal, ResourceDetails } from '../../../components'
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow'

const AdminCommentShow: React.FC<ResourceShowProps> = (props) => {
	const {
		loading,
		open,
		handleClose,
		enableEdit,
		enableDelete,
		handleEdit,
		handleDelete,
		resource: comment,
	} = props

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
				image={comment?.document?.image?.url}
				primary={comment?.user?.name}
				secondary={`@${comment?.user?.username}`}
				{...props}
				fields={[{ name: 'body', label: 'Comment', variant: 'text' }]}
			/>
		</ResourceModal>
	)
}

export default AdminCommentShow
