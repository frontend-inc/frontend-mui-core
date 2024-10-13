'use client'

import React from 'react'
import { useMenu } from '../../hooks'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../../shadcn/ui/dropdown-menu'
import { Button } from '../../shadcn/ui/button'
import { MoreVertical, Pencil, Trash } from 'lucide-react'

type MenuButtonProps = {
	children?: React.ReactNode
	icon?: string
	color?: string
	size?: 'small' | 'medium' | 'large'
	enableIcons?: boolean
	handleEdit?: false | ((item: any) => void)
	handleDelete?: false | ((item: any) => void)
}

const MenuButton: React.FC<MenuButtonProps> = (props) => {
	const { children, handleEdit, handleDelete } = props

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0">
					<span className="sr-only">Open menu</span>
					<MoreVertical className="h-4 w-4 text-foreground" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[100px]">
				{children}
				{handleEdit && (
					<DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
				)}
				{handleDelete && (
					<DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default MenuButton
