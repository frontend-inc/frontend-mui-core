'use client'

import React, { useEffect } from 'react'
import { useProducts } from 'frontend-shopify'
import { ShopifyProductCard } from '..'
import { useRouter, useParams } from 'next/navigation'
import { useApp } from '../../../hooks'

type ProductArrayProps = {
	href?: string
	handles: string[]
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuickShop?: boolean
	enableQuantity?: boolean
	enableOkendoStarRating?: boolean
	buttonText?: string
}

const ProductArray: React.FC<ProductArrayProps> = ({
	href,
	handles,
	enableBorder = false,
	enableAddToCart = false,
	enableQuickShop = false,
	enableQuantity = false,
	enableOkendoStarRating = false,
	buttonText,
}) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const handleClick = (product) => {
		if (href) {
			const url = `${clientUrl}${href}/${product?.handle}`
			router.push(url)
		}
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-full">
			{handles?.map((handle) => {
				const { product, findProduct } = useProducts()
				useEffect(() => {
					findProduct(handle)
				}, [handle, findProduct])

				if (!product) return null
				return (
					<div key={product?.id} className="p-1">
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
				)
			})}
		</div>
	)
}

export default ProductArray
