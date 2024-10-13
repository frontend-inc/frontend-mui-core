'use client'

import React from 'react'
import { ResourceModal, ResourceDetails } from '../../../components'
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow'

const AdminReviewShow: React.FC<ResourceShowProps> = (props) => {
	const {
		resource: review,
		loading,
		open,
		handleClose,
		enableEdit,
		enableDelete,
		handleEdit,
		handleDelete,
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
				image={review?.document?.image?.url}
				primary={review?.user?.name}
				secondary={`@${review?.user?.username}`}
				{...props}
			/>
		</ResourceModal>
	)
}

export default AdminReviewShow
