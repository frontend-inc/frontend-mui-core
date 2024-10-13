'use client'

import React from 'react'
import { Button } from '../../../tailwind'
import { Drawer, FormFields, IconLoading } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminAnswerEdit: React.FC<ResourceFormProps> = (props) => {
	const {
		loading,
		errors,
		title,
		open,
		handleClose,
		resource,
		handleChange,
		handleRemove,
		handleSubmit,
		handleAddAttachment,
		handleRemoveAttachment,
		inputOptions,
		inputParams,
	} = props || {}

	let fields = [
		{ label: 'Answer', name: 'title', variant: 'string' },
		{ label: 'Value', name: 'value', variant: 'string' },
		{ label: 'Image', name: 'image', variant: 'media' },
		{
			label: 'If selected, assign product and points',
			name: 'results',
			variant: 'divider',
		},
		{ label: 'Points', name: 'points', variant: 'number' },
		{
			label: 'Shopify product',
			name: 'shopify_product',
			variant: 'shopify_product',
		},
	]

	return (
		<Drawer
			mode="editor"
			open={open}
			handleClose={handleClose}
			title={title ? title : resource?.id ? 'Edit' : 'Add'}
			buttons={
				<Button
					fullWidth
					variant="contained"
					color="primary"
					onClick={handleSubmit}
					startIcon={loading && <IconLoading />}
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
				handleAddAttachment={handleAddAttachment}
				handleRemoveAttachment={handleRemoveAttachment}
				inputOptions={inputOptions}
				inputParams={inputParams}
			/>
		</Drawer>
	)
}

export default AdminAnswerEdit
