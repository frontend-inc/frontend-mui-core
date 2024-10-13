'use client'

import React, { useContext } from 'react'
import { useAdmin } from '../../../hooks'
import { ExpandLeftButton, AdminHeader, Drawer } from '../../../components'
import { Hidden } from '../../../tailwind'
import { cn } from '../../../shadcn/lib/utils'

type AdminLayoutLeftProps = {
	title?: string
	children: React.ReactNode
	disableBorder?: boolean
}

export default function AdminLayoutLeft({
	title,
	children,
}: AdminLayoutLeftProps) {
	const { openLayoutLeft, setOpenLayoutLeft } = useAdmin()

	return (
		<>
			<Hidden smDown>
				{openLayoutLeft && (
					<div
						className={cn(
							'bg-background p-0 overflow-y-scroll overflow-x-hidden scrollbar-hide',
							'h-screen sm:min-w-[320px] ml-auto',
							'border-r border-border'
						)}
					>
						<AdminHeader title={title} buttons={<ExpandLeftButton />} />
						<div className="h-[calc(100vh-50px)] w-full">{children}</div>
					</div>
				)}
			</Hidden>
			<Hidden smUp>
				<Drawer
					disablePadding
					mode="editor"
					anchor="left"
					open={openLayoutLeft}
					handleClose={() => setOpenLayoutLeft(false)}
				>
					{children}
				</Drawer>
			</Hidden>
		</>
	)
}
