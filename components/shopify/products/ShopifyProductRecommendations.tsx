'use client'

import React, { useEffect, useState } from 'react'
import { useProducts } from 'frontend-shopify'
import {
	ShopifyProducts,
	ShopifyProductCarousel,
} from '../../../components/shopify'

export type ShopifyProductRecommendationsProps = {
	handle?: string
	href: string
	layout?: 'grid' | 'carousel'
	perPage?: string
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	enableQuickShop?: boolean
	enableOkendoStarRating?: boolean
	buttonText?: string
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false
}

const ShopifyProductRecommendations: React.FC<
	ShopifyProductRecommendationsProps
> = (props) => {
	const {
		handle,
		href,
		layout = 'grid',
		perPage = 12,
		enableBorder = false,
		buttonText = 'Add to cart',
		enableAddToCart,
		enableQuantity,
		enableQuickShop,
		enableOkendoStarRating,
	} = props || {}

	const [similarProducts, setSimilarProducts] = useState<any>()

	const {
		loading,
		findProduct,
		product,
		products,
		findProductRecommendations,
	} = useProducts()

	useEffect(() => {
		if (product) {
			findProductRecommendations(product?.id)
		}
	}, [product])

	// Hide the current product and any products marked hidden
	useEffect(() => {
		if (product && products) {
			setSimilarProducts(
				products
					.filter((p) => p.id != product?.id)
					.filter((p) => !p.tags.includes('hidden'))
					.filter((p, index) => index < Number(perPage))
			)
		}
	}, [product, products])

	useEffect(() => {
		if (handle) {
			findProduct(String(handle))
		}
	}, [handle])

	return (
		<div className="w-full">
			{layout == 'grid' && (
				<ShopifyProducts
					href={href}
					loading={loading}
					products={similarProducts}
					enableBorder={enableBorder}
					enableAddToCart={enableAddToCart}
					enableQuantity={enableQuantity}
					enableQuickShop={enableQuickShop}
					enableOkendoStarRating={enableOkendoStarRating}
					buttonText={buttonText}
				/>
			)}
			{layout == 'carousel' && (
				<ShopifyProductCarousel
					href={href}
					loading={loading}
					products={similarProducts}
					enableBorder={enableBorder}
					enableAddToCart={enableAddToCart}
					enableQuantity={enableQuantity}
					enableQuickShop={enableQuickShop}
					enableOkendoStarRating={enableOkendoStarRating}
					buttonText={buttonText}
				/>
			)}
		</div>
	)
}

export default ShopifyProductRecommendations
