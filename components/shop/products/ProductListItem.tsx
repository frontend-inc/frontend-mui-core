'use client'

import React from 'react'
import { ProductCard } from '../..'
import { SecondaryFields, SocialButtons } from '../..'
import { ButtonType, DisplayFieldType } from '../../../types'
import { AddToCartButton } from '../../../components'

type ProductListItemProps = {
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	resource: any
	buttonText?: string
	href?: string
	handleClick: () => void
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableUsers?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableRatings?: boolean
	disableBorder?: boolean
}

const ProductListItem: React.FC<ProductListItemProps> = (props) => {
	const {
		buttons,
		resource,
		displayFields = [],
		href,
		handleClick,
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
		enableLikes = false,
		enableRatings = false,
		enableUsers = false,
		disableBorder = false,
		...rest
	} = props

	return (
		<ProductCard
			label={resource?.label}
			image={resource?.image?.url}
			primary={resource?.title}
			price={resource?.display_price}
			compareAtPrice={resource?.display_compare_at_price}
			handleClick={handleClick}
			secondary={
				<SecondaryFields
					enableRatings={enableRatings}
					enableUsers={enableUsers}
					fields={displayFields}
					resource={resource}
				/>
			}
			actions={
				<div>
					<SocialButtons
						size="small"
						justifyContent="flex-start"
						resource={resource}
						product={resource}
						enableProductLikes={enableLikes}
						enableProductFavorites={enableFavorites}
					/>
				</div>
			}
			addToCart={
				<AddToCartButton
					availableForSale
					fullWidth
					productId={resource?.id}
					size="large"
				/>
			}
			disableBorder={disableBorder}
			slots={{
				image: {
					enableGradient,
					enableOverlay,
				},
			}}
		/>
	)
}

export default ProductListItem
