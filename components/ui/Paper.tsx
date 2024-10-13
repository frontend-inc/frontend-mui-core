'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'

type PaperProps = {
	children: React.ReactNode
	className?: string
	p?: number
}

const Paper: React.FC<PaperProps> = ({
	children,
	className,
	p = 2,
	...props
}) => {
	return (
		<div
			className={cn(
				'w-full rounded bg-background border border-border shadow-none',
				`p-${p}`,
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
}

export default Paper
