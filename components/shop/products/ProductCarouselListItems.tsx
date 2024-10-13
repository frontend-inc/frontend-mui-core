'use client'

import React from 'react'
import { Carousel } from '../..'
import { useApp } from '../../../hooks'
import { useRouter, useParams } from 'next/navigation'
import ProductListItem from './ProductListItem'
import { ProductListItemsProps } from '../products/ProductListItems'
import { useResourceContext } from 'frontend-js'
import { cn } from '../../../shadcn/lib/utils'

export type ProductCarouselListItemsProps = ProductListItemsProps & {
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableDots?: boolean
}

const ProductCarouselListItems: React.FC<ProductCarouselListItemsProps> = (
	props
) => {
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
		enableRatings = false,
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
		<div className={cn('w-full', loading && 'opacity-50')}>
			<Carousel
				enableDots={enableDots}
				enableAutoPlay={enableAutoPlay}
				enableArrows={enableArrows}
			>
				{resources?.map((resource, index) => (
					<div key={index} className={'px-2'}>
						<ProductListItem
							buttons={buttons}
							resource={resource}
							displayFields={displayFields}
							handleClick={() => handleClick(resource)}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
							enableFavorites={enableFavorites}
							enableRatings={enableRatings}
							enableLikes={enableLikes}
						/>
					</div>
				))}
			</Carousel>
		</div>
	)
}

export default ProductCarouselListItems
