'use client'

import React from 'react'
import { Card } from '../../../shadcn/ui/card'
import { AvatarImage, Image } from '../..'
import { Typography } from '../../../tailwind'

type HeroCardProps = {
	label: string
	image: string
	primary: string
	secondary: React.ReactNode
	actions?: React.ReactNode
}

type HeroSnippetProps = HeroCardProps & {
	circular?: boolean
	disableImage?: boolean
	slots?: {
		image?: any
	}
}

export default function HeroSnippet({
	label,
	image,
	primary,
	secondary,
	actions,
	disableImage = false,
	circular = false,
	slots = {
		image: {},
	},
}: HeroSnippetProps) {
	return (
		<Card className="w-full">
			<div className="flex flex-col w-full">
				{!disableImage && (
					<div className="w-full overflow-hidden rounded-t-[inherit]">
						{circular ? (
							<AvatarImage
								label={label}
								src={image}
								height={180}
								alt={primary}
								{...slots.image}
							/>
						) : (
							<Image
								label={label}
								src={image}
								height={220}
								alt={primary}
								{...slots.image}
							/>
						)}
					</div>
				)}
				<div className="flex flex-col space-y-2 p-4 w-full">
					{actions}
					<Typography variant="subtitle1" color="text.primary">
						{primary}
					</Typography>
					{secondary}
				</div>
			</div>
		</Card>
	)
}
