'use client'

import React from 'react'
import { Placeholder } from '../..'
import { ShopifyProductCarousel } from '..'
import { useFavorites } from 'frontend-shopify'

type ShopifyProductFavoritesCarouselProps = {
	href: string
	title?: string
	perPage?: string
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	enableQuickShop?: boolean
	buttonText?: string
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableDots?: boolean
}

const ShopifyProductFavoritesCarousel: React.FC<
	ShopifyProductFavoritesCarouselProps
> = (props) => {
	const {
		href,
		enableBorder = false,
		buttonText = 'Add to cart',
		enableAddToCart,
		enableQuantity,
		enableQuickShop,

		enableAutoPlay = false,
		enableArrows = false,
		enableDots = true,
	} = props || {}

	const { favorites } = useFavorites()

	return (
		<div className="w-full">
			<ShopifyProductCarousel
				href={href}
				products={favorites}
				enableBorder={enableBorder}
				enableAddToCart={enableAddToCart}
				enableQuantity={enableQuantity}
				enableQuickShop={enableQuickShop}
				buttonText={buttonText}
				enableAutoPlay={enableAutoPlay}
				enableArrows={enableArrows}
				enableDots={enableDots}
			/>
			{favorites?.length === 0 && (
				<Placeholder
					icon={'Heart'}
					title={'No favorites'}
					description={'You have no favorites yet'}
				/>
			)}
		</div>
	)
}

export default ShopifyProductFavoritesCarousel
