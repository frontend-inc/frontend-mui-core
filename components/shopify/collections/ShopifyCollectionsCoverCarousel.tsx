'use client'

import React, { useEffect } from 'react'
import { useCollections } from 'frontend-shopify'
import { useRouter, useParams } from 'next/navigation'
import { useApp } from '../../../hooks'
import { ShopifyCollectionCover, Swipeable } from '../..'

export type ShopifyCollectionsCoverCarouselProps = {
	href: string
	enableArrows?: boolean
	enableAutoPlay?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	buttonText?: string
}

const ShopifyCollections: React.FC<ShopifyCollectionsCoverCarouselProps> = (
	props
) => {
	const {
		href,
		enableGradient = false,
		enableOverlay = false,
		enableArrows = false,
		enableAutoPlay = false,
		buttonText,
	} = props

	const router = useRouter()

	const { loading, collections, findCollections } = useCollections()

	const { clientUrl } = useApp()

	const handleClick = (collection) => {
		if (href) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${href}/${collection?.handle}`)
		}
	}

	useEffect(() => {
		findCollections()
	}, [])

	return (
		<Swipeable enableAutoPlay={enableAutoPlay} enableArrows={enableArrows}>
			{collections?.map((collection, index) => (
				<ShopifyCollectionCover
					key={index}
					shopifyCollection={collection}
					handleClick={() => handleClick(collection)}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
					buttonText={buttonText}
				/>
			))}
		</Swipeable>
	)
}

export default ShopifyCollections
