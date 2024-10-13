'use client'

import React from 'react'
import {
	AdminHeader,
	AdminMenu,
	AdminLayoutScroll,
	AdminLayoutLeft,
	AdminLayoutCenter,
} from '../../../components'
import { AdminMenusType, AdminMenuType } from '../../../types'
import { useAdmin, useTabs } from '../../../hooks'
import { useRouter, useParams } from 'next/navigation'
import { cn } from '../../../shadcn/lib/utils'

export type AdminPageProps = {
	title: string
	actions?: React.ReactNode
	activeTab: string
	activeMenu: string
	menuItems?: AdminMenusType
	enableEdit?: boolean
	enableDelete?: boolean
	handleEdit: (menuItem: AdminMenuType) => void
	handleDelete: (menuItem: AdminMenuType) => void
	disablePadding?: boolean
	leftPanel?: React.FC
	children: React.ReactNode
}

const AdminPage: React.FC<AdminPageProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useAdmin()

	const {
		title,
		actions,
		activeTab,
		activeMenu,
		menuItems,
		enableEdit,
		enableDelete,
		handleEdit,
		handleDelete,
		disablePadding = false,
		children,
	} = props || {}

	useTabs(activeTab)

	const handleClick = (menuItem) => {    
		router.push(`${clientUrl}${menuItem.value}`)
	}

	return (
		<>
			{menuItems && (
				<AdminLayoutLeft>
					<AdminMenu
						enableEdit={enableEdit}
						enableDelete={enableDelete}
						activeMenu={activeMenu}
						menuItems={menuItems}
						handleClick={handleClick}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
					/>
				</AdminLayoutLeft>
			)}
			<AdminLayoutCenter>
				<AdminHeader title={title} buttons={actions} enableExpandLeftPanel />
				<AdminLayoutScroll>
					<div className={cn(disablePadding ? 'p-0' : 'p-4')}>{children}</div>
				</AdminLayoutScroll>
			</AdminLayoutCenter>
		</>
	)
}

export default AdminPage
