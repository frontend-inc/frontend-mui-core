import React, { useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import {
	AddToCartButton,
	ProductInfo,
	ProductImages,
	ProductVariantSelector,
	ProductMetafields,
	TrackRecentlyViewed,
} from '../../../components/shopify'
import {
	useProductDetails,
	MetafieldIdentifierType,
	ProductType,
} from 'frontend-shopify'

type ProductDetailPageProps = {
	shopifyProduct: ProductType
	buttonText?: string
	metafields?: MetafieldIdentifierType[]
	enableQuantity?: boolean
	enableFavorites?: boolean
	enableSubscription?: boolean
	enableOkendoStarRating?: boolean
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = (props) => {
	const {
		shopifyProduct: product,
		buttonText,
		metafields,
		enableQuantity = true,
		enableSubscription = true,
		enableFavorites,
		enableOkendoStarRating,
	} = props

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

	/*
	useEffect(() => {
		if (handle) {
			findProduct(String(handle), metafields)
		}
	}, [handle]) */

	return (
		<Stack spacing={0} direction="row" sx={sx.container}>
			<Box sx={sx.left}>
				<ProductImages
					product={product}
					image={image}
					images={images}
					handleClick={handleImageClick}
				/>
			</Box>
			<Box sx={sx.right}>
				<Stack spacing={2}>
					<ProductInfo
						product={product}
						price={price}
						compareAtPrice={compareAtPrice}
						enableOkendoStarRating={enableOkendoStarRating}
					/>
					<ProductVariantSelector
						product={product}
						selectedOptions={selectedOptions}
						handleOptionChange={handleOptionChange}
					/>
					<AddToCartButton
						product={product}
						variant={variant}
						enableQuantity={enableQuantity}
						enableSubscription={enableSubscription}
						enableFavorites={enableFavorites}
						label={buttonText}
					/>
					{metafields && (
						<ProductMetafields product={product} metafields={metafields} />
					)}
					<TrackRecentlyViewed product={product} />
				</Stack>
			</Box>
		</Stack>
	)
}

export default ProductDetailPage

const sx = {
	container: {
		display: 'flex',
		flexDirection: {
			xs: 'column',
			sm: 'row',
		},
	},
	left: {
		p: {
			sm: 1,
			xs: 0,
		},
		width: {
			xs: '100%',
			sm: '50%',
		},
	},
	right: {
		p: {
			sm: 1,
			xs: 0,
		},
		width: {
			xs: '100%',
			sm: '50%',
		},
	},
	root: {
		px: 0,
	},
	actions: {
		alignItems: 'flex-end',
	},
}
