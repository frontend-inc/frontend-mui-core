'use client'

import React from 'react'
import { cn } from '../../../shadcn/lib/utils'
import {
	Card,
	CardHeader,
	CardContent,
	CardFooter,
} from '../../../shadcn/ui/card'
import { Checkbox } from '../../../shadcn/ui/checkbox'
import { Button } from '../../../shadcn/ui/button'
import { Typography } from '../../../tailwind'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../../../shadcn/ui/dropdown-menu'
import { MoreVertical } from 'lucide-react'
import Image from 'next/image'

export type ResourceGridItemProps = {
	selectable?: boolean
	selected?: boolean
	primary?: React.ReactNode
	secondary?: React.ReactNode
	avatar?: React.ReactNode
	icon?: string
	color?: string
	label?: string
	image?: string
	handleClick?: (resource: any) => void
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	handleSelect?: () => void
	secondaryAction?: React.ReactNode
	menuActions?: React.ReactNode
	sortable?: boolean
	isDragging?: boolean
	enableBorder?: boolean
	slots?: {
		image?: any
	}
}

export default function ResourceGridItem({
	selectable,
	selected,
	primary,
	secondary,
	avatar,
	label,
	image,
	handleClick,
	handleEdit,
	handleDelete,
	handleSelect,
	secondaryAction,
	menuActions,
	enableBorder = false,
	slots = {},
}: ResourceGridItemProps) {
	return (
		<Card
			className={cn(
				'overflow-hidden bg-background',
				'border border-transparent',
				enableBorder &&
					'border-border hover:shadow-md transition-shadow duration-200',
				selected && 'border-primary'
			)}
		>
			<CardHeader className="h-[50px] p-2 flex justify-between items-center">
				{selectable && (
					<Checkbox checked={selected} onCheckedChange={handleSelect} />
				)}
				{avatar}
				<div className="flex flex-row justify-between w-full space-x-1">
					{secondaryAction}
					{(menuActions || handleEdit || handleDelete) && (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" className="h-8 w-8 p-0">
									<span className="sr-only">Open menu</span>
									<MoreVertical className="h-4 w-4" />
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
			</CardHeader>
			<div
				className="overflow-hidden h-40 flex items-center justify-center cursor-pointer"
				onClick={handleClick}
			>
				{image && (
					<Image
						src={image}
						alt={label || 'Resource image'}
						width={320}
						height={160}
						className="object-cover w-full h-full"
						{...slots.image}
					/>
				)}
			</div>
			{(primary || secondary) && (
				<CardContent className="p-4">
					<Typography variant="body1">{primary}</Typography>
					{secondary && <Typography variant="body2">{secondary}</Typography>}
				</CardContent>
			)}
		</Card>
	)
}
