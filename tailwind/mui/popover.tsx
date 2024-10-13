'use client'

import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../shadcn/lib/utils'

interface PopoverProps {
	anchorEl: HTMLElement | null
	open: boolean
	onClose: () => void
	children: React.ReactNode
	anchorOrigin?: {
		vertical: 'top' | 'center' | 'bottom'
		horizontal: 'left' | 'center' | 'right'
	}
	transformOrigin?: {
		vertical: 'top' | 'center' | 'bottom'
		horizontal: 'left' | 'center' | 'right'
	}
	className?: string
}

export const Popover: React.FC<PopoverProps> = ({
	anchorEl,
	open,
	onClose,
	children,
	anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
	transformOrigin = { vertical: 'top', horizontal: 'left' },
	className,
}) => {
	const [popoverStyle, setPopoverStyle] = useState<React.CSSProperties>({})
	const popoverRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (anchorEl && open) {
			const anchorRect = anchorEl.getBoundingClientRect()
			const popoverRect = popoverRef.current?.getBoundingClientRect()

			if (popoverRect) {
				let top = 0
				let left = 0

				// Vertical positioning
				if (anchorOrigin.vertical === 'top') {
					top = anchorRect.top
				} else if (anchorOrigin.vertical === 'center') {
					top = anchorRect.top + anchorRect.height / 2
				} else {
					top = anchorRect.bottom
				}

				if (transformOrigin.vertical === 'center') {
					top -= popoverRect.height / 2
				} else if (transformOrigin.vertical === 'bottom') {
					top -= popoverRect.height
				}

				// Horizontal positioning
				if (anchorOrigin.horizontal === 'left') {
					left = anchorRect.left
				} else if (anchorOrigin.horizontal === 'center') {
					left = anchorRect.left + anchorRect.width / 2
				} else {
					left = anchorRect.right
				}

				if (transformOrigin.horizontal === 'center') {
					left -= popoverRect.width / 2
				} else if (transformOrigin.horizontal === 'right') {
					left -= popoverRect.width
				}

				setPopoverStyle({
					position: 'fixed',
					top: `${top}px`,
					left: `${left}px`,
				})
			}
		}
	}, [anchorEl, open, anchorOrigin, transformOrigin])

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				popoverRef.current &&
				!popoverRef.current.contains(event.target as Node)
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

	if (!open) return null

	return createPortal(
		<div
			ref={popoverRef}
			style={popoverStyle}
			className={cn(
				'bg-background border border-border rounded-md shadow-md z-50 transition-opacity duration-200',
				open ? 'opacity-100' : 'opacity-0 pointer-events-none',
				className
			)}
		>
			{children}
		</div>,
		document.body
	)
}
