'use client'

import React, { useState } from 'react'
import { Drawer, ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminMenuItem, AdminMenuLinkList } from '../../../containers'
import { AdminMenuType } from '../../../types'
import AdminMenuForm from './AdminMenuForm'

const AdminMenuList = () => {
	const { apiUrl } = useAdmin()
	const [open, setOpen] = useState(false)
	const [activeMenu, setActiveMenu] = useState<AdminMenuType>()

	const handleClick = (menu) => {
		setActiveMenu(menu)
		setOpen(true)
	}

	return (
		<>
			<ResourceList
				sortable
				enableBorder
				url={`${apiUrl}/menus`}
				name="menu"
				enableCreate
				enableEdit
				enableSearch
				enableDelete
				handleClick={handleClick}
				query={{
					sort_by: 'position',
					sort_direction: 'asc',
				}}
				edit={AdminMenuForm}
				create={AdminMenuForm}
				component={AdminMenuItem}
				emptyIcon="FolderTree"
				emptyTitle="No menus"
				emptyDescription="No menus yet."
			/>
			<Drawer
				mode="editor"
				open={open}
				handleClose={() => setOpen(false)}
				title={activeMenu?.label}
			>
				{activeMenu?.id && (
					<AdminMenuLinkList
						menuId={activeMenu?.id}
						handleClick={handleClick}
					/>
				)}
			</Drawer>
		</>
	)
}
export default AdminMenuList
