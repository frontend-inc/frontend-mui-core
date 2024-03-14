import React from 'react'
import { Icon, Placeholder } from '../..'
import { ProductGrid } from '..'
import { Box, Typography } from '@mui/material'
import { useFavorites } from 'frontend-shopify'

type ProductFavoritesProps = {
	editing?: boolean
	title?: string
	perPage?: string
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	enableQuickShop?: boolean
	buttonText?: string
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
}

const ProductFavorites: React.FC<ProductFavoritesProps> = (props) => {
	const {
		editing = false,
		title = 'Favorites',
		enableBorder = false,
		buttonText = 'Add to cart',
		enableAddToCart,
		enableQuantity,
		enableQuickShop,
		emptyIcon = 'Heart',
		emptyTitle = 'No favorites',
		emptyDescription = 'You have no favorites yet',
	} = props || {}

	const { favorites } = useFavorites()

	return (
		<Box sx={sx.root}>
			{title && (
				<Typography mb={1} color="textPrimary" variant="h5">
					{title}
				</Typography>
			)}
      <ProductGrid
        editing={editing}
        products={favorites}
        enableBorder={enableBorder}
        enableAddToCart={enableAddToCart}
        enableQuantity={enableQuantity}
        enableQuickShop={enableQuickShop}
        buttonText={buttonText}
      />			
			{favorites?.length === 0 && (
				<Placeholder
					icon={<Icon name={emptyIcon} />}
					title={emptyTitle}
					description={emptyDescription}
				/>
			)}
		</Box>
	)
}

export default ProductFavorites

const sx = {
	root: {
		width: '100%',
	},
}
