'use client'

import React from 'react'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetFooter,
	SheetDescription,
} from '../../shadcn/ui/sheet'
import { cn } from '../../shadcn/lib/utils'

type AnchorPosition = 'left' | 'right' | 'top' | 'bottom'

interface DrawerProps {
	open: boolean
	onClose: () => void
	title?: string
	description?: string
	children: React.ReactNode
	footer?: React.ReactNode
	disablePadding?: boolean
	anchor?: AnchorPosition
	mode?: 'dark' | 'light'
	className?: string
}

const Drawer: React.FC<DrawerProps> = ({
	open,
	onClose,
	title,
	description,
	footer,
	children,
	disablePadding = false,
	anchor = 'right',
	mode = 'light',
	className,
}) => {
	const contentClass = cn('flex flex-col', {
		'p-0': disablePadding,
		'p-6': !disablePadding,
	})

	const childrenClass = cn('flex-grow', {
		'py-4': !disablePadding,
	})

	const modeClass = mode === 'dark' ? 'dark' : 'light'

	return (
		<Sheet open={open} onOpenChange={onClose}>
			<SheetContent
				side={anchor}
				className={cn(contentClass, modeClass, className)}
				iconColor={mode === 'dark' ? 'white' : 'black'}
			>
				{(title || description) && (
					<SheetHeader>
						{title && <SheetTitle>{title}</SheetTitle>}
						{description && <SheetDescription>{description}</SheetDescription>}
					</SheetHeader>
				)}
				<div className={childrenClass}>{children}</div>
				<SheetFooter>{footer}</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export { Drawer }
