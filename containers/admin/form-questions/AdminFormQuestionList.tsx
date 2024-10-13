'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminFormQuestionItem from './AdminFormQuestionItem'
import AdminFormQuestionToolbar from './AdminFormQuestionToolbar'
import AdminFormQuestionsAdd from './AdminFormQuestionsAdd'
import { AdminQuestionShow } from '../../../containers'

type AdminFormQuestionsListProps = {
	formId: string
}

const AdminFormQuestionsList: React.FC<AdminFormQuestionsListProps> = (
	props
) => {
	const { formId } = props
	const { apiUrl } = useAdmin()
	const url = `${apiUrl}/forms/${formId}/form_questions`
	return (
		<ResourceList
			selectable
			sortable
			url={url}
			name={'form_questions'}
			enableSearch
			enableShow
			enableDelete
			enableCreate
			toolbar={AdminFormQuestionToolbar}
			component={AdminFormQuestionItem}
			create={AdminFormQuestionsAdd}
			show={AdminQuestionShow}
			emptyIcon="Question"
			emptyTitle="No questions"
			emptyDescription="No questions added yet."
			slots={{
				toolbar: {
					url,
					formId,
				},
				show: {
					url: `${apiUrl}/questions`,
				},
				create: {
					url: `${apiUrl}/questions`,
					formId,
				},
			}}
		/>
	)
}

export default AdminFormQuestionsList
