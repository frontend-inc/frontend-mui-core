'use client'

import React from 'react'
import { Button } from '../../../shadcn/ui/button'
import { cn } from '../../../shadcn/lib/utils'

type ShopifyOptionButtonProps = {
	value: string
	name: string
	active: boolean
	handleClick: (name: string, value: string) => void
	children: React.ReactNode
	width?: number
	justifyContent?: string
}

const ShopifyOptionButton: React.FC<ShopifyOptionButtonProps> = ({
	value,
	name,
	active,
	handleClick,
	children,
	width,
	justifyContent,
}) => {
	return (
		<Button
			className={cn(
				'whitespace-nowrap',
				active ? 'opacity-100' : 'opacity-80',
				width && `w-${width}`,
				justifyContent && `justify-${justifyContent}`
			)}
			variant={active ? 'default' : 'secondary'}
			onClick={() => handleClick(name, value)}
		>
			{children}
		</Button>
	)
}

export default ShopifyOptionButton
