'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'
import {
	Tooltip as ShadcnTooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '../../shadcn/ui/tooltip'

interface TooltipProps {
	children: React.ReactNode
	title: React.ReactNode
	placement?: 'top' | 'bottom' | 'left' | 'right'
	arrow?: boolean
	className?: string
	contentClassName?: string
}

export const Tooltip: React.FC<TooltipProps> = ({
	children,
	title,
	placement = 'top',
	arrow = true,
	className,
	contentClassName,
}) => {
	return (
		<TooltipProvider>
			<ShadcnTooltip delayDuration={300}>
				<TooltipTrigger asChild>
					<span className={cn('inline-block', className)}>{children}</span>
				</TooltipTrigger>
				<TooltipContent
					side={placement}
					sideOffset={5}
					className={cn(
						'z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95',
						arrow &&
							'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
						contentClassName
					)}
				>
					{title}
					{arrow && (
						<span
							className={cn(
								'absolute w-2 h-2 bg-primary rotate-45 transform',
								placement === 'top' &&
									'bottom-[-4px] left-1/2 -translate-x-1/2',
								placement === 'bottom' &&
									'top-[-4px] left-1/2 -translate-x-1/2',
								placement === 'left' && 'right-[-4px] top-1/2 -translate-y-1/2',
								placement === 'right' && 'left-[-4px] top-1/2 -translate-y-1/2'
							)}
						/>
					)}
				</TooltipContent>
			</ShadcnTooltip>
		</TooltipProvider>
	)
}
