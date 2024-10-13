'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
	container?: boolean
	item?: boolean
	children: React.ReactNode
}

const Grid: React.FC<GridProps> = ({
	container = false,
	item = false,
	children,
	className,
	...props
}) => {
	const containerClasses = container ? 'w-full flex flex-wrap' : ''

	const itemClasses = item ? `w-full sm:1-1/2 md:w-1/3 lg:w-1/3 p-4` : ''

	return (
		<div
			className={cn(
				containerClasses,

				itemClasses,
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
}

export { Grid }
