'use client'

import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '../../../shadcn/ui/avatar'
import { cn } from '../../../shadcn/lib/utils'

type UserAvatarProps = {
	src?: string
	variant?: 'circular' | 'rounded'
	label?: string
	size?: number
	color?: string
	className?: string
	enableGradient?: boolean
	enableOverlay?: boolean
}

export default function UserAvatar({
	src,
	label,
	variant = 'rounded',
	size = 40,
	className,
}: UserAvatarProps) {
	const avatarClasses = cn(
		variant === 'circular' ? 'rounded-full' : 'rounded-lg'
	)
	return (
		<Avatar
			className={cn(avatarClasses, className)}
			style={{
				width: size,
				height: size,
			}}
		>
			<AvatarImage src={src} alt="Avatar" className="object-cover" />
			<AvatarFallback
				className={cn(avatarClasses, 'bg-primary text-primary-foreground')}
			>
				{label ? label.slice(0, 2) : null}
			</AvatarFallback>
		</Avatar>
	)
}
