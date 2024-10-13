'use client'

import React, { useEffect, useState } from 'react'
import { ResourceTable } from '../../../components'
import { useAdmin, useAdminForms } from '../../../hooks'
import AdminFormResponseItem from './AdminFormResponseItem'
import AdminFormResponseToolbar from './AdminFormResponseToolbar'
import AdminFormResponseShow from './AdminFormResponseShow'
import AdminFormResponseEdit from './AdminFormResponseEdit'
import { TableHeaderType } from '../../../types'

type AdminFormResponsesListProps = {
	formId: string
}

const AdminFormResponsesList: React.FC<AdminFormResponsesListProps> = (
	props
) => {
	const { formId } = props
	const { apiUrl } = useAdmin()
	const url = `${apiUrl}/forms/${formId}/form_responses`

	const { loading, form, findForm } = useAdminForms()

	const [headers, setHeaders] = useState<TableHeaderType[]>([])

	useEffect(() => {
		if (formId) {
			findForm(formId)
		}
	}, [formId])

	useEffect(() => {
		if (form?.id) {
			let formHeaders = form?.questions?.map((question) => ({
				label: question.name,
				name: question.name,
				variant: question.variant,
				sortable: true,
			}))
			setHeaders(formHeaders)
		}
	}, [form])

	if (!headers.length) return null
	return (
		<ResourceTable
			selectable
			url={url}
			headers={headers}
			name={'form_response'}
			enableSearch
			enableShow
			enableEdit
			enableDelete
			toolbar={AdminFormResponseToolbar}
			component={AdminFormResponseItem}
			show={AdminFormResponseShow}
			edit={AdminFormResponseEdit}
			sortOptions={[
				{ name: 'name', label: 'Name' },
				{ name: 'email', label: 'Email' },
			]}
			emptyIcon="ListCheck"
			emptyTitle="No responses"
			emptyDescription="No forms have been submitted yet."
			slots={{
				toolbar: {
					url,
					formId,
				},
				show: {
					url,
					formId,
				},
				edit: {
					url,
					formId,
				},
			}}
		/>
	)
}

export default AdminFormResponsesList
