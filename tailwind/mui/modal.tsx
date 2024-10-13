'use client'

import React from 'react'
import { Dialog, DialogContent } from '../../shadcn/ui/dialog'
import { cn } from '../../shadcn/lib/utils'

interface ModalProps {
	children: React.ReactNode
	open: boolean
	onClose: () => void
	disablePadding?: boolean
}

const Modal: React.FC<ModalProps> = ({
	children,
	open,
	onClose,
	disablePadding = false,
}) => {
	const contentClass = cn({
		'p-6': !disablePadding,
		'p-0': disablePadding,
	})

	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent className={contentClass}>{children}</DialogContent>
		</Dialog>
	)
}

export { Modal }
