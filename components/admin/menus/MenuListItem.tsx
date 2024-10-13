import React from 'react'
import { cn } from '../../../shadcn/lib/utils'
import { Button } from '../../../shadcn/ui/button'
import { Typography } from '../../../tailwind'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../../../shadcn/ui/dropdown-menu'
import { MoreVertical, Pencil, Trash } from 'lucide-react'
import { Icon } from '../../../components'

interface SidebarMenuItemProps {
	title: string
	icon?: string
	color?: string
	selected?: boolean
  description?: string
	secondaryActions?: React.ReactNode
	handleClick: () => void
	handleEdit?: () => void
	handleDelete?: () => void
}

export default function SidebarMenuItem({
	selected = false,
	title,
	color = 'bg-transparent',
	icon,
	secondaryActions,
	handleClick,
	handleEdit,
	handleDelete,
}: SidebarMenuItemProps) {
	return (
		<div
			className={cn(
				'flex items-center justify-between py-2 pl-4 px-2 hover:bg-white/10 rounded-md group',
				selected && 'bg-white/10 text-foreground'
			)}
		>
			<button
				onClick={handleClick}
				className="w-full flex gap-2 items-center focus:outline-none"
			>
				{icon && (
					<div
						className={cn(
							color,
							'h-8 w-8 rounded-md flex items-center justify-center'
						)}
					>
						<Icon name={icon} className="w-5 h-5 text-foreground" />
					</div>
				)}
				<Typography variant="body2">{title}</Typography>
			</button>
			{(handleEdit || handleDelete) && (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreVertical className="h-4 w-4 text-foreground" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-[160px]">
						{secondaryActions}
						{handleEdit && (
							<DropdownMenuItem onClick={handleEdit}>
								<Pencil className="mr-2 h-4 w-4" />
								<span>Edit</span>
							</DropdownMenuItem>
						)}
						{handleDelete && (
							<DropdownMenuItem onClick={handleDelete}>
								<Trash className="mr-2 h-4 w-4" />
								<span>Delete</span>
							</DropdownMenuItem>
						)}
					</DropdownMenuContent>
				</DropdownMenu>
			)}
		</div>
	)
}
