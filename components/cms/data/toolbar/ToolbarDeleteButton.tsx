'use client'

import React, { useState } from 'react'
import { Icon, AlertModal } from '../../..'
import { useResourceContext } from 'frontend-js'
import { useApp } from '../../../../hooks'
import { useAuth } from 'frontend-js'
import { Button } from '../../../../tailwind'

const ToolbarDeleteButton: React.FC<any> = () => {
	const { currentUser } = useAuth()
	const { setAuthOpen } = useApp()
	const [open, setOpen] = useState(false)

	const { loading, selectedIds, deleteMany, reloadMany } = useResourceContext()

	const handleDeleteClick = () => {
		if (!currentUser?.id) return setAuthOpen(true)
		if (selectedIds.length > 0) setOpen(true)
	}

	const handleDelete = async () => {
		if (!currentUser?.id) return setAuthOpen(true)
		await deleteMany(selectedIds)
		reloadMany()
		setOpen(false)
	}

	return (
		<>
			<Button
				onClick={handleDeleteClick}
				variant="contained"
				color="secondary"
				startIcon={<Icon name="Trash" />}
			>
				Delete
			</Button>
			<AlertModal
				loading={loading}
				open={open}
				handleClose={() => setOpen(false)}
				handleConfirm={handleDelete}
			/>
		</>
	)
}

export default ToolbarDeleteButton
