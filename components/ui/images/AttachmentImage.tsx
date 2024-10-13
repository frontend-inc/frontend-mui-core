'use client'

import React from 'react'
import { Icon } from '../../../components'
import { cn } from '../../../shadcn/lib/utils'

type AttachmentImageProps = {
	icon?: string
	height: number
	width?: number
	className?: string
}

const AttachmentImage: React.FC<AttachmentImageProps> = ({
	height = 64,
	width = 64,
	icon = 'File',
	className,
}) => {
	return (
		<div
			className={cn(
				'flex items-center justify-center bg-primary',
				height ? `h-[${height}px]` : 'h-auto',
				width ? `w-[${width}px]` : 'w-full',
				className
			)}
		>
			<Icon name={icon} size={24} />
		</div>
	)
}

export default AttachmentImage
