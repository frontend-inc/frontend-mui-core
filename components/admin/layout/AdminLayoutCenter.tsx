'use client'

import React from 'react'
import { cn } from '../../../shadcn/lib/utils'

type AdminLayoutCenterProps = {
	children: React.ReactNode
}

export default function AdminLayoutCenter({
	children,
}: AdminLayoutCenterProps) {
	return (
		<div
			className={cn(
				'bg-background w-full h-screen overflow-hidden',
				'flex flex-col justify-between'
			)}
		>
			<div
				className={cn(
					'flex flex-col justify-start',
					'h-full overflow-y-hidden'
				)}
			>
				{children}
			</div>
		</div>
	)
}
