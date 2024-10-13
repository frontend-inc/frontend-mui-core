'use client'

import React from 'react'
import { Hidden } from '../../../../tailwind'
import ShopifyProductImagesSlider from './ShopifyProductImagesSlider'
import SwipeableShopifyProductImages from './SwipeableShopifyProductImages'
import { PDP_IMAGE_HEIGHT } from '../../../../constants/index'
import { ShopifyProductType, ShopifyImageType } from 'frontend-shopify'

type ShopifyProductImagesProps = {
	product: ShopifyProductType
	image: ShopifyImageType
	images: ShopifyImageType[]
	handleClick: (img: ShopifyImageType) => void
}

const ShopifyProductImages: React.FC<ShopifyProductImagesProps> = (props) => {
	const { product, image, images, handleClick } = props

	return (
		<>
			<Hidden smDown>
				<ShopifyProductImagesSlider
					image={image}
					images={images}
					handleClick={handleClick}
				/>
			</Hidden>
			<Hidden smUp>
				<SwipeableShopifyProductImages
					objectFit="contain"
					height={PDP_IMAGE_HEIGHT}
					width={PDP_IMAGE_HEIGHT}
					product={product}
				/>
			</Hidden>
		</>
	)
}

export default ShopifyProductImages
