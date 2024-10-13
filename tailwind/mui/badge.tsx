'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'

type BadgeVariant = 'standard' | 'dot'
type BadgeColor =
	| 'primary'
	| 'secondary'
	| 'error'
	| 'info'
	| 'success'
	| 'warning'

interface BadgeProps {
	children: React.ReactNode
	badgeContent?: React.ReactNode
	variant?: BadgeVariant
	color?: BadgeColor
	max?: number
	showZero?: boolean
	invisible?: boolean
	className?: string
	badgeClassName?: string
}

const colorClasses: Record<BadgeColor, string> = {
	primary: 'bg-primary text-primary-foreground',
	secondary: 'bg-secondary text-secondary-foreground',
	error: 'bg-destructive text-destructive-foreground',
	info: 'bg-info text-info-foreground',
	success: 'bg-success text-success-foreground',
	warning: 'bg-warning text-warning-foreground',
}

const Badge: React.FC<BadgeProps> = ({
	children,
	badgeContent,
	variant = 'standard',
	color = 'primary',
	max = 99,
	showZero = false,
	invisible = false,
	className,
	badgeClassName,
}) => {
	const badgeValue =
		typeof badgeContent === 'number' && badgeContent > max
			? `${max}+`
			: badgeContent

	const shouldShow = !invisible && (showZero || badgeContent !== 0)

	const badgeClasses = cn(
		'absolute -top-2 -right-2 flex items-center justify-center',
		variant === 'standard'
			? 'min-w-[20px] h-5 px-1 rounded-full text-xs font-bold'
			: 'w-3 h-3 rounded-full',
		colorClasses[color],
		!shouldShow && 'opacity-0',
		badgeClassName
	)

	return (
		<div className={cn('relative inline-flex', className)}>
			{children}
			{shouldShow && (
				<span className={badgeClasses}>
					{variant === 'standard' && badgeValue}
				</span>
			)}
		</div>
	)
}

export { Badge }
