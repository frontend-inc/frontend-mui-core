'use client'

import React from 'react'
import { IconLoading, Drawer } from '../../../components'
import { Button } from '../../../tailwind'
import AdminCollectionForm from './AdminCollectionForm'

type AdminCollectionEditProps = {
	loading: boolean
	errors: any
	open: boolean
	collection: any
	handleClose: () => void
	handleChange: (e: any) => void
	handleSubmit: (collection: any) => void
	handleTemplateClick: (template: any) => void
}

const AdminCollectionEdit: React.FC<AdminCollectionEditProps> = (props) => {
	const {
		loading,
		errors,
		open,
		collection,
		handleClose,
		handleChange,
		handleSubmit,
		handleTemplateClick,
	} = props

	return (
		<Drawer
			mode="editor"
			loading={loading}
			open={open}
			handleClose={handleClose}
			title={collection?.id ? 'Edit Collection' : 'Add Collection'}
			disablePadding
			buttons={
				<Button
					fullWidth
					color="primary"
					variant="contained"
					onClick={handleSubmit}
					startIcon={loading && <IconLoading />}
				>
					{collection?.id ? 'Update' : 'Save'}
				</Button>
			}
		>
			<AdminCollectionForm
				errors={errors}
				collection={collection}
				handleChange={handleChange}
				handleTemplateClick={handleTemplateClick}
			/>
		</Drawer>
	)
}

export default AdminCollectionEdit
