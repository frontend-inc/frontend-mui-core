'use client'

import React from 'react'
import { ResourceToolbarModal, SecondaryButton } from '../../../components'
import { useResource } from 'frontend-js'

type AdminFormQuestionToolbarProps = {
	open: boolean
	resource: any
	url: string
	handleClose: () => void
	selectedIds: string[]
	handleReload: () => void
}

const AdminFormQuestionToolbar: React.FC<AdminFormQuestionToolbarProps> = (
	props
) => {
	const { open, url, handleClose, selectedIds, handleReload } = props || {}

	const { publish, unpublish, deleteMany } = useResource({
		url: url,
		name: 'form_question',
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
			<SecondaryButton onClick={handleDelete}>Remove</SecondaryButton>
		</ResourceToolbarModal>
	)
}

export default AdminFormQuestionToolbar
