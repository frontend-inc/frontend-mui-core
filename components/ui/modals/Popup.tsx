'use client'

import React from 'react'
import { cn } from '../../../shadcn/lib/utils'
import { Popover, PopoverContent } from '../../../shadcn/ui/popover'

type PopupProps = {
	open: boolean
	handleClose: () => void
	children: React.ReactNode
}

export default function Popup({ open, handleClose, children }: PopupProps) {
	return (
		<Popover open={open} onOpenChange={(isOpen) => !isOpen && handleClose()}>
			<PopoverContent>{children}</PopoverContent>
		</Popover>
	)
}
