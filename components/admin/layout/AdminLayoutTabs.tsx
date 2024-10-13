'use client'

import React from 'react'
import { cn } from '../../../shadcn/lib/utils'

type AdminLayoutTabsProps = {
	children: React.ReactNode
}

export default function AdminLayoutTabs({ children }: AdminLayoutTabsProps) {
	return (
		<div className="w-[60px] h-screen bg-background">
			<div
				className={cn(
					'w-full h-full flex flex-col items-center justify-between',
					'xs:gap-[5px] sm:gap-0'
				)}
			>
				{children}
			</div>
		</div>
	)
}
