'use client'

import React from 'react'
import { ShopifyProductCard } from '..'
import { useRouter, useParams } from 'next/navigation'
import { useSegment } from '../../../hooks/addons'
import { ShopifyProductType } from 'frontend-shopify'
import { useApp } from '../../../hooks'

type ShopifyProductsProps = {
	href: string
	loading?: boolean
	products: ShopifyProductType[]
	xs?: number
	sm?: number
	md?: number
	lg?: number
	xl?: number
	buttonText?: string
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuickShop?: boolean
	enableQuantity?: boolean
	enableOkendoStarRating?: boolean
}

const ShopifyProducts: React.FC<ShopifyProductsProps> = ({
	href = '/products',
	products,
	buttonText = 'Add to cart',
	enableBorder = false,
	enableAddToCart,
	enableQuickShop,
	enableQuantity,
	enableOkendoStarRating,
}) => {
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
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-full">
			{products?.map((product) => (
				<div className="p-1" key={product?.id}>
					<ShopifyProductCard
						product={product}
						handleClick={() => handleClick(product)}
						enableBorder={enableBorder}
						enableAddToCart={enableAddToCart}
						enableQuickShop={enableQuickShop}
						enableQuantity={enableQuantity}
						enableOkendoStarRating={enableOkendoStarRating}
						buttonText={buttonText}
					/>
				</div>
			))}
		</div>
	)
}

export default ShopifyProducts
