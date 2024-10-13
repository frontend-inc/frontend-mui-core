'use client'

import React from 'react'
import { cn } from '../../../shadcn/lib/utils'
import { useRouter, useParams } from 'next/navigation'
import { useClickOrDrag } from '../../../hooks'
import { useApp } from '../../../hooks'
import { NotificationType } from '../../../types'

type NotificationProps = {
	notification: NotificationType
}

export default function Notification({ notification }: NotificationProps) {
	const router = useRouter()
	const { clientUrl } = useApp()

	const { text, path, url, notification_type } = notification || {}

	const handleClick = () => {
		switch (notification_type) {
			case 'url':
				window.open(url, '_blank')
				break
			case 'page':
			case 'document':
				router.push(`${clientUrl}${path}`)
				break
		}
	}

	const { onMouseDown, onMouseUp } = useClickOrDrag({
		onClick: handleClick,
	})

	return (
		<li className="p-0 h-[50px] w-full flex justify-center items-center bg-primary overflow-x-auto scrollbar-hide">
			<button
				className={cn(
					'w-full text-primary-foreground text-sm py-2 px-4',
					'hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light',
					'transition-colors duration-200 ease-in-out'
				)}
				onMouseDown={onMouseDown}
				onMouseUp={onMouseUp}
			>
				<span className="block whitespace-nowrap text-center overflow-x-auto scrollbar-hide">
					{text}
				</span>
			</button>
		</li>
	)
}
