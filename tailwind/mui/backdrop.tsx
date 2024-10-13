'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'

interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
	open: boolean
	onClick?: () => void
	color?: string
}

const Backdrop = ({
	children,
	open,
	color = 'rgba(0, 0, 0, 0.6)',
	onClick,
	className,
	...props
}: BackdropProps) => {
	if (!open) return null

	return (
		<div
			onClick={onClick ? onClick : undefined}
			className={cn(
				'fixed inset-0 z-50 flex items-center justify-center',
				'transition-opacity duration-300 ease-in-out',
				open ? 'opacity-100' : 'opacity-0 pointer-events-none',
				className
			)}
			style={{ backgroundColor: color }}
			{...props}
		>
			{children}
		</div>
	)
}

export { Backdrop }
