'use client'

import React from 'react'
import { UserAvatar } from '../../components'
import { useAuth } from 'frontend-js'
import { Button } from '../../shadcn/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../../shadcn/ui/dropdown-menu'
import { LogOut } from 'lucide-react'

type UserMenuProps = {
	handleLogoutClick: () => void
	children?: React.ReactNode
	handleClick: () => void
}

const UserMenu: React.FC<UserMenuProps> = ({
	handleLogoutClick,
	handleClick,
	children,
}) => {
	const { currentUser } = useAuth()

	return (
		<div className="flex w-full justify-center">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="h-8 w-8 rounded-full">
						<UserAvatar size={36} user={currentUser} />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56" align="end" forceMount>
					<DropdownMenuItem onClick={handleClick}>
						<div className="flex items-center">
							<span className="text-sm font-medium">{currentUser?.name}</span>
						</div>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={handleLogoutClick}>
						<LogOut className="mr-2 h-4 w-4" />
						<span>Sign Out</span>
					</DropdownMenuItem>
					{children}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default UserMenu
