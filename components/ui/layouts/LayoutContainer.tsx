'use client'

import React from 'react'
import { AuthGuard, Alert } from '../../../components'
import { Notifications } from '../../../components'
import { NotificationType } from '../../../types'
import { cn } from '../../../shadcn/lib/utils'

type LayoutContainerProps = {
	handleClick: (item: any) => void
	children: React.ReactNode
	header?: React.ReactNode
	footer?: React.ReactNode
	notifications: NotificationType[]
	roles?: string[]
	requireAuth?: boolean
	requirePaid?: boolean
}

export default function LayoutContainer({
	children,
	notifications,
	requireAuth,
	requirePaid,
	roles = [],
}: LayoutContainerProps) {
	return (
		<div className="w-full min-h-screen">
			<Alert />
			<div
				className={cn(
					'w-full h-full overflow-y-scroll scrollbar-hide',
					'bg-background'
				)}
			>
				<div className="flex flex-col w-full">
					<AuthGuard
						roles={roles}
						requireAuth={requireAuth}
						requirePaid={requirePaid}
					>
						<Notifications notifications={notifications} />
						{children}
					</AuthGuard>
				</div>
			</div>
		</div>
	)
}
