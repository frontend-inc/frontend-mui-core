'use client'

import React from 'react'
import Carousel from 'react-multi-carousel'
import CarouselDot from './CarouselDot'
import CarouselLeftArrow from './CarouselLeftArrow'
import CarouselRightArrow from './CarouselRightArrow'
// Note: required global CSS import from _app or app/layout.tsx
// import 'react-multi-carousel/lib/styles.css'

type CarouselProps = {
	editing?: boolean
	children: React.ReactNode
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableDots?: boolean
	responsive?: any
	styles?: any
}

const ReactCarousel: React.FC<CarouselProps> = (props) => {
	const {
		children,
		enableAutoPlay = false,
		enableArrows = false,
		enableDots = true,
	} = props

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 1280, min: 1024 },
			items: 3,
		},
		desktop: {
			breakpoint: { max: 1024, min: 768 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 768, min: 640 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 640, min: 0 },
			items: 1,
		},
	}

	return (
		<div className="w-full">
			{responsive && children && (
				<Carousel
					responsive={responsive}
					swipeable
					draggable
					infinite
					autoPlay={enableAutoPlay}
					arrows={enableArrows}
					showDots={enableDots}
					customDot={<CarouselDot />}
					customRightArrow={<CarouselRightArrow />}
					customLeftArrow={<CarouselLeftArrow />}
				>
					{children}
				</Carousel>
			)}
		</div>
	)
}

export default ReactCarousel
