import React from 'react'
import { cn } from '../../../shadcn/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '../../../shadcn/ui/avatar'
import { Checkbox } from '../../../shadcn/ui/checkbox'
import { Button } from '../../../shadcn/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../../../shadcn/ui/dropdown-menu'
import { GripVertical, MoreVertical } from 'lucide-react'
import { Typography } from '../../../tailwind'
import { Image, Icon } from '../../../components'

export type ResourceListItemProps = {
	selectable?: boolean
	selected?: boolean
	primary: React.ReactNode
	secondary?: React.ReactNode
	avatar?: React.ReactNode
	icon?: string
	color?: string
	image?: string
	handleClick?: (resource: any) => void
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	handleSelect?: () => void
  handleReload?: () => void
	secondaryAction?: React.ReactNode
	menuActions?: React.ReactNode
	sortable?: boolean
	isDragging?: boolean
	enableBorder?: boolean
}

export default function ResourceListItem({
	icon,
	avatar,
	color,
	primary,
	secondary,
	image,
	handleClick,
	handleEdit,
	handleDelete,
	handleSelect,
	secondaryAction,
	menuActions,
	sortable,
	selectable,
	selected,
	enableBorder = true,
}: ResourceListItemProps) {
	return (
		<div
			className={cn(
				'bg-background border border-border hover:bg-white/10 p-1 rounded-lg overflow-hidden ',
				enableBorder &&
					'border-border hover:shadow-md mb-1 transition-shadow duration-200',
				selected && 'border-primary'
			)}
		>
			<div className="flex items-center p-1 rounded space-x-4">
				{sortable && (
					<GripVertical className="w-5 h-5 text-muted-foreground cursor-grab active:cursor-grabbing" />
				)}
				{selectable && (
					<Checkbox checked={selected} onCheckedChange={handleSelect} />
				)}
				{avatar && <div className="mr-2">{avatar}</div>}
				{image && (
					<div className="mr-2 w-[72px] h-[72px]">
						<button
							className="w-full h-full focus:outline-none focus:ring-2"
							onClick={handleClick}
						>
							<Image src={image} aspectRatio={1.0} alt={image} />
						</button>
					</div>
				)}
				{icon && (
					<button
						className="focus:outline-none focus:ring-2"
						onClick={handleClick}
					>
						<Avatar className='mr-2 rounded'>
							<AvatarFallback className={color}>
								<Icon name={icon} />
							</AvatarFallback>
						</Avatar>
					</button>
				)}
				<div className="flex-grow cursor-pointer" onClick={handleClick}>
					<Typography variant="body1">{primary}</Typography>
					{secondary && (
						<Typography variant="body2" color="text.secondary">
							{secondary}
						</Typography>
					)}
				</div>
				<div className="flex items-center space-x-1">
					{secondaryAction}
					{(menuActions || handleEdit || handleDelete) && (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" className="h-8 w-8 p-0">
									<span className="sr-only">Open menu</span>
									<MoreVertical className="h-4 w-4 text-foreground" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								{menuActions}
								{handleEdit && (
									<DropdownMenuItem onClick={() => handleEdit({})}>
										Edit
									</DropdownMenuItem>
								)}
								{handleDelete && (
									<DropdownMenuItem onClick={() => handleDelete({})}>
										Delete
									</DropdownMenuItem>
								)}
							</DropdownMenuContent>
						</DropdownMenu>
					)}
				</div>
			</div>
		</div>
	)
}
