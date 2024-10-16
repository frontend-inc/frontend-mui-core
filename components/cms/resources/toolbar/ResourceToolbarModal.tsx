'use client'

import React from 'react'
import { X } from 'lucide-react'
import { Button } from '../../../../shadcn/ui/button'
import { cn } from '../../../../shadcn/lib/utils'

interface ResourceToolbarModalProps {
	open: boolean
	handleClose: () => void
	children: React.ReactNode
}

export default function ResourceToolbarModal({
	open,
	handleClose,
	children,
}: ResourceToolbarModalProps) {
	return (
		<div
			className={cn(
				'fixed bg-secondary top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out transform -translate-y-[76px]',
				open && '-translate-y-[10px]'
			)}
		>
			<div className="text-secondary-foreground shadow-md">
				<div className="container mx-auto px-4">
					<div className="h-16 flex items-center justify-between">
						<div className="w-10 h-10"></div>
						{children}
						<Button
							variant="ghost"
							size="icon"
							className="w-8 h-8 hover:bg-gray-100"
							onClick={handleClose}
						>
							<X className="h-5 w-5 text-secondary-foreground" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
