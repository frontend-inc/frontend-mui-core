'use client'

import React from 'react'
import { Button } from '../../../shadcn/ui/button'
import { Icon } from '../../../components'

interface CarouselRightArrowProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CarouselRightArrow: React.FC<CarouselRightArrowProps> = (props) => {
	return (
		<Button
			variant="outline"
			size="icon"
			className="absolute right-5 top-[28%] h-8 w-8 sm:h-12 sm:w-12 shadow-md opacity-80 hover:opacity-100 bg-background hover:bg-background"
		>
			<Icon
				name="ChevronRight"
				className="h-4 w-4 sm:h-6 sm:w-6 text-foreground"
			/>
			<span className="sr-only">Next slide</span>
		</Button>
	)
}

export default CarouselRightArrow
