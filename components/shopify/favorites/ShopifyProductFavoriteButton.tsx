'use client'

import React, { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'
import { IconButton } from '../../../tailwind'
import { useAuth } from 'frontend-js'
import { ShopifyProductType } from 'frontend-shopify'
import { useApp, useSocial } from '../../../hooks'
import { isShopifyFavorite } from '../../../helpers'
import { cn } from '../../../shadcn/lib/utils'

type ShopifyProductFavoriteButtonProps = {
	product: ShopifyProductType
	variant?: 'rounded' | 'circular'
	size?: 'small' | 'large'
}

const ShopifyProductFavoriteButton: React.FC<
	ShopifyProductFavoriteButtonProps
> = ({ product, variant = 'rounded', size }) => {
	const { setAuthOpen } = useApp()
	const { currentUser } = useAuth()

	const [isFavorite, setIsFavorite] = useState(false)

	const { shopifyFavorite, shopifyUnfavorite } = useSocial()

	const handleClick = async () => {
		if (!currentUser?.id) return setAuthOpen(true)
		if (isFavorite) {
			setIsFavorite(false)
			shopifyUnfavorite(product.handle)
		} else {
			setIsFavorite(true)
			shopifyFavorite(product.handle)
		}
	}

	useEffect(() => {
		setIsFavorite(isShopifyFavorite(currentUser, product.handle))
	}, [currentUser?.id, product?.handle])

	return (
		<IconButton
			onClick={handleClick}
			className={cn(
				'min-w-[40px]',
				variant == 'circular' ? 'rounded-full' : 'rounded-lg',
				size === 'large' && 'border border-divider',
				'transition-transform duration-200',
				isFavorite && 'transform scale-110'
			)}
		>
			<Heart
				className={cn(
					'w-5 h-5 text-foreground',
					isFavorite ? 'fill-current' : 'stroke-current'
				)}
			/>
		</IconButton>
	)
}

export default ShopifyProductFavoriteButton
