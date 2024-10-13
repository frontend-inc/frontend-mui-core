'use client'

import React from 'react'
import { FormFields } from '../../../components'
import { SyntheticEventType } from 'frontend-js'

type AdminViewFormProps = {
	errors: any
	view: any
	handleChange: (ev: SyntheticEventType) => void
}

const AdminViewForm: React.FC<AdminViewFormProps> = (props) => {
	const { errors, view, handleChange } = props
	return (
		<FormFields
			resource={view}
			errors={errors}
			handleChange={handleChange}
			fields={[
				{
					label: 'Name',
					name: 'name',
					placeholder: 'Name',
					variant: 'string',
				},
			]}
		/>
	)
}

export default AdminViewForm
