'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminUserItem from './AdminUserItem'
import AdminUserForm from './AdminUserForm'
import AdminUserEditForm from './AdminUserEditForm'
import AdminUserShow from './AdminUserShow'
import { MetafieldType } from '../../../types'

type AdminUserListProps = {
	metafields?: MetafieldType[]
}

const AdminUsersList: React.FC<AdminUserListProps> = (props) => {
	const { apiUrl } = useAdmin()
	const { metafields = [] } = props

	return (
		<ResourceList
			url={`${apiUrl}/users`}
			name={'user'}
			enableSearch
			enableShow
			enableEdit
			enableDelete
			enableCreate
			sortOptions={[
				{ name: 'first_name', label: 'First Name' },
				{ name: 'last_name', label: 'Last Name' },
				{ name: 'username', label: 'Username' },
				{ name: 'created_at', label: 'Date' },
			]}
			fields={[
				{ name: 'image', label: 'Logo', variant: 'image' },
				{ name: 'name', label: 'Name', variant: 'string' },
			]}
			create={AdminUserForm}
			edit={AdminUserEditForm}
			show={AdminUserShow}
			component={AdminUserItem}
			slots={{
				edit: {
					metafields,
				},
				show: {
					metafields,
				},
			}}
		/>
	)
}

export default AdminUsersList
