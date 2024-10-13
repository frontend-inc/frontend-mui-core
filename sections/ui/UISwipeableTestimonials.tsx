'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { Testimonials } from '../../components'
import { TestimonialsProps } from '../../components/web/testimonials/Testimonials'
import { SectionProps, HeadingProps } from '../../types'

type UISwipeableTestimonialsProps = SectionProps &
	HeadingProps &
	TestimonialsProps

const UISwipeableTestimonials: React.FC<UISwipeableTestimonialsProps> = (
	props
) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgColor,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,

		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<div className="flex flex-col space-y-2 w-full">
				<Heading
					label={label}
					title={title}
					description={description}
					textAlign={'center'}
				/>
				<Testimonials {...rest} layout="carousel" />
			</div>
		</Section>
	)
}

export default UISwipeableTestimonials
