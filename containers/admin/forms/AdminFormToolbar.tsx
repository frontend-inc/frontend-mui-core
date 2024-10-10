import React from 'react'
import {
	ResourceToolbarModal,
	PrimaryButton,
	SecondaryButton,
} from '../../../components'
import { useResource } from 'frontend-js'
import { useAdmin } from '../../../hooks'

const AdminProductCollectionToolbar = (props) => {
	const { apiUrl } = useAdmin()

	const { open, handleClose, selectedIds, handleReload } = props || {}

	const { publish, unpublish, deleteMany } = useResource({
		url: `${apiUrl}/forms`,
		name: 'form',
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
			<div className='flex flex-row space-x-2 justify-center items-center'>
				<PrimaryButton onClick={handlePublish}>Publish</PrimaryButton>
				<SecondaryButton onClick={handleUnpublish}>Unpublish</SecondaryButton>
				<SecondaryButton alert onClick={handleDelete}>
					Delete
				</SecondaryButton>
			</div>
		</ResourceToolbarModal>
	)
}

export default AdminProductCollectionToolbar
