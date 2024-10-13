'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminQuestionItem from './AdminQuestionItem'
import AdminQuestionCreate from './AdminQuestionCreate'
import AdminQuestionEdit from './AdminQuestionEdit'
import AdminQuestionShow from './AdminQuestionShow'
import AdminQuestionToolbar from './AdminQuestionToolbar'
import { useRouter, useParams } from 'next/navigation'

const AdminQuestionsList: React.FC = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			selectable
			url={`${apiUrl}/questions`}
			name={'question'}
			enableSearch
			enableEdit
			enableDelete
			enableCreate
			enableShow
			sortOptions={[
				{ name: 'title', label: 'Title' },
				{ name: 'created_at', label: 'Date' },
			]}
			create={AdminQuestionCreate}
			edit={AdminQuestionEdit}
			show={AdminQuestionShow}
			toolbar={AdminQuestionToolbar}
			component={AdminQuestionItem}
			emptyIcon="Text"
			emptyTitle="No questions"
			emptyDescription="No questions added yet."
		/>
	)
}

export default AdminQuestionsList
