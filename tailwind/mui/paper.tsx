'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'

interface PaperProps {
	borderRadius: 0 | 8
	children: React.ReactNode
}

const Paper: React.FC<PaperProps> = ({ borderRadius, children }) => {
	return (
		<div
			className={cn(
				'bg-primary text-primary p-4',
				borderRadius === 0 ? 'rounded-none' : 'rounded-lg'
			)}
		>
			{children}
		</div>
	)
}

export default Paper
