'use client'

import React from 'react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../../../shadcn/ui/dropdown-menu'
import { Button } from '../../../shadcn/ui/button'
import { MoreHorizontal } from 'lucide-react'

type AdminToolbarMenuProps = {
	handleSaveView: () => void
}

const AdminToolbarMenu: React.FC<AdminToolbarMenuProps> = (props) => {
	const { handleSaveView } = props

	const onSaveView = () => {
		handleSaveView()
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0">
					<span className="sr-only">Open menu</span>
					<MoreHorizontal className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={onSaveView}>Save view</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default AdminToolbarMenu
