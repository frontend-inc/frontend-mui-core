'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'
import { Loader2 } from 'lucide-react'

interface CircularProgressProps {
	size?: 'sm' | 'md' | 'lg'
	color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
	thickness?: number
	value?: number
	variant?: 'determinate' | 'indeterminate'
	className?: string
}

const sizeClasses = {
	sm: 'w-4 h-4',
	md: 'w-8 h-8',
	lg: 'w-12 h-12',
}

const colorClasses = {
	primary: 'text-primary',
	secondary: 'text-secondary',
	success: 'text-success',
	error: 'text-destructive',
	warning: 'text-warning',
	info: 'text-info',
}

const CircularProgress: React.FC<CircularProgressProps> = ({
	size = 'md',
	color = 'primary',
	thickness = 4,
	value = 0,
	variant = 'indeterminate',
	className,
}) => {
	const sizeClass = sizeClasses[size]
	const colorClass = colorClasses[color]

	if (variant === 'indeterminate') {
		return (
			<Loader2
				className={cn('animate-spin', sizeClass, colorClass, className)}
			/>
		)
	}

	const circumference = 2 * Math.PI * 16 // Assuming a default SVG size of 32x32 with a radius of 16
	const strokeDasharray = circumference
	const strokeDashoffset = circumference - (value / 100) * circumference

	return (
		<svg className={cn(sizeClass, colorClass, className)} viewBox="0 0 32 32">
			<circle
				className="opacity-25"
				cx="16"
				cy="16"
				r="14"
				fill="none"
				stroke="currentColor"
				strokeWidth={thickness}
			/>
			<circle
				className="opacity-75"
				cx="16"
				cy="16"
				r="14"
				fill="none"
				stroke="currentColor"
				strokeWidth={thickness}
				strokeDasharray={strokeDasharray}
				strokeDashoffset={strokeDashoffset}
				transform="rotate(-90 16 16)"
			/>
		</svg>
	)
}

export { CircularProgress }
