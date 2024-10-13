'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminCommentItem } from '../../../containers'
import AdminCommentShow from './AdminCommentShow'

const AdminCommentsList: React.FC = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			url={`${apiUrl}/comments`}
			name="comment"
			enableSearch
			enableDelete
			enableShow
			filterOptions={[
				{ field: 'flagged', label: 'Flagged', variant: 'boolean' },
			]}
			component={AdminCommentItem}
			show={AdminCommentShow}
			emptyIcon="MessageSquare"
			emptyTitle="No comments"
			emptyDescription="No comments yet."
		/>
	)
}

export default AdminCommentsList
