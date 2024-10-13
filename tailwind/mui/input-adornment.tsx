'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'

interface InputAdornmentProps {
	children: React.ReactNode
	position?: 'start' | 'end'
	className?: string
}

const InputAdornment: React.FC<InputAdornmentProps> = ({
	children,
	position = 'start',
	className,
}) => {
	return (
		<div
			className={cn(
				'flex items-center',
				position === 'start' ? 'mr-2' : 'ml-2',
				className
			)}
		>
			{children}
		</div>
	)
}

export { InputAdornment }
