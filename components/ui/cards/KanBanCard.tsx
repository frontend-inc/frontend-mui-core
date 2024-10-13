'use client'

import React from 'react'
import { Button } from '../../../shadcn/ui/button'
import { Card, CardContent, CardFooter } from '../../../shadcn/ui/card'
import { Image } from '../../../components'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { cn } from '../../../shadcn/lib/utils'

export type CardProps = {
	id: string
	loading?: boolean
	label?: string
	primary: string
	secondary?: string
	secondaryAction?: React.ReactNode
	handleClick?: () => void
	image?: string
	actions?: React.ReactNode
	enableDragging?: boolean
	height?: number
	slots?: {
		item?: React.HTMLAttributes<HTMLDivElement>
		image?: React.ComponentProps<typeof Image>
	}
}

const KanBanCard: React.FC<CardProps> = (props) => {
	const {
		id,
		loading,
		label,
		primary,
		secondary,
		secondaryAction,
		handleClick,
		image,
		enableDragging,
		height = 240,
		slots = {
			item: {},
			image: {},
		},
	} = props

	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({
			id: id,
		})

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	}

	return (
		<Card
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
			className={cn(
				'w-[260px] my-1 cursor-pointer overflow-hidden transition-shadow duration-300 hover:shadow-md',
				loading && 'opacity-50',
				enableDragging && 'shadow-md rotate-3'
			)}
			{...slots.item}
		>
			{image && (
				<div className="overflow-hidden rounded-t-lg">
					<Image
						label={label}
						src={image}
						height={height}
						alt={primary}
						handleClick={handleClick}
						className="w-full object-cover"
						{...slots.image}
					/>
				</div>
			)}
			<CardContent className="p-4">
				<h3 className="text-lg font-semibold text-primary mb-1">{primary}</h3>
				{secondary && (
					<p className="text-sm text-muted-foreground">{secondary}</p>
				)}
			</CardContent>
			<CardFooter className="flex justify-between p-4">
				<Button
					onClick={handleClick}
					size="sm"
					variant="secondary"
					className="uppercase"
				>
					Details
				</Button>
				{secondaryAction && (
					<div className="flex items-end">{secondaryAction}</div>
				)}
			</CardFooter>
		</Card>
	)
}

export default KanBanCard
