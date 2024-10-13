'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'
import { X } from 'lucide-react'

type ChipVariant = 'filled' | 'outlined'
type ChipColor = 'default' | 'primary' | 'secondary' | 'destructive'
type ChipSize = 'small' | 'medium'

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
	label: string
	variant?: ChipVariant
	color?: ChipColor
	size?: ChipSize
	onDelete?: () => void
	icon?: React.ReactNode
	clickable?: boolean
}

const Chip: React.FC<ChipProps> = ({
	label,
	variant = 'filled',
	color = 'default',
	size = 'medium',
	onDelete,
	icon,
	clickable = false,
	className,
	...props
}) => {
	const baseClasses = cn(
		'inline-flex items-center rounded-full font-medium',
		{
			'text-sm px-2 py-1': size === 'small',
			'text-base px-3 py-1.5': size === 'medium',
			'cursor-pointer': clickable,
		},
		getColorClasses(color, variant),
		className
	)

	return (
		<div className={baseClasses} {...props}>
			{icon && <span className="mr-1.5">{icon}</span>}
			{label}
			{onDelete && (
				<button
					onClick={onDelete}
					className={cn(
						'ml-1.5 rounded-full p-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2',
						{
							'hover:bg-primary/10 focus:ring-primary/30': color === 'primary',
							'hover:bg-secondary/10 focus:ring-secondary/30':
								color === 'secondary',
							'hover:bg-destructive/10 focus:ring-destructive/30':
								color === 'destructive',
							'hover:bg-muted/10 focus:ring-muted/30': color === 'default',
						}
					)}
					aria-label="Remove"
				>
					<X size={size === 'small' ? 14 : 18} />
				</button>
			)}
		</div>
	)
}

function getColorClasses(color: ChipColor, variant: ChipVariant): string {
	const colorMap: Record<ChipColor, string> = {
		default:
			variant === 'filled'
				? 'bg-muted text-muted-foreground'
				: 'border border-input text-muted-foreground',
		primary:
			variant === 'filled'
				? 'bg-primary text-primary-foreground'
				: 'border border-primary text-primary',
		secondary:
			variant === 'filled'
				? 'bg-secondary text-secondary-foreground'
				: 'border border-secondary text-secondary',
		destructive:
			variant === 'filled'
				? 'bg-destructive text-destructive-foreground'
				: 'border border-destructive text-destructive',
	}

	return colorMap[color]
}

export { Chip }
