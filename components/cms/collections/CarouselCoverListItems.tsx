'use client'

import React from 'react'
import { Swipeable, Cover } from '../..'
import { useApp } from '../../../hooks'
import { useRouter, useParams } from 'next/navigation'
import { useResourceContext } from 'frontend-js'
import { CoverProps } from '../../../components/web/covers/Cover'
import { cn } from '../../../shadcn/lib/utils'

export type CarouselCoverListItemsProps = CoverProps & {
	href?: string
	height?: number
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const CarouselCoverListItems: React.FC<CarouselCoverListItemsProps> = (
	props
) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const {
		href,
		height,
		buttonText,
		enableAutoPlay = true,
		enableArrows = false,
		enableGradient = false,
		enableOverlay = false,
	} = props

	const { loading, resources } = useResourceContext()

	const handleClick = (resource) => {
		if (clientUrl && href && resource?.handle) {
			router.push(`${clientUrl}${href}/${resource?.handle}`)
		}
	}

	return (
		<div
			className={cn(
				'w-full',
				loading && 'opacity-50',
				height && `h-[${height}px]`
			)}
		>
			<Swipeable enableAutoPlay={enableAutoPlay} enableArrows={enableArrows}>
				{resources?.map((resource, index) => (
					<Cover
						key={index}
						image={resource?.image?.url}
						title={resource?.title}
						handleClick={() => handleClick(resource)}
						enableGradient={enableGradient}
						enableOverlay={enableOverlay}
						buttonText={buttonText}
					/>
				))}
			</Swipeable>
		</div>
	)
}

export default CarouselCoverListItems
