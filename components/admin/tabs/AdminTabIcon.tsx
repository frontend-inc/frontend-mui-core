'use client'

import React from 'react'
import { IconButton } from '../../../tailwind'
import { cn } from '../../../shadcn/lib/utils'
import { Icon } from '../../../components'

type LayoutTabIconProps = {
	icon: string
	selected?: boolean
	handleClick?: () => void
}

export default function LayoutTabIcon({
	icon,
	selected = false,
	handleClick,
}: LayoutTabIconProps) {
	return (
		<IconButton
			className={cn(
				'bg-transparent hover:bg-secondary/10',
				selected && 'bg-primary hover:bg-primary'
			)}
			onClick={handleClick}
		>
			<Icon
				name={icon}
				className={cn('w-5 h-5', selected && 'text-primary-foreground')}
			/>
		</IconButton>
	)
}
