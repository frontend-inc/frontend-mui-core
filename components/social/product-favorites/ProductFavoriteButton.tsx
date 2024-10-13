'use client'

import React, { useEffect, useState } from 'react'
import { isProductFavorited } from '../../../helpers'
import { useAuth } from 'frontend-js'
import { useSocial, useApp } from '../../../hooks'
import { Bookmark } from 'lucide-react'
import { IconButton } from '../../../tailwind'
import { cn } from '../../../shadcn/lib/utils'

type ProductFavoriteButtonProps = {
	product: any
	size?: 'small' | 'large'
	color?: string
	numFavorites?: number
}

export default function ProductFavoriteButton({
	product,
	size = 'small',
	color = 'text-secondary',
	numFavorites,
}: ProductFavoriteButtonProps) {
	const { fetchMe, currentUser } = useAuth()
	const { setAuthOpen } = useApp()

	const [isFavorite, setIsFavorite] = useState(false)

	const { favoriteProduct, unfavoriteProduct } = useSocial()

	const handleClick = async (ev: React.MouseEvent) => {
		if (!currentUser?.id) {
			return setAuthOpen(true)
		}
		if (isFavorite) {
			setIsFavorite(false)
			await unfavoriteProduct(product?.handle)
			fetchMe()
		} else {
			setIsFavorite(true)
			await favoriteProduct(product?.handle)
			fetchMe()
		}
	}

	useEffect(() => {
		if (currentUser && product?.handle) {
			setIsFavorite(isProductFavorited(currentUser, product?.handle))
		}
	}, [currentUser, product?.handle])

	return (
		<div>
			<IconButton
				onClick={handleClick}
				className={cn(
					color,
					`hover:${color}`,
					size === 'large' &&
						'border border-divider bg-background text-secondary hover:bg-background hover:text-secondary',
					isFavorite && 'text-primary hover:text-primary-dark border-primary',
					'transition-transform duration-200',
					isFavorite && 'transform scale-110'
				)}
			>
				<Bookmark
					className={cn(
						'w-4 h-4 text-foreground',
						isFavorite ? 'fill-current ' : 'stroke-current'
					)}
				/>
			</IconButton>
		</div>
	)
}
