'use client'

import React from 'react'
import { Typography } from '../../../tailwind'
import { cn } from '../../../shadcn/lib/utils'

type TabItemProps = {
	title: string
	description: string
	image?: string
	active: boolean
}

const TabItem: React.FC<TabItemProps> = ({
	title,
	description,
	image,
	active = false,
}) => {
	if (!active) return null

	return (
		<div
			className={cn(
				'flex flex-col-reverse sm:flex-row gap-8 px-4',
				'items-start sm:items-center'
			)}
		>
			{image && (
				<div className="w-64 h-64 overflow-hidden">
					<img
						alt={title}
						src={image}
						height={256}
						width={256}
						className="w-full h-full object-contain"
					/>
				</div>
			)}
			<div className="flex flex-col gap-4 w-full">
				<Typography variant="subtitle1" >
					{title}
				</Typography>
				<Typography variant="body1" className="text-muted-foreground">
					{description}
				</Typography>
			</div>
		</div>
	)
}

export default TabItem
