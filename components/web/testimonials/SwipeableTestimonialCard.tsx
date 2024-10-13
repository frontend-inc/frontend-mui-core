'use client'

import React from 'react'
import { Typography } from '../../../tailwind'
import { Avatar, Image, ExpandableText } from '../..'

type SwipeableTestimonialCardProps = {
	author: string
	text: string
	rating?: number
	image?: string
	avatar?: string
	size?: 'small' | 'large'
}

export default function SwipeableTestimonialCard(
	props: SwipeableTestimonialCardProps = {
		author: '',
		text: '',
		image: '',
		avatar: '',
	}
) {
	const { author, avatar, text, image } = props

	return (
		<div className="flex flex-row w-full min-h-[320px] overflow-hidden rounded-lg border border-divider bg-background">
			<div className="flex flex-col p-6 w-full sm:w-1/2 justify-around sm:justify-between items-start h-full space-y-4">
				<div className="flex flex-col items-center">
					{text && (
						<ExpandableText color="text.secondary" text={text} variant="h5" />
					)}
				</div>
				<div className="flex flex-row w-full items-center space-x-2">
					<Avatar src={avatar} size={48} />
					<Typography variant="body2" color="text.secondary">
						&mdash; {author}
					</Typography>
				</div>
			</div>
			{image && (
				<div className="flex justify-center items-center overflow-hidden w-full sm:w-1/2">
					<Image
						alt="testimonial"
						src={image}
						height={320}
						disableBorderRadius
					/>
				</div>
			)}
		</div>
	)
}
