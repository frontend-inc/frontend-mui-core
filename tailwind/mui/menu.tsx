'use client'

import React from 'react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../../shadcn/ui/dropdown-menu'
import { Button } from '../../shadcn/ui/button'
import { cn } from '../../shadcn/lib/utils'

interface MenuProps {
	children: React.ReactNode
	trigger: React.ReactNode
	className?: string
}

interface MenuItemProps {
	children: React.ReactNode
	onClick?: () => void
	disabled?: boolean
	className?: string
}

const Menu: React.FC<MenuProps> = ({ children, trigger, className }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
			<DropdownMenuContent className={cn('min-w-[200px]', className)}>
				{children}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

const MenuItem: React.FC<MenuItemProps> = ({
	children,
	onClick,
	disabled,
	className,
}) => {
	return (
		<DropdownMenuItem
			onClick={onClick}
			disabled={disabled}
			className={cn('cursor-pointer', className)}
		>
			{children}
		</DropdownMenuItem>
	)
}

export { Menu, MenuItem }
