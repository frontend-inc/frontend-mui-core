'use client'

import React from 'react'
import { HeroCardProps } from './HeroCard'
import { AvatarImage } from '../..'
import { cn } from '../../../shadcn/lib/utils'

const HeroAvatar: React.FC<HeroCardProps> = (props) => {
	const {
		image,
		primary,
		secondary,
		actions,
		secondaryAction,
		slots = {
			image: {},
		},
	} = props || {}

	return (
		<div className="flex flex-col space-y-2 justify-center overflow-hidden">
			<div className="w-full flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1 justify-center sm:justify-end">
				{secondaryAction}
			</div>
			<div className="w-full flex justify-center items-center rounded">
				<div className="w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-start items-center sm:items-start">
					<div className="w-full sm:w-[200px] flex flex-col space-y-4">
						<div className="w-full h-full rounded flex justify-center items-center">
							<AvatarImage
								image={image}
								alt={typeof primary === 'string' ? primary : 'Avatar'}
								height={200}
								{...slots.image}
							/>
						</div>
						{actions}
					</div>
					<div className="w-full flex flex-col space-y-1">
						<h4 className="text-foreground text-2xl font-bold">{primary}</h4>
						{secondary}
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroAvatar
