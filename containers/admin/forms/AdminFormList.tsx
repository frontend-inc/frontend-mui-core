'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminFormItem from './AdminFormItem'
import AdminFormCreate from './AdminFormCreate'
import AdminFormEdit from './AdminFormEdit'
import AdminFormShow from './AdminFormShow'
import AdminFormToolbar from './AdminFormToolbar'
import { useRouter, useParams } from 'next/navigation'

const AdminFormsList: React.FC = () => {
	const router = useRouter()
	const { clientUrl } = useAdmin()
	const { apiUrl } = useAdmin()

	const handleClick = (form) => {
		router.push(`${clientUrl}/users/forms/${form.handle}/questions`)
	}

	return (
		<ResourceList
			selectable
			url={`${apiUrl}/forms`}
			name={'form'}
			enableSearch
			enableEdit
			enableDelete
			enableCreate
			handleClick={handleClick}
			sortOptions={[
				{ name: 'title', label: 'Title' },
				{ name: 'created_at', label: 'Date' },
			]}
			create={AdminFormCreate}
			edit={AdminFormEdit}
			show={AdminFormShow}
			toolbar={AdminFormToolbar}
			component={AdminFormItem}
			emptyIcon="Text"
			emptyTitle="No forms"
			emptyDescription="No forms added yet."
		/>
	)
}

export default AdminFormsList
