'use client'

import React, { useState } from 'react'
import { cn } from '../../../shadcn/lib/utils'
import { Button } from '../../../shadcn/ui/button'
import { Typography } from '../../../tailwind'
import { ChevronRight } from 'lucide-react'

interface SidebarMenuHeaderProps {
	label: string
	isOpen?: boolean
	enableBorder?: boolean
	children: React.ReactNode
}

export default function SidebarMenuHeader({
	label,
	enableBorder,
	isOpen = true,
	children,
}: SidebarMenuHeaderProps) {
	const [open, setOpen] = useState(isOpen)

	return (
		<div className={cn('w-full p-1', enableBorder && 'border-t border-border')}>
			<Button
				variant="ghost"
				className="hover:bg-muted py-6 w-full justify-between px-3"
				onClick={() => setOpen(!open)}
			>
				<Typography variant="body2">{label}</Typography>
				<ChevronRight
					className={cn(
						'text-foreground h-4 w-4 transition-transform duration-200',
						open && 'rotate-90'
					)}
				/>
			</Button>
			{open && <div className="p-2 flex flex-col space-y-2">{children}</div>}
		</div>
	)
}
