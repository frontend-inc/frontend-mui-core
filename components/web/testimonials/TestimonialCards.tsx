'use client'

import React from 'react'
import { Grid, Container } from '../../../tailwind'
import { TestimonialCard } from '../..'
import { TestimonialType } from '../../../types'

type TestimonialCardsProps = {
	size?: 'small' | 'large'
	items: TestimonialType[]
}

const TestimonialCards: React.FC<TestimonialCardsProps> = (props) => {
	const { size = 'small', items = [] } = props

	return (
		<Container maxWidth="lg">
			<Grid container>
				{items?.map((testimonial, i) => (
					<Grid item>
						<TestimonialCard
							key={i}
							size={size}
							image={testimonial.image}
							author={testimonial.title}
							rating={testimonial.rating}
							text={testimonial.description}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default TestimonialCards
