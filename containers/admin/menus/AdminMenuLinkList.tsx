'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminMenuLinkItem } from '../..'
import { AdminMenuType } from '../../../types'
import AdminMenuLinkForm from './AdminMenuLinkForm'

type AdminMenuListProps = {
	menuId: number
	handleClick: (menu: AdminMenuType) => void
}

const AdminMenuLinkList: React.FC<AdminMenuListProps> = (props) => {
	const { menuId, handleClick } = props || {}

	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			sortable
			enableBorder
			direction="column"
			url={`${apiUrl}/menus/${menuId}/links`}
			name="link"
			enableCreate
			enableEdit
			enableSearch
			enableDelete
			handleClick={handleClick}
			query={{
				sort_by: 'position',
				sort_direction: 'asc',
			}}
			edit={AdminMenuLinkForm}
			create={AdminMenuLinkForm}
			component={AdminMenuLinkItem}
			emptyIcon="Link"
			emptyTitle="No links"
			emptyDescription="No links yet."
		/>
	)
}
export default AdminMenuLinkList
