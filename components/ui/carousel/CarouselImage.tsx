'use client'

import React from 'react'
import { Carousel } from '../../../components'
import { IMAGE_CAROUSEL_RESPONSIVE } from '../../../constants/index'

type CarouselImageProps = {
	children: React.ReactNode
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableDots?: boolean
	responsive?: any
}

const CarouselImage: React.FC<CarouselImageProps> = (props) => {
	const {
		children,
		enableAutoPlay = false,
		enableArrows = false,
		enableDots = true,
		responsive = IMAGE_CAROUSEL_RESPONSIVE,
	} = props

	return (
		<Carousel
			enableAutoPlay={enableAutoPlay}
			responsive={responsive}
			enableArrows={enableArrows}
			enableDots={enableDots}
		>
			{children}
		</Carousel>
	)
}

export default CarouselImage
