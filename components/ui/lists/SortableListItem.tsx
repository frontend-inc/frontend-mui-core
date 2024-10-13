'use client'

import React from 'react'
import { Typography } from '../../../tailwind'
import { cn } from '../../../shadcn/lib/utils'
import { GripVertical } from 'lucide-react'

type SortableListItemProps = {
	primary?: string | React.ReactNode
	secondary?: string | React.ReactNode
	isDragging?: boolean
}

export default function SortableListItem({
	primary,
	secondary,
	isDragging,
}: SortableListItemProps) {
	return (
		<div
			className={cn(
				'flex items-center p-4 transition-colors duration-200',
				isDragging && 'bg-secondary'
			)}
		>
			<div className="mr-4 cursor-grab active:cursor-grabbing">
				<GripVertical className="h-5 w-5 text-muted-foreground" />
			</div>
			<div className="flex-grow">
				<Typography variant="body1">{primary}</Typography>
				{secondary && <Typography variant="body2">{secondary}</Typography>}
			</div>
		</div>
	)
}
