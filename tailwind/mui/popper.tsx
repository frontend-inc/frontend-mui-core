'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Popover, PopoverContent } from '../../shadcn/ui/popover'
import { cn } from '../../shadcn/lib/utils'

interface PopperProps {
	anchorEl?: HTMLElement | null
	children: React.ReactNode
	open: boolean
	placement?: 'top' | 'bottom' | 'left' | 'right'
	onClose?: () => void
	className?: string
}

const Popper: React.FC<PopperProps> = ({
	anchorEl,
	children,
	open,
	placement = 'bottom',
	onClose,
	className,
}) => {
	const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null)
	const popoverRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (anchorEl) {
			setTriggerElement(anchorEl)
		}
	}, [anchorEl])

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				popoverRef.current &&
				!popoverRef.current.contains(event.target as Node) &&
				onClose
			) {
				onClose()
			}
		}

		if (open) {
			document.addEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [open, onClose])

	return (
		<Popover open={open} onOpenChange={onClose}>
			<PopoverContent
				ref={popoverRef}
				side={placement}
				align="center"
				className={cn('p-0 border-none shadow-lg', className)}
			>
				{children}
			</PopoverContent>
		</Popover>
	)
}

export { Popper }
