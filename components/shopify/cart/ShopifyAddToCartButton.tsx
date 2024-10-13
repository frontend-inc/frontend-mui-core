'use client'

import React, { useState, useContext } from 'react'
import { useCart } from 'frontend-shopify'
import { useSegment } from '../../../hooks/addons'
import { useAlerts } from '../../../hooks'
import { Button } from '../../../tailwind'
import {
	ShopifyProductFavoriteButton,
	ShopifyQuantitySelector,
	ShopifySubscriptionSelector,
} from '..'
import { ShopifyContext } from 'frontend-shopify'
import { ShopifyProductType, ProductVariantType } from 'frontend-shopify'

type ShopifyAddToCartButtonProps = {
	product: ShopifyProductType
	variant: ProductVariantType
	buttonVariant?: 'contained' | 'outlined' | 'text'
	label?: string
	enableQuantity?: boolean
	enableSubscription?: boolean
	enableFavorites?: boolean
	size?: 'small' | 'medium' | 'large'
}

const ShopifyAddToCartButton: React.FC<ShopifyAddToCartButtonProps> = (
	props
) => {
	const { showAlertError } = useAlerts()
	const { trackAddToCart } = useSegment()
	const { toggleCart } = useContext(ShopifyContext) as any
	const { loading, cartLineAdd } = useCart()

	const {
		label = 'Add to Cart',
		product,
		variant,
		buttonVariant = 'contained',
		enableQuantity = false,
		enableSubscription = false,
		enableFavorites = false,
	} = props

	const [quantity, setQuantity] = useState<number>(1)
	const [activeSellingPlanId, setActiveSellingPlanId] = useState<any>(null)

	const handleSellingPlanChange = (ev) => {
		const { value } = ev.target
		setActiveSellingPlanId(value)
	}

	const handleAddQuantity = () => {
		setQuantity(quantity + 1)
	}

	const handleRemoveQuantity = () => {
		if (quantity <= 1) return
		setQuantity(quantity - 1)
	}

	const handleAddToCart = async () => {
		if (!product?.availableForSale) {
			showAlertError('Please select all options')
			return
		}
		if (variant?.id) {
			if (variant?.availableForSale) {
				let line = {
					merchandiseId: variant?.id,
					quantity,
					sellingPlanId: activeSellingPlanId,
				}
				cartLineAdd(line)
				trackAddToCart({
					quantity: quantity,
					variant: variant,
					product: product,
				})
				setTimeout(() => toggleCart(), 500)
			} else {
				showAlertError('This product is not available for sale')
			}
		} else {
			showAlertError('Please select all options')
		}
	}

	if (!product) return null
	return (
		<div className="flex flex-col space-y-2">
			{enableSubscription && (
				<ShopifySubscriptionSelector
					product={product}
					activeSellingPlanId={activeSellingPlanId}
					handleChange={handleSellingPlanChange}
				/>
			)}
			<div className="flex flex-row space-x-2 justify-content items-center">
				{enableQuantity == true && (
					<ShopifyQuantitySelector
						quantity={quantity}
						handleAddQuantity={handleAddQuantity}
						handleRemoveQuantity={handleRemoveQuantity}
					/>
				)}
				<Button
					fullWidth
					onClick={handleAddToCart}
					variant={buttonVariant}
					loading={loading}
				>
					{label}
				</Button>
				{enableFavorites && <ShopifyProductFavoriteButton product={product} />}
			</div>
		</div>
	)
}

export default ShopifyAddToCartButton
