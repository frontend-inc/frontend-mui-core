import React from 'react'
import { useAuth } from 'frontend-js'
import { UserAvatar, Icon } from '../../../components'
import { Button } from '../../../shadcn/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../../../shadcn/ui/dropdown-menu'

type AuthMenuProps = {
	open: boolean
	anchorEl: HTMLElement | null
	toggleMenu: (e: React.MouseEvent<HTMLElement>) => void
	handleLogin: () => void
	handleLogout: () => void
	handleSignup: () => void
	handleMyAccount: () => void
	handleClick: (path: string) => void
}

const AuthMenu: React.FC<AuthMenuProps> = ({
	open,
	anchorEl,
	toggleMenu,
	handleLogout,
	handleLogin,
	handleSignup,
	handleMyAccount,
}) => {
	const { currentUser } = useAuth()

	return (
		<DropdownMenu
			open={open}
			onOpenChange={(isOpen) => !isOpen && toggleMenu(null as any)}
		>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 rounded-full">
					<UserAvatar size={32} user={currentUser} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end" forceMount>
				{currentUser ? (
					<>
						<DropdownMenuLabel className="font-normal">
							<div className="flex flex-col space-y-1">
								<p className="text-sm font-medium leading-none">
									{currentUser.username}
								</p>
								<p className="text-xs leading-none text-muted-foreground">
									{currentUser.email}
								</p>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem onClick={handleMyAccount}>
								<Icon name="User" className="mr-2 h-4 w-4" />
								<span>My Account</span>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem onClick={handleLogout}>
							<Icon name="LogOut" className="mr-2 h-4 w-4" />
							<span>Log out</span>
						</DropdownMenuItem>
					</>
				) : (
					<>
						<DropdownMenuItem onClick={handleLogin}>
							<Icon name="LogIn" className="mr-2 h-4 w-4" />
							<span>Sign In</span>
						</DropdownMenuItem>
						<DropdownMenuItem onClick={handleSignup}>
							<Icon name="UserPlus" className="mr-2 h-4 w-4" />
							<span>Sign Up</span>
						</DropdownMenuItem>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default AuthMenu
