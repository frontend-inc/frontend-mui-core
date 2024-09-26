import React, { useEffect, useState } from 'react'
import { Stack, Typography } from '@mui/material'
import { useAdminForms } from '../../../hooks'
import {
	AdminFormEdit,
	AdminFormDetails,
	AdminFormQuestionList,
} from '../..'

type AdminFormProps = {
	formId: string
}

const AdminForm: React.FC<AdminFormProps> = (
	props
) => {
	const [open, setOpen] = useState(false)

	const { formId } = props || {}

	const {
		loading,
		errors,
		form,
		setForm,
		handleChange,
		updateForm,
		findForm,
		reloadForm,
		addAttachment,
		removeAttachment,
	} = useAdminForms()

	const handleEdit = () => {
		setOpen(true)
	}

	const handleAddAttachment = async (name, attachmentId) => {
		await addAttachment(form?.id, name, attachmentId)
		reloadForm()
	}

	const handleRemoveAttachment = async (name) => {
		await removeAttachment(form?.id, name)
		reloadForm()
	}

	const handleSubmit = async () => {
		await updateForm(form)
		reloadForm()
		setOpen(false)
	}

	useEffect(() => {
		if (formId) {
			findForm(formId)
		}
	}, [formId])

	return (
		<Stack direction="column" spacing={1}>
			<AdminFormDetails
				form={form}
				handleEdit={handleEdit}
			/>
			<Typography variant="subtitle1" color="text.primary">
				Questions
			</Typography>
			<AdminFormQuestionList 
        formId={form?.id} 
      />
			<AdminFormEdit
				open={open}
				handleClose={() => setOpen(false)}
				loading={loading}
				errors={errors}
				resource={form}
				setResource={setForm}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				handleReload={reloadForm}
				handleAddAttachment={handleAddAttachment}
				handleRemoveAttachment={handleRemoveAttachment}
			/>
		</Stack>
	)
}

export default AdminForm
