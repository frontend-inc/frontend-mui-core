'use client'

import React from 'react'
import { cn } from '../../../shadcn/lib/utils'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from '../../../shadcn/ui/dialog'
import { ScrollArea } from '../../../shadcn/ui/scroll-area'
import { Loader } from '../../../components'

type ModalProps = {
	open: boolean
	loading?: boolean
	handleClose: () => void
	icon?: string
	title?: string | React.ReactNode
	description?: string
	buttons?: React.ReactNode
	children?: React.ReactNode
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	secondaryActions?: React.ReactNode
	mode?: string
}

const Modal: React.FC<ModalProps> = ({
	open,
	loading = false,
	handleClose,
	title,
	buttons,
	children,
	description,
	mode,
}) => {
	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent
				className={cn(
					mode,
					'bg-background rounded-md overflow-hidden max-h-[600px] overflow-y-scroll'
				)}
			>
				<DialogHeader className="flex-shrink-0">
					<DialogTitle className="text-foreground">{title}</DialogTitle>
					{description && <DialogDescription>{description}</DialogDescription>}
				</DialogHeader>
				<ScrollArea className="max-h-[465px]">
					<div className="space-y-4 px-4">
						<Loader loading={loading} />
						{!loading && <div className="h-full w-full">{children}</div>}
					</div>
				</ScrollArea>
				{!loading && buttons && <DialogFooter>{buttons}</DialogFooter>}
			</DialogContent>
		</Dialog>
	)
}

export default Modal
