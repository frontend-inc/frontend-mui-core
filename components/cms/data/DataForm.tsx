'use client'

import React from 'react'
import { Drawer, FormFields, IconLoading } from '../..'
import { Button } from '../../../tailwind'
import { useResourceContext } from 'frontend-js'

export type DataFormProps = {
	loading: boolean
	errors: any
	resource: any
	handleChange: (ev: any) => void
	handleRemove: (field: any) => void
	handleSubmit: () => void
	fields: any[]
}

const DataForm: React.FC<DataFormProps> = (props) => {
	const {
		loading,
		errors,
		handleChange,
		handleRemove,
		handleSubmit,
		resource,
		openEdit,
		setOpenEdit,
	} = useResourceContext()

	const { fields = [] } = props || {}

	return (
		<Drawer
			open={openEdit}
			handleClose={() => setOpenEdit(false)}
			title={resource?.id ? 'Edit' : 'Add'}
			buttons={
				<Button
					fullWidth
					variant="contained"
					color="primary"
					onClick={handleSubmit}
					loading={loading}
				>
					{resource?.id ? 'Update' : 'Save'}
				</Button>
			}
		>
			<FormFields
				errors={errors}
				loading={loading}
				fields={fields}
				resource={resource}
				handleChange={handleChange}
				handleRemove={handleRemove}
			/>
		</Drawer>
	)
}

export default DataForm
