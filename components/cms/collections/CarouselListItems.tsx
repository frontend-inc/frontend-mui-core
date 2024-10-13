'use client'

import React from 'react'
import { Carousel } from '../..'
import { useApp } from '../../../hooks'
import { useRouter, useParams } from 'next/navigation'
import CollectionListItem from './CollectionListItem'
import { CollectionListItemsProps } from '../collections/CollectionListItems'
import { useResourceContext } from 'frontend-js'
import { cn } from '../../../shadcn/lib/utils'

export type CarouselListItemsProps = CollectionListItemsProps & {
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableDots?: boolean
}

const CarouselListItems: React.FC<CarouselListItemsProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const {
		buttons,
		href,
		displayFields,
		enableAutoPlay = true,
		enableArrows = false,
		enableDots = false,
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
		enableLikes = false,
	} = props

	const { setOpenShow, loading, resources, setResource } = useResourceContext()

	const handleClick = (resource) => {
		if (href) {
			if (clientUrl && href && resource?.handle) {
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				})
				router.push(`${clientUrl}${href}/${resource?.handle}`)
			}
		} else {
			setResource(resource)
			setOpenShow(true)
		}
	}

	return (
		<div
			className={cn(
				'grid grid-cols-1 md:grid-cols-3 gap-4',
				loading && 'opacity-50'
			)}
		>
			<Carousel
				enableDots={enableDots}
				enableAutoPlay={enableAutoPlay}
				enableArrows={enableArrows}
			>
				{resources?.map((resource, index) => (
					<div
						className={cn('p-1', enableArrows && 'pt-5', enableDots && 'pb-4')}
						key={index}
					>
						<CollectionListItem
							buttons={buttons}
							style="card"
							resource={resource}
							displayFields={displayFields}
							handleClick={() => handleClick(resource)}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
							enableFavorites={enableFavorites}
							enableLikes={enableLikes}
						/>
					</div>
				))}
			</Carousel>
		</div>
	)
}

export default CarouselListItems
