'use client'

import React from 'react'
import { ButtonType, DisplayFieldType } from '../../../types'
import { PDP } from '../..'
import { useResourceContext } from 'frontend-js'
import {
	ProductRating,
	DisplayMetafields,
	ButtonActions,
	SocialButtons,
	AddToCartButton,
} from '../..'

export type ProductDetailsProps = {
	handle?: string
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	product: any
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableRatings?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	handleEdit?: (res: any) => void
}

export type ProductProps = ProductDetailsProps & {
	slots?: {
		image?: any
		content?: any
	}
}

const ProductDetails: React.FC<ProductProps> = (props) => {
	const {
		displayFields = [],
		buttons,
		enableFavorites,
		enableLikes,
		enableSharing,
		enableRatings,
		enableGradient,
		enableOverlay,
		slots: defaultSlots = {
			image: {},
			content: {},
		},
	} = props || {}

	const { resource: product } = useResourceContext()

	let slots = {
		image: {
			enableGradient,
			enableOverlay,
			...defaultSlots.image,
		},
		content: {
			...defaultSlots.content,
		},
	}

	if (!product?.id) return null
	return (
		<PDP
			image={product?.image?.url}
			primary={product?.title}
			price={product?.display_price}
			compareAtPrice={product?.display_compare_at_price}
			description={product?.description}
			secondary={
				<div className="w-full">
					{enableRatings == true && (
						<ProductRating resource={product} enableTotal />
					)}
				</div>
			}
			actions={
				<SocialButtons
					size="large"
					justifyContent={'center'}
					resource={product}
					product={product}
					enableProductLikes={enableLikes}
					enableProductFavorites={enableFavorites}
					enableSharing={enableSharing}
				/>
			}
			addToCart={
				<div className="flex flex-row space-x-2">
					<AddToCartButton
						size="large"
						availableForSale
						productId={product?.id}
					/>
					{displayFields?.length > 0 && (
						<DisplayMetafields fields={displayFields} resource={product} />
					)}
				</div>
			}
			secondaryAction={
				buttons && (
					<ButtonActions
						justifyContent={'end'}
						buttons={buttons}
					/>
				)
			}
			slots={slots}
		/>
	)
}

export default ProductDetails
