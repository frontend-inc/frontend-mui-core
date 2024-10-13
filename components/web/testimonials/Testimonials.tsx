'use client'

import React from 'react'
import TestimonialCards from './TestimonialCards'
import SwipeableTestimonials from './SwipeableTestimonials'
import { Placeholder } from '../..'
import { TestimonialType } from '../../../types'

export type TestimonialsProps = {
	layout?: 'grid' | 'carousel'
	items: TestimonialType[]
	enableAutoPlay?: boolean
	enableArrows?: boolean
}

const Testimonials: React.FC<TestimonialsProps> = (props) => {
	const { layout = 'grid', enableArrows, enableAutoPlay, items = [] } = props

	return (
		<div className="flex flex-col w-full">
			{layout == 'carousel' ? (
				<SwipeableTestimonials
					items={items}
					enableAutoPlay={enableAutoPlay}
					enableArrows={enableArrows}
				/>
			) : (
				<TestimonialCards items={items} />
			)}
			{items?.length == 0 && (
				<Placeholder
					icon="Star"
					title="No testimonials yet."
					description="Your testimonials will appear here."
				/>
			)}
		</div>
	)
}

export default Testimonials
