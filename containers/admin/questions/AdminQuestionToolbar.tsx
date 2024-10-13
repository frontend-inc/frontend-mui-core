'use client'

import React from 'react'
import { ResourceToolbarModal, SecondaryButton } from '../../../components'
import { useResource } from 'frontend-js'
import { useAdmin } from '../../../hooks'

const AdminQuestionToolbar = (props) => {
	const { apiUrl } = useAdmin()

	const { open, handleClose, selectedIds, handleReload } = props || {}

	const { deleteMany } = useResource({
		url: `${apiUrl}/questions`,
		name: 'question',
	})

	const handleDelete = async () => {
		await deleteMany(selectedIds)
		handleReload()
		handleClose()
	}

	return (
		<ResourceToolbarModal open={open} handleClose={handleClose}>
			<div>
				<SecondaryButton alert onClick={handleDelete}>
					Delete
				</SecondaryButton>
			</div>
		</ResourceToolbarModal>
	)
}

export default AdminQuestionToolbar
