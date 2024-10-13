'use client'

import React from 'react'
import { Cover } from '../..'
import { ShopifyCollectionType } from 'frontend-shopify'

export type ShopifyCollectionCoverProps = {
	shopifyCollection: ShopifyCollectionType
	editing?: boolean
	height?: number
	alignItems?: 'flex-start' | 'center' | 'flex-end'
	alt?: string
	handleClick?: () => void
	enableGradient?: boolean
	enableOverlay?: boolean
	opacity?: number
	overlayColor?: string
	href?: string
	buttonText?: string
}

const ShopifyCollectionCover: React.FC<ShopifyCollectionCoverProps> = (
	props
) => {
	const {
		shopifyCollection,
		handleClick,
		height,
		alt = 'image',
		enableGradient = false,
		enableOverlay = false,
		opacity = 0.5,
		alignItems = 'center',
		href,
		buttonText,
	} = props

	if (!shopifyCollection) return null
	return (
		<Cover
			enableOverlay={enableOverlay}
			enableGradient={enableGradient}
			opacity={opacity}
			height={height}
			title={shopifyCollection?.title}
      // @ts-ignore
			image={shopifyCollection?.image?.url}
			alt={alt}
			alignItems={alignItems}
			path={href}
			handleClick={handleClick}
			buttonText={buttonText}
		/>
	)
}

export default ShopifyCollectionCover
