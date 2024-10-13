'use client'

import React from 'react'
import { AdminLayoutTabs, AdminTabIcons } from '../../../components'
import { cn } from '../../../shadcn/lib/utils'

type AdminLayoutProps = {
	logo?: string
	handleClick: (item: any) => void
	menuItems?: any[]
	secondaryAction?: React.ReactNode
	children: React.ReactNode
}

export default function AdminLayout({
	logo,
	children,
	handleClick,
	menuItems = [],
	secondaryAction,
}: AdminLayoutProps) {
	return (
		<div className="editor w-full">
			<div
				className={cn(
					'w-screen overflow-x-hidden scrollbar-hide',
					'flex flex-row min-h-screen'
				)}
			>
				<AdminLayoutTabs>
					<AdminTabIcons
						logo={logo}
						handleClick={handleClick}
						menuItems={menuItems}
						secondaryAction={secondaryAction}
					/>
				</AdminLayoutTabs>
				<div
					className={cn(
						'w-[calc(100vw-60px)] overflow-x-hidden scrollbar-hide',
						'flex sm:flex-row xs:flex-col'
					)}
				>
					{children}
				</div>
			</div>
		</div>
	)
}
