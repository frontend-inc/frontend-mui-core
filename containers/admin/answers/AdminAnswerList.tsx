'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminAnswerItem from './AdminAnswerItem'
import AdminAnswerCreate from './AdminAnswerCreate'
import AdminAnswerEdit from './AdminAnswerEdit'
import AdminAnswerShow from './AdminAnswerShow'
import AdminAnswerToolbar from './AdminAnswerToolbar'
import { ResourceListProps } from '../../../components/cms/resources/ResourceList'

type AdminAnswerListProps = {
	questionId: string | number
	direction?: 'row' | 'column'
}

const AdminAnswersList: React.FC<AdminAnswerListProps> = (props) => {
	const { questionId, direction = 'row' } = props || {}
	const { apiUrl } = useAdmin()

	const url = `${apiUrl}/questions/${questionId}/answers`

	return (
		<ResourceList
			direction={direction}
			sortable
			url={url}
			name={'answer'}
			enableEdit
			enableDelete
			enableCreate
			enableShow
			create={AdminAnswerCreate}
			edit={AdminAnswerEdit}
			show={AdminAnswerShow}
			toolbar={AdminAnswerToolbar}
			component={AdminAnswerItem}
			emptyIcon="CircleCheck"
			emptyTitle="No answer choices"
			emptyDescription="Add answer choices here."
		/>
	)
}

export default AdminAnswersList
