'use client'

import React from 'react'
import { cn } from '../../../../shadcn/lib/utils'
import { Typography } from '../../../../tailwind'
import { Image } from '../../..'

export type ProductCardProps = {
	ref?: React.Ref<HTMLDivElement>
	avatar?: React.ReactNode
	image: string
	label?: string
	primary: string
	secondary?: string | React.ReactNode
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	price: string
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

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
	(props, ref) => {
		const {
			label,
			primary,
			secondary,
			price,
			compareAtPrice,
			actions,
			secondaryAction,
			handleClick,
			image,
			height = 240,
			addToCart,
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
				<div className="px-4 py-1 flex flex-col space-y-4 w-full justify-between items-between">
					<div>
						<Typography variant="subtitle2">{primary}</Typography>
						<div className="flex flex-row space-x-2">
							<Typography className="text-sm text-foreground" variant="caption">
								{price}
							</Typography>
							{compareAtPrice && (
								<Typography className="line-through" variant="caption">
									{compareAtPrice}
								</Typography>
							)}
						</div>
						{secondary && (
							<Typography
								className="text-sm text-muted-foreground"
								variant="body2"
							>
								{secondary}
							</Typography>
						)}
					</div>
					{addToCart}
					<div className="flex flex-row justify-between">
						{actions}
						{secondaryAction}
					</div>
				</div>
			</div>
		)
	}
)

ProductCard.displayName = 'ProductCard'

export default ProductCard
