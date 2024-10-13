'use client'

import React from 'react'
import {
	Avatar as ShadcnAvatar,
	AvatarImage,
	AvatarFallback,
} from '../../shadcn/ui/avatar'
import { cn } from '../../shadcn/lib/utils'

type AvatarVariant = 'rounded' | 'circular'

interface AvatarProps {
	children?: React.ReactNode
	variant?: AvatarVariant
	fallback?: string
	src?: string
	alt?: string
	className?: string
}

const Avatar: React.FC<AvatarProps> = ({
	children,
	variant = 'rounded',
	fallback,
	src,
	alt,
	className,
}) => {
	return (
		<ShadcnAvatar
			className={cn(
				'bg-primary',
				{
					'rounded-md': variant === 'rounded',
					'rounded-full': variant === 'circular',
				},
				className
			)}
		>
			{src && <AvatarImage src={src} alt={alt} />}
			<AvatarFallback className="bg-primary text-primary-foreground">
				{fallback || children}
			</AvatarFallback>
		</ShadcnAvatar>
	)
}

export { Avatar }
