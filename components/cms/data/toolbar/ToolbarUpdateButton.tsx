'use client'

import React, { useState } from 'react'
import { Button } from '../../../../tailwind'
import { Icon, Form, Modal } from '../../..'
import { useResourceContext } from 'frontend-js'
import { FormFieldType } from '../../../../types'

type ToolbarUpdateProps = {
	buttonText?: string
	icon?: string
	fields: FormFieldType[]
}

const ToolbarUpdateButton: React.FC<ToolbarUpdateProps> = (props) => {
	const { buttonText = 'Update', icon, fields = [] } = props || {}

	const [open, setOpen] = useState(false)
	const handleClose = () => setOpen(false)

	const {
		loading,
		errors,
		selectedIds,
		resource,
		handleChange,
		updateMany,
		reloadMany,
	} = useResourceContext()

	const handleSubmit = async () => {
		await updateMany(selectedIds, resource)
		await reloadMany()
		handleClose()
	}

	const handleRemove = () => null

	return (
		<>
			<Button
				variant="contained"
				color="secondary"
				onClick={() => setOpen(true)}
				startIcon={icon && <Icon name={icon} />}
			>
				{buttonText}
			</Button>
			<Modal
				open={open}
				handleClose={handleClose}
				title={`Update selected (${selectedIds.length})`}
				loading={loading}
			>
				<div className="p-2">
					<Form
						errors={errors}
						fields={fields}
						resource={resource}
						handleChange={handleChange}
						buttonText="Update All"
						handleRemove={handleRemove}
						handleSubmit={handleSubmit}
					/>
				</div>
			</Modal>
		</>
	)
}

export default ToolbarUpdateButton
