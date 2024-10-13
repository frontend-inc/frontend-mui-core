'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'

interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
	disableGutters?: boolean
	variant?: 'regular' | 'dense'
}

const Toolbar: React.FC<ToolbarProps> = ({
	children,
	disableGutters = false,
	variant = 'regular',
	className,
	...props
}) => {
	return (
		<div
			className={cn(
				'flex items-center',
				variant === 'regular' ? 'min-h-[64px]' : 'min-h-[48px]',
				!disableGutters && 'px-4',
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
}

export { Toolbar }
