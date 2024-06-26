import React, { useContext } from 'react'
import { Box } from '@mui/material'
import { ProductCard } from '../../../components/shopify'
import { useRouter } from 'next/router'
import { useSegment } from '../../../hooks/addons'
import { ProductType } from 'frontend-shopify'
import { AppContext } from '../../../context'

type ProductGridProps = {
	href: string
	loading?: boolean
	products: ProductType[]
	xs?: number
	sm?: number
	md?: number
	lg?: number
	xl?: number
	buttonText?: string
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuickShop?: boolean
	enableQuantity?: boolean
	enableOkendoStarRating?: boolean
}

const ProductGrid: React.FC<ProductGridProps> = (props) => {
	const { clientUrl } = useContext(AppContext)

	const {
		href = '/products',
		products,
		buttonText = 'Add to cart',
		enableBorder = false,
		enableAddToCart,
		enableQuickShop,
		enableQuantity,
		enableOkendoStarRating,
	} = props

	const router = useRouter()
	const { trackProductClicked } = useSegment()

	const handleClick = (product) => {
		if (href) {
			const url = `${clientUrl}${href}/${product?.handle}`
			router.push(url)
		}
	}

	return (
		<Box sx={sx.grid}>
			{products?.map((product) => (
				<Box sx={sx.item} key={product?.id}>
					<ProductCard
						product={product}
						handleClick={() => handleClick(product)}
						enableBorder={enableBorder}
						enableAddToCart={enableAddToCart}
						enableQuickShop={enableQuickShop}
						enableQuantity={enableQuantity}
						enableOkendoStarRating={enableOkendoStarRating}
						buttonText={buttonText}
					/>
				</Box>
			))}
		</Box>
	)
}

export default ProductGrid

const sx = {
	item: {
		p: 1,
		gridColumn: 'span 1',
	},
	grid: {
		maxWidth: '100%',
		display: 'grid',
		gridTemplateColumns: {
			md: 'repeat(3, 1fr)',
			sm: 'repeat(2, 1fr)',
			xs: '1fr',
		},
	},
}
