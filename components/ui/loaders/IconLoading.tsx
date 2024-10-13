'use client'

import React from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '../../../shadcn/lib/utils'

type IconLoadingProps = {
	color?: string
	size?: number
	className?: string
}

export default function IconLoading({
	size = 20,
	color = 'text-secondary',
	className,
}: IconLoadingProps) {
	return (
		<Loader2 className={cn('animate-spin', color, className)} size={size} />
	)
}
