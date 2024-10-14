'use client'

import React, { useEffect } from 'react'
import { ShopifyAddToCartButton, ShopifyQuickShopButton } from '..'
import { Stack, Typography } from '../../../tailwind'
import { truncate } from '../../../helpers'
import SwipeableShopifyProductImages from './images/SwipeableShopifyProductImages'
import { formatCurrency } from 'frontend-shopify'
import { useProducts } from 'frontend-shopify'
import { cn } from '../../../shadcn/lib/utils'

export type ShopifyProductFeaturedProps = {
	handle: string
	flexDirection?: 'row' | 'row-reverse'
	handleClick?: () => void
	buttonText?: string
	quickShopButtonText?: string
	height?: number
	width?: number
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	enableQuickShop?: boolean
}

const ShopifyProductFeatured: React.FC<ShopifyProductFeaturedProps> = ({
	handle,
	flexDirection = 'row',
	height = 360,
	width = 360,
	buttonText = 'Add to Cart',
	quickShopButtonText = 'Quick Shop',
	handleClick,
	enableBorder = false,
	enableAddToCart = false,
	enableQuantity = false,
	enableQuickShop = false,
}) => {
	const { loading, product, findProduct } = useProducts()

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		}
	}

	useEffect(() => {
		if (handle) {
			findProduct(handle)
		}
	}, [handle, findProduct])

	if (!product) return null
	return (
		<div
			className={cn(
				'flex flex-row rounded overflow-hidden',
				enableBorder && 'border border-divider'
			)}
		>
			<Stack direction={flexDirection} className="w-full">
				<div className="px-1 flex justify-end items-center">
					<SwipeableShopifyProductImages
						product={product}
						height={height}
						width={width}
						handleClick={handleItemClick}
					/>
				</div>
				<Stack spacing={2} className="justify-center items-start h-full">
					<div>
						<Typography variant="h3">
							{product?.title}
						</Typography>
						<Typography
							className="text-muted-foreground"
							variant="body2"
							className="max-w-[320px]"
						>
							{truncate(product?.description, 60)}
						</Typography>
						<Typography className="text-muted-foreground"variant="body2">
							{formatCurrency(product?.priceRange?.minVariantPrice?.amount)}
						</Typography>
					</div>
					<Stack
						direction={
							enableAddToCart && enableQuickShop && !enableQuantity
								? 'row'
								: 'column'
						}
						spacing={1}
					>
						{enableAddToCart && (
							<ShopifyAddToCartButton
								product={product}
								variant={product?.variants?.edges[0]?.node}
								enableQuantity={enableQuantity}
								label={buttonText}
							/>
						)}
						{enableQuickShop && (
							<ShopifyQuickShopButton
								size="large"
								product={product}
								color={enableAddToCart ? 'secondary' : 'primary'}
								buttonText={buttonText}
								quickShopButtonText={quickShopButtonText}
							/>
						)}
					</Stack>
				</Stack>
			</Stack>
		</div>
	)
}

export default ShopifyProductFeatured
