'use client'

import React, { forwardRef } from 'react'
import { cn } from '../../shadcn/lib/utils'

interface CardActionAreaProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	className?: string
	disabled?: boolean
}

const CardActionArea = forwardRef<HTMLButtonElement, CardActionAreaProps>(
	({ children, className, disabled = false, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(
					'w-full text-left',
					'transition-colors duration-200',
					'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
					'disabled:pointer-events-none disabled:opacity-50',
					!disabled && 'hover:bg-accent hover:text-accent-foreground',
					className
				)}
				disabled={disabled}
				{...props}
			>
				<span className="absolute inset-0" aria-hidden="true" />
				{children}
			</button>
		)
	}
)

CardActionArea.displayName = 'CardActionArea'

export { CardActionArea }
