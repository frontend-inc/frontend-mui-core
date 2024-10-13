'use client'

import React from 'react'
import { Badge } from '../../shadcn/ui/badge'
import { cn } from '../../shadcn/lib/utils'

interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
	label: string
	variant?: 'default' | 'secondary' | 'outline' | 'destructive'
}

export function Label({
	label,
	variant = 'default',
	className,
	...props
}: LabelProps) {
	return (
		<Badge variant={variant} className={className} {...props}>
			{label}
		</Badge>
	)
}
