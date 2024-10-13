'use client'

import React from 'react'
import { Image, TouchableOpacity, Icon } from '../..'
import { cn } from '../../../shadcn/lib/utils'

export type CardProps = {
	avatar?: React.ReactNode
	primary?: string
	secondaryAction?: React.ReactNode
	handleClick?: () => void
	image?: string
	slots?: {
		item?: any
		image?: any
	}
}

export default function VideoCard({
	avatar,
	primary,
	secondaryAction,
	handleClick,
	image,
	slots = {
		item: {},
		image: {},
	},
}: CardProps) {
	return (
		<div className="dark">
			<div
				className={cn(
					'relative flex flex-col overflow-hidden rounded',
					'transition-shadow duration-300 hover:shadow-md',
					"after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1/2",
					'after:bg-gradient-to-t after:from-black/50 after:to-transparent'
				)}
				{...slots.item}
			>
				<TouchableOpacity handleClick={handleClick}>
					<Image
						src={image}
						height={360}
						alt={primary}
						className="w-full h-auto"
						{...slots.image}
					/>
				</TouchableOpacity>
				<button
					className={cn(
						'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
						'flex items-center justify-center',
						'w-10 h-10 rounded-full bg-black/50'
					)}
					onClick={handleClick}
				>
					<Icon name="Play" className="text-white" />
				</button>
				<div className="absolute top-2.5 right-2.5 flex flex-row justify-end">
					{secondaryAction}
				</div>
				{avatar && (
					<div className="absolute bottom-2.5 left-2.5 flex flex-row justify-end">
						{avatar}
					</div>
				)}
			</div>
		</div>
	)
}
