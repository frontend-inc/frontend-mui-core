'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'

interface DividerProps {
	orientation?: 'horizontal' | 'vertical'
	variant?: 'fullWidth' | 'inset' | 'middle'
	className?: string
	children?: React.ReactNode
}

const Divider: React.FC<DividerProps> = ({
	orientation = 'horizontal',
	variant = 'fullWidth',
	className,
	children,
}) => {
	const isVertical = orientation === 'vertical'
	const hasChildren = !!children

	const dividerClasses = cn(
		'bg-border',
		isVertical ? 'h-auto w-px' : 'h-px w-full',
		variant === 'inset' && 'mx-4',
		variant === 'middle' && 'mx-2',
		hasChildren && 'flex items-center',
		isVertical && hasChildren && 'flex-col',
		className
	)

	const childWrapperClasses = cn('px-2', isVertical ? 'py-4' : '')

	if (hasChildren) {
		return (
			<div className={dividerClasses} role="separator">
				<div className={`flex-grow ${isVertical ? 'h-full' : 'w-full'}`} />
				<div className={childWrapperClasses}>{children}</div>
				<div className={`flex-grow ${isVertical ? 'h-full' : 'w-full'}`} />
			</div>
		)
	}

	return <div className={dividerClasses} role="separator" />
}

export { Divider }
