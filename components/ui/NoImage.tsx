'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'

type NoImageProps = {
	height?: number
	width?: number
	disableBorder?: boolean
	disableBorderRadius?: boolean
}

const NoImage: React.FC<NoImageProps> = (props) => {
	const { height = 100, width, disableBorder, disableBorderRadius } = props

	return (
		<div
			className={cn(
				'flex items-center justify-center border border-divider rounded bg-gradient-to-br from-gray-600 to-black',
				height ? `h-[${height}px]` : 'h-full',
				width ? `w-[${width}px]` : 'w-full',
				disableBorder && 'border-0',
				disableBorderRadius && 'rounded-none'
			)}
		></div>
	)
}

export default NoImage
