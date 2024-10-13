'use client'

import React from 'react'
import { useApp } from '../../../hooks'
import { Swipeable, Cover, Placeholder } from '../..'
import { useRouter, useParams } from 'next/navigation'

export type CoverCarouselProps = {
	items: {
		title?: string
		description?: string
		image: string
		buttonText?: string
		url?: string
	}[]
	editing?: boolean
	enableAutoPlay?: boolean
	showDots?: boolean
	enableOverlay?: boolean
	enableGradient?: boolean
	enableBorder?: boolean
	enableArrows?: boolean
	opacity?: number
	alignItems?: 'flex-start' | 'center' | 'flex-end'
}

const CoverCarousel: React.FC<CoverCarouselProps> = (props) => {
	const router = useRouter()

	const {
		editing = false,
		items = [],
		enableOverlay = false,
		opacity = 0.5,
		enableGradient = false,
		enableArrows = false,
		enableAutoPlay = false,
		alignItems = 'center',
	} = props

	const { clientUrl } = useApp()

	const handleClick = (item) => {
		if (!editing && item?.url) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${item?.url}`)
		}
	}

	return (
		<>
			<Swipeable enableAutoPlay={enableAutoPlay} enableArrows={enableArrows}>
				{items?.map((item, index) => (
					<Cover
						key={index}
						editing={editing}
						title={item?.title}
						description={item?.description}
						image={item?.image}
						buttonText={item?.buttonText}
						enableOverlay={enableOverlay}
						enableGradient={enableGradient}
						opacity={opacity}
						handleClick={() => handleClick(item)}
						alignItems={alignItems}
					/>
				))}
			</Swipeable>
			{items?.length === 0 && (
				<Placeholder
					icon="Image"
					title="No cover images"
					description="Cover images will appear here."
				/>
			)}
		</>
	)
}

export default CoverCarousel
