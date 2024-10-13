'use client'

import React from 'react'
import { Backdrop } from '../../../tailwind'
import { X } from 'lucide-react'
import { cn } from '../../../shadcn/lib/utils'

export type MediaModalProps = {
	open: boolean
	handleClose: () => void
	children: React.ReactNode
}

export default function MediaModal({
	open,
	handleClose,
	children,
}: MediaModalProps) {
	if (!open) return null

	return (
		<Backdrop open={open} onClick={handleClose}>
			<div
				className={cn(
					'relative rounded overflow-hidden',
					'max-w-[calc(100vw-50px)] max-h-[calc(100vh-50px)]',
					'z-[50]'
				)}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
			<button
				className={cn(
					'absolute top-5 right-5 p-2 rounded-full',
					'bg-black bg-opacity-50 hover:bg-opacity-75',
					'transition-colors duration-200'
				)}
				onClick={handleClose}
			>
				<X className="h-6 w-6 text-white" />
			</button>
		</Backdrop>
	)
}
