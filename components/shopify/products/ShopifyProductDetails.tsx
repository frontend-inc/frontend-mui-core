'use client'

import React from 'react'
import {
	ShopifyAddToCartButton,
	ShopifyProductDescription,
	ShopifyProductInfo,
	ShopifyProductImages,
	ShopifyProductVariantSelector,
	ShopifyProductMetafields,
	ShopifyTrackRecentlyViewed,
} from '..'
import {
	useProductDetails,
	ShopifyMetafieldType,
	ShopifyProductType,
} from 'frontend-shopify'
import { cn } from '../../../shadcn/lib/utils'

export type ShopifyProductDetailsProps = {
	shopifyProduct: ShopifyProductType
	buttonText?: string
	metafields?: ShopifyMetafieldType[]
	enableQuantity?: boolean
	enableFavorites?: boolean
	enableSubscription?: boolean
	enableOkendoStarRating?: boolean
}

const ShopifyProductDetails: React.FC<ShopifyProductDetailsProps> = ({
	shopifyProduct: product,
	buttonText,
	metafields,
	enableQuantity = true,
	enableSubscription = true,
	enableFavorites,
	enableOkendoStarRating,
}) => {
	const {
		price,
		compareAtPrice,
		variant,
		selectedOptions,
		handleOptionChange,
		image,
		images,
		handleImageClick,
	} = useProductDetails({
		product,
	})

	return (
		<div className={cn('flex flex-col sm:flex-row', 'w-full')}>
			<div className={cn('w-full sm:w-1/2', 'p-0 sm:p-1')}>
				<ShopifyProductImages
					product={product}
					image={image}
					images={images}
					handleClick={handleImageClick}
				/>
			</div>
			<div className={cn('w-full sm:w-1/2', 'p-0 sm:p-1')}>
				<div className="flex flex-col space-y-8">
					<div className="flex flex-col space-y-4">
						<ShopifyProductInfo
							product={product}
							price={price}
							compareAtPrice={compareAtPrice}
							enableOkendoStarRating={enableOkendoStarRating}
						/>
						<ShopifyProductVariantSelector
							product={product}
							selectedOptions={selectedOptions}
							handleOptionChange={handleOptionChange}
						/>
						<ShopifyAddToCartButton
							product={product}
							variant={variant}
							enableQuantity={enableQuantity}
							enableSubscription={enableSubscription}
							enableFavorites={enableFavorites}
							label={buttonText}
						/>
					</div>
					<ShopifyProductDescription product={product} />
					{metafields && (
						<ShopifyProductMetafields
							product={product}
							metafields={metafields}
						/>
					)}
					<ShopifyTrackRecentlyViewed product={product} />
				</div>
			</div>
		</div>
	)
}

export default ShopifyProductDetails
