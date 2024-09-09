import React from 'react'
import { AdminLayoutLeft, MenuList, MenuListItem } from '../../../components'
import { AdminMenusType } from '../../../types'

type AdminMenuItemsProps = {
	menuItems: AdminMenusType
	activeMenu: string
	enableEdit?: boolean
	enableDelete?: boolean
	handleClick: (menuItem: any) => void
	handleEdit?: (menuItem: any) => void
	handleDelete?: (menuItem: any) => void
}

const AdminMenusItems: React.FC<AdminMenuItemsProps> = (props) => {
	const {
		menuItems = {},
		activeMenu,
		enableEdit,
		enableDelete,
		handleClick,
		handleEdit,
		handleDelete,
	} = props || {}

	if (Object.keys(menuItems)?.length === 0) return null
	return (
		<>
			{Object.keys(menuItems).map((key, index) => (
				<MenuList label={key} enableBorder={index !== 0}>
					{menuItems[key]?.map((menuItem) => (
						<MenuListItem
							key={menuItem.value}
							title={menuItem.label}
							icon={menuItem.icon}
							handleClick={() => handleClick(menuItem)}
							handleDelete={enableDelete ? handleDelete : null}
							handleEdit={enableEdit ? handleEdit : null}
							selected={activeMenu === menuItem.value}
						/>
					))}
				</MenuList>
			))}
		</>
	)
}

export default AdminMenusItems
