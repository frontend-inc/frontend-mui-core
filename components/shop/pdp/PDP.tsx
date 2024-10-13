'use client'

import React from 'react'
import { Typography } from '../../../tailwind'
import { Image, ExpandableText } from '../..'

export type PDPProps = {
	label?: string
	image?: string
	price?: string
	compareAtPrice?: string
	description?: string
	primary?: string
	secondary?: React.ReactNode
	actions?: React.ReactNode
	addToCart?: React.ReactNode
	secondaryAction?: React.ReactNode
	children?: React.ReactNode
	slots?: {
		image?: any
		content?: any
	}
}

const PDP: React.FC<PDPProps> = (props) => {
	const {
		label,
		image,
		primary,
		secondary,
		addToCart,
		price,
		compareAtPrice,
		description,
		actions,
		secondaryAction,
		slots = {
			image: {},
			content: {},
		},
	} = props || {}

	return (
		<div className="flex flex-col space-y-2">
			{secondaryAction}
			<div className="w-full flex justify-center items-center">
				<div className="flex flex-row sm:space-x-10">
					<div className="w-full md:w-1/2 flex flex-col space-y-5 justify-center items-center">
						<div className="rounded-lg w-full">
							<Image
								src={image}
								alt={primary}
								height={400}
								aspectRatio={4 / 3}
								label={label}
								{...slots.image}
							/>
						</div>
						{actions}
					</div>
					<div className="w-full md:w-1/2 flex flex-col space-y-3">
						<Typography variant="h3">{primary}</Typography>
						<div className="flex flex-row space-x-2">
							<Typography color="text.primary" variant="h6">
								{price}
							</Typography>
							{compareAtPrice && (
								<Typography
									color="text.secondary"
									variant="subtitle2"
									className="line-through"
								>
									{compareAtPrice}
								</Typography>
							)}
						</div>
						{secondary}
						{addToCart}
						<ExpandableText text={description || ''} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default PDP
