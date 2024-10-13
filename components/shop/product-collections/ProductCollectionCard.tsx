'use client'

import React from 'react'
import { cn } from '../../../shadcn/lib/utils'
import { Typography } from '../../../tailwind'
import { Image } from '../..'

export type ProductCollectionCardProps = {
	ref?: React.Ref<HTMLDivElement>
	avatar?: React.ReactNode
	image: string
	label?: string
	primary: string
	secondary?: string | React.ReactNode
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode	
	compareAtPrice?: string
	handleClick?: () => void
	height?: number
	addToCart?: React.ReactNode
	disableBorder?: boolean
	slots?: {
		item?: any
		image?: any
	}
}

const ProductCollectionCard = React.forwardRef<
	HTMLDivElement,
	ProductCollectionCardProps
>((props, ref) => {
	const {
		label,
		primary,
		handleClick,
		image,
		height = 240,
		disableBorder,
		slots = {
			item: {},
			image: {},
		},
	} = props

	return (
		<div
			ref={ref}
			className={cn(
				!disableBorder && 'border border-border hover:shadow-md',
				'w-full overflow-hidden rounded-lg transition-shadow duration-300 bg-background'
			)}
		>
			<div className="min-h-[240px] w-full relative overflow-hidden">
				<Image
					src={image}
					height={height}
					alt={primary}
					label={label}
					aspectRatio={4 / 3}
					handleClick={handleClick}
					disableBorderRadius={!disableBorder}
					{...slots.image}
				/>
			</div>
			<div className="px-4 pt-2 pb-4 w-full">
				<Typography variant="subtitle1">{primary}</Typography>
			</div>
		</div>
	)
})

ProductCollectionCard.displayName = 'ProductCollectionCard'

export default ProductCollectionCard
