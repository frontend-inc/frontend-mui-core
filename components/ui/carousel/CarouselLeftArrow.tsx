'use client'

import React from 'react'
import { Button } from '../../../shadcn/ui/button'
import { Icon } from '../..'

interface CarouselLeftArrowProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CarouselLeftArrow: React.FC<CarouselLeftArrowProps> = (props) => {
	return (
		<Button
			variant="outline"
			size="icon"
			className="absolute left-5 top-[28%] h-8 w-8 sm:h-12 sm:w-12 shadow-md opacity-80 hover:opacity-90 bg-background hover:bg-background"
		>
			<Icon
				name="ChevronLeft"
				className="h-4 w-4 sm:h-6 sm:w-6 text-foreground"
			/>
			<span className="sr-only">Previous slide</span>
		</Button>
	)
}

export default CarouselLeftArrow
