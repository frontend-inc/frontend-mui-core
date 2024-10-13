'use client'

import React from 'react'
import {
	ResourceToolbarModal,
	PrimaryButton,
	SecondaryButton,
} from '../../../components'
import { useResource } from 'frontend-js'
import { useAdmin } from '../../../hooks'

type AdminCollectionProductToolbarProps = {
	open: boolean
	resource: any
	url: string
	handleClose: () => void
	selectedIds: string[]
	handleReload: () => void
}

const AdminProductToolbar: React.FC<AdminCollectionProductToolbarProps> = (
	props
) => {
	const { apiUrl } = useAdmin()

	const { open, url, resource, handleClose, selectedIds, handleReload } =
		props || {}

	const { publish, unpublish, deleteMany } = useResource({
		url: url,
		name: 'collection_product',
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
			<div className="flex space-x-2">
				<PrimaryButton onClick={handlePublish}>Publish</PrimaryButton>
				<SecondaryButton onClick={handleUnpublish}>Unpublish</SecondaryButton>
				<SecondaryButton onClick={handleDelete}>Remove</SecondaryButton>
			</div>
		</ResourceToolbarModal>
	)
}

export default AdminProductToolbar
