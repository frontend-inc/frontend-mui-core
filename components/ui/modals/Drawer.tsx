'use client'

import React from 'react'
import { cn } from '../../../shadcn/lib/utils'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
} from '../../../shadcn/ui/sheet'

type DrawerProps = {
	open: boolean
	loading?: boolean
	title?: string
	anchor?: 'left' | 'right' | 'top' | 'bottom'
	handleClose: () => void
	buttons?: React.ReactNode
	children: React.ReactNode
	disablePadding?: boolean
	mode?: string
	className?: string
	fullWidth?: boolean
}

const Drawer: React.FC<DrawerProps> = ({
	open,
	title,
	anchor = 'right',
	handleClose,
	children,
	buttons,
	disablePadding = false,
	fullWidth = false,
	mode = 'light',
	className,
}) => {
	const side = anchor === 'left' || anchor === 'right' ? anchor : 'right'

	return (
		<Sheet open={open} onOpenChange={handleClose}>
			<SheetContent
				side={side}
				className={cn(
					mode,
					disablePadding && 'px-0',
					'flex flex-col',
					fullWidth ? 'w-screen max-w-full' : 'w-full max-w-xs',
					className
				)}
			>
				<SheetHeader className={cn(disablePadding && 'px-4')}>
					<SheetTitle>{title}</SheetTitle>
				</SheetHeader>
				<div className={cn('flex-grow overflow-y-auto')}>{children}</div>
				{buttons && (
					<SheetFooter className={cn(disablePadding && 'px-4')}>
						{buttons}
					</SheetFooter>
				)}
			</SheetContent>
		</Sheet>
	)
}

export default Drawer
