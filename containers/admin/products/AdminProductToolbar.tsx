'use client'

import React from 'react'
import {
	ResourceToolbarModal,
	PrimaryButton,
	SecondaryButton,
} from '../../../components'
import { useResource } from 'frontend-js'
import { useAdmin } from '../../../hooks'

const AdminProductToolbar = (props) => {
	const { apiUrl } = useAdmin()

	const { open, handleClose, selectedIds, handleReload } = props || {}

	const { publish, unpublish, deleteMany } = useResource({
		url: `${apiUrl}/products`,
		name: 'product',
	})

	const handlePublish = async () => {
		await publish(selectedIds)
		handleReload()
		handleClose()
	}

	const handleUnpublish = async () => {
		await unpublish(selectedIds)
		handleReload()
		handleClose()
	}

	const handleDelete = async () => {
		await deleteMany(selectedIds)
		handleReload()
		handleClose()
	}

	return (
		<ResourceToolbarModal open={open} handleClose={handleClose}>
			<div className="flex flex-row justify-center items-center space-x-2">
				<PrimaryButton onClick={handlePublish}>Publish</PrimaryButton>
				<SecondaryButton onClick={handleUnpublish}>Unpublish</SecondaryButton>
				<SecondaryButton alert onClick={handleDelete}>
					Delete
				</SecondaryButton>
			</div>
		</ResourceToolbarModal>
	)
}

export default AdminProductToolbar
