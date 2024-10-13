'use client'

import React from 'react'
import { Cover } from '../..'
import { ProductCollectionType } from '../../../types'

export type ProductCollectionCoverProps = {
	productCollection: ProductCollectionType
	editing?: boolean
	height?: number
	alignItems?: 'flex-start' | 'center' | 'flex-end'
	alt?: string
	handleClick?: () => void
	enableGradient?: boolean
	enableOverlay?: boolean
	opacity?: number
	href?: string
}

const ProductCollectionCover: React.FC<ProductCollectionCoverProps> = (
	props
) => {
	const {
		productCollection,
		handleClick,
		height = 400,
		alt = 'image',
		enableGradient = false,
		enableOverlay = true,
		opacity = 0.5,
		alignItems = 'center',
		href,
	} = props

	if (!productCollection) return null
	return (
		<Cover
			enableOverlay={enableOverlay}
			enableGradient={enableGradient}
			opacity={opacity}
			height={height}
			title={productCollection?.title}
			description={productCollection?.description}
      //@ts-ignore 
			image={productCollection?.image?.url}
			alt={alt}
			alignItems={alignItems}
			path={href}
			handleClick={handleClick}
		/>
	)
}

export default ProductCollectionCover
