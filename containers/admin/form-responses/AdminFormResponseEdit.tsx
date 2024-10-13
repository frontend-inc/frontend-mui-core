'use client'

import React, { useEffect, useState } from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { useAdminForms } from '../../../hooks'
import { FormFieldType } from '../../../types'

type AdminFormResponseEditProps = ResourceFormProps & {
	formId: string
}

const AdminFormResponseEdit: React.FC<AdminFormResponseEditProps> = (props) => {
	const { formId } = props || {}

	const { loading, form, findForm } = useAdminForms()

	const [fields, setFields] = useState<FormFieldType[]>([])

	useEffect(() => {
		if (formId) {
			findForm(formId)
		}
	}, [formId])

	useEffect(() => {
		if (form?.id) {
			let formFields = form?.questions?.map((question) => ({
				label: question.title,
				name: question.name,
				variant: question.variant,
			}))
			setFields(formFields)
		}
	}, [form])

	return <ResourceForm {...props} fields={fields} />
}

export default AdminFormResponseEdit
