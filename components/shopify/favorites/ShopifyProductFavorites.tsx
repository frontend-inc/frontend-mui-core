'use client'

import React from 'react'
import { Placeholder } from '../..'
import { ShopifyProductArray } from '..'
import { UserType } from 'frontend-js'

export type ShopifyProductFavoritesProps = {
	href: string
	user: UserType
	perPage?: string
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	enableQuickShop?: boolean
	buttonText?: string
}

const ShopifyProductFavorites: React.FC<ShopifyProductFavoritesProps> = (
	props
) => {
	const {
		href,
		user,
		enableBorder = false,
		buttonText = 'Add to cart',
		enableAddToCart,
		enableQuantity,
		enableQuickShop,
	} = props || {}

	const { shopify_favorites: favorites } = user || {}

	return (
		<div className="w-full">
			<ShopifyProductArray
				href={href}
				handles={favorites || []}
				enableBorder={enableBorder}
				enableAddToCart={enableAddToCart}
				enableQuantity={enableQuantity}
				enableQuickShop={enableQuickShop}
				buttonText={buttonText}
			/>
			{favorites?.length === 0 && (
				<Placeholder
					icon={'Heart'}
					title={'No favorites'}
					description={'You have no favorites yet.'}
				/>
			)}
		</div>
	)
}

export default ShopifyProductFavorites
