'use client'

import React from 'react'
import { ResourceList } from '../../../../components'
import { useAdmin } from '../../../../hooks'
import { AdminQuestionCreate } from '../../../../containers'
import AdminQuestionListItem from './AdminQuestionListItem'
import AdminQuestionListToolbar from './AdminQuestionListToolbar'
import { ResourceListProps } from '../../../../components/cms/resources/ResourceList'

type AdminQuestionListItemsProps = ResourceListProps & {
	url: string
	formId: string
	handleSuccess: () => void
}

const AdminQuestionListItems: React.FC<AdminQuestionListItemsProps> = (
	props
) => {
	const { url, handleSuccess, formId, ...rest } = props || {}
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			direction="column"
			selectable
			enableSearch
			enableCreate
			enableDelete
			url={`${apiUrl}/questions`}
			name="question"
			toolbar={AdminQuestionListToolbar}
			component={AdminQuestionListItem}
			create={AdminQuestionCreate}
			emptyIcon="Search"
			emptyTitle="No questions"
			emptyDescription="No questions yet."
			slots={{
				toolbar: {
					url,
					formId,
					handleSuccess,
				},
				header: {
					buttonText: 'New Question',
				},
			}}
		/>
	)
}

export default AdminQuestionListItems
