'use client'

import React from 'react'
import { Button } from '../../../shadcn/ui/button'
import { cn } from '../../../shadcn/lib/utils'

type CarouselDotProps = {
	onClick?: () => void
	styles?: React.CSSProperties
	index?: number
	active?: boolean
	onMove?: () => void
	carouselState?: {
		currentSlide: number
		deviceType: string
	}
}

const CarouselDot: React.FC<CarouselDotProps> = (props) => {
	const { onClick, active, index, onMove, styles = {}, ...rest } = props

	const {
		carouselState: { currentSlide, deviceType },
	} = rest

	return (
		<Button
			variant="ghost"
			className="py-1 px-0 shadow-none mx-0 hover:shadow-none hover:bg-transparent"
			onClick={() => onClick?.()}
		>
			<div
				className={cn(
					'w-full h-1 bg-gray-200 transition-all duration-300 ease-in-out',
					active && 'bg-primary'
				)}
				style={styles}
			/>
		</Button>
	)
}

export default CarouselDot
