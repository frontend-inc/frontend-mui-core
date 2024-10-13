'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'

type ContainerMaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	maxWidth?: ContainerMaxWidth
	disableGutters?: boolean
	fixed?: boolean
}

const maxWidthClasses: Record<ContainerMaxWidth, string> = {
	xs: 'max-w-screen-xs',
	sm: 'max-w-screen-sm',
	md: 'max-w-screen-md',
	lg: 'max-w-screen-lg',
	xl: 'max-w-screen-xl',
}

function Container({
	maxWidth = 'lg',
	disableGutters = false,
	fixed = false,
	className,
	children,
	...props
}: ContainerProps) {
	return (
		<div
			className={cn(
				'w-full mx-auto',
				maxWidthClasses[maxWidth],
				!disableGutters && 'px-4 sm:px-6 md:px-8',
				fixed && 'fixed left-0 right-0',
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
}
export { Container }
