'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'

interface LinearProgressProps {
	value?: number
	variant?: 'determinate' | 'indeterminate'
	color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
	className?: string
}

const colorClasses = {
	primary: 'bg-primary',
	secondary: 'bg-secondary',
	success: 'bg-success',
	error: 'bg-destructive',
	warning: 'bg-warning',
	info: 'bg-info',
}

const LinearProgress: React.FC<LinearProgressProps> = ({
	value = 0,
	variant = 'determinate',
	color = 'primary',
	className,
}) => {
	const colorClass = colorClasses[color]

	return (
		<div
			role="progressbar"
			aria-valuenow={variant === 'determinate' ? value : undefined}
			aria-valuemin={0}
			aria-valuemax={100}
			className={cn('w-full h-1 bg-secondary/20 overflow-hidden', className)}
		>
			<div
				className={cn(
					colorClass,
					'h-full transition-all duration-300 ease-in-out',
					variant === 'indeterminate' && 'animate-indeterminate-progress'
				)}
				style={{
					width: variant === 'determinate' ? `${value}%` : '100%',
				}}
			/>
		</div>
	)
}

export { LinearProgress }
