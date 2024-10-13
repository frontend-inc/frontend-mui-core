'use client'

import React from 'react'
import { AlertModal } from '../..'
import { useCollectionForms } from '../../../hooks'
import { useResourceContext } from 'frontend-js'

const CollectionDelete: React.FC = () => {
	const { openDelete, setOpenDelete } = useResourceContext()

	const { handleDelete } = useCollectionForms()

	return (
		<AlertModal
			open={openDelete}
			handleClose={() => setOpenDelete(false)}
			title="Are you sure you want to delete this item?"
			description="This action cannot be reversed."
			handleConfirm={handleDelete}
		/>
	)
}

export default CollectionDelete
