import React, { useState } from 'react'
import { ShopifyProductType } from 'frontend-shopify'
import SwipeableViews from 'react-swipeable-views'
import { Image } from '../../../../components'
import { cn } from '../../../../shadcn/lib/utils'
import { useClickOrDrag } from '../../../../hooks'

type SwipeableShopifyProductImagesProps = {
	product: ShopifyProductType
	height?: number
	width?: number
	handleClick?: () => void
	objectFit?: 'contain' | 'cover'
	responsiveHeight?: boolean
	disableBorderRadius?: boolean
}

export default function SwipeableShopifyProductImages({
	product,
	height = 320,
	handleClick,
	disableBorderRadius = false,
}: SwipeableShopifyProductImagesProps) {
	const [activeStep, setActiveStep] = useState(0)
  // @ts-ignore
	const maxSteps = product?.images?.edges?.length || 0

	const handleStepChange = (step: number) => {
		setActiveStep(step)
	}

	const { onMouseDown, onMouseUp } = useClickOrDrag({
		onClick: handleClick,
	})

	return (
		<div className="relative w-full">
			<SwipeableViews
				axis={'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
			>
        {/* @ts-ignore */}
				{product?.images?.edges.map(({ node: image }: any) => (
					<div
						key={image.id}
						className="w-full overflow-hidden"
						onMouseDown={onMouseDown}
						onMouseUp={onMouseUp}
					>
						<Image
							src={image?.url}
							alt={product?.title}
							height={height}
							disableBorderRadius={disableBorderRadius}
							aspectRatio={1.0}
						/>
					</div>
				))}
			</SwipeableViews>
			{maxSteps > 1 && (
				<div className="absolute bottom-2 left-0 right-0 flex justify-center">
					{Array.from({ length: maxSteps }).map((_, index) => (
						<div
							key={index}
							className={cn(
								'w-2 h-2 rounded-full mx-1',
								index === activeStep ? 'bg-primary' : 'bg-gray-300'
							)}
						/>
					))}
				</div>
			)}
		</div>
	)
}
