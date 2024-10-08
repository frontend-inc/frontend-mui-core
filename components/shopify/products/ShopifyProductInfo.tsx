import React from 'react'
import { ShopifyProductType } from 'frontend-shopify'
import { Typography } from '../../../tailwind'
import { formatCurrency } from 'frontend-shopify'
import { OkendoStarRating } from '../../../components/addons'

type ShopifyProductDetailsProps = {
	product?: ShopifyProductType
	price?: number
	compareAtPrice?: number
	enableOkendoStarRating?: boolean
}

const ShopifyProductDetails: React.FC<ShopifyProductDetailsProps> = (props) => {
	const {
		product,
		price,
		compareAtPrice,
		enableOkendoStarRating = false,
	} = props

	if (!product) return null
	return (
		<div className='flex flex-col space-y-2'>
			<Typography color="text.primary" variant="h4">
				{product.title}
			</Typography>
			{enableOkendoStarRating && <OkendoStarRating product={product} />}
      <div className="flex flex-row space-x-2">
        <Typography color="text.primary" variant="h6" sx={sx.price}>
          {price && formatCurrency(price)}				
        </Typography>
        {compareAtPrice && (
          <Typography variant="subtitle2" color="text.secondary" className='line-through'>
            {formatCurrency(compareAtPrice)}
          </Typography>
          )}
        </div>
		</div>
	)
}

export default ShopifyProductDetails

const sx = {
	price: {
		'& span': {
			textDecoration: 'line-through',
			color: 'text.secondary',
			ml: 1,
		},
	},
}
