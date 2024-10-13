'use client'

import React from 'react'
import { useSegment } from '../../../hooks/addons'
import { ShopifyProductCard } from '..'
import { useRouter, useParams } from 'next/navigation'
import { Carousel } from '../..'
import { ShopifyProductType } from 'frontend-shopify'
import { useApp } from '../../../hooks'

type ShopifyProductCarouselProps = {
	href: string
	loading?: boolean
	products: ShopifyProductType[]
	buttonText?: string
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableDots?: boolean
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuickShop?: boolean
	enableQuantity?: boolean
	enableOkendoStarRating?: boolean
}

const ShopifyProductCarousel: React.FC<ShopifyProductCarouselProps> = (
	props
) => {
	const {
		href = '/products',
		products,
		buttonText = 'Add to cart',
		enableAutoPlay = false,
		enableArrows = false,
		enableDots = true,
		enableBorder = false,
		enableAddToCart,
		enableQuickShop,
		enableQuantity = false,
		enableOkendoStarRating,
	} = props

	const { clientUrl } = useApp()

	const router = useRouter()
	const { trackProductClicked } = useSegment()

	const handleClick = (product) => {
		if (href) {
			const url = `${clientUrl}${href}/${product?.handle}`
			router.push(url)
		}
	}

	return (
		<Carousel
			enableAutoPlay={enableAutoPlay}
			enableArrows={enableArrows}
			enableDots={enableDots}
		>
			{products?.map((product) => (
				<div key={product.id} className="px-10 pb-4">
					<ShopifyProductCard
						product={product}
						handleClick={() => handleClick(product)}
						buttonText={buttonText}
						enableBorder={enableBorder}
						enableAddToCart={enableAddToCart}
						enableQuickShop={enableQuickShop}
						enableQuantity={enableQuantity}
						enableOkendoStarRating={enableOkendoStarRating}
					/>
				</div>
			))}
		</Carousel>
	)
}

export default ShopifyProductCarousel
