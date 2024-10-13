'use client'

import React from 'react'
import { Swipeable } from '../..'
import SwipeableTestimonialCard from './SwipeableTestimonialCard'
import { cn } from '../../../shadcn/lib/utils'

type SwipeableTestimonialsProps = {
	items: Record<string, any>[]
	enableAutoPlay?: boolean
	enableArrows?: boolean
}

const SwipeableTestimonials: React.FC<SwipeableTestimonialsProps> = (props) => {
	const { enableAutoPlay = false, enableArrows = false, items = [] } = props

	return (
		<div>
			<Swipeable enableAutoPlay={enableAutoPlay} enableArrows={enableArrows}>
				{items?.map((testimonial, i) => (
					<div
						className={cn(
							'flex items-center justify-center p-2',
							enableArrows && 'px-6'
						)}
						key={i}
					>
						<SwipeableTestimonialCard
							image={testimonial.image}
							author={testimonial.title}
							rating={testimonial.rating}
							text={testimonial.description}
						/>
					</div>
				))}
			</Swipeable>
		</div>
	)
}

export default SwipeableTestimonials
