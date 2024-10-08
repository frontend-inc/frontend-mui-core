import React from 'react'
import { Rating, Stack, Typography } from '@mui/material'

type ProductRatingProps = {
	resource: any
	enableTotal?: boolean
	size?: 'small' | 'medium' | 'large'
	justifyContent?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
		| 'stretch'
		| 'baseline'
}

const ProductRating: React.FC<ProductRatingProps> = (props) => {
	const {
		resource,
		justifyContent = 'flex-start',
		size = 'medium',
		enableTotal = false,
	} = props || {}
	const { avg_rating: rating, num_reviews: numReviews } = resource || {}
	return (
		<Stack
			alignItems="center"
			justifyContent={justifyContent}
			direction="row"
			spacing={1}
		>
      { rating > 0 ? (
			<Rating
				size={size}
				value={rating}
				readOnly
				sx={{
					color: 'primary.main',
					'& .MuiRating-iconEmpty': {
						color: 'text.secondary',
					},
				}}
			/>
      ):(
        <Typography color={'text.secondary'} variant="body2" sx={ sx.noReviews}>
          No reviews yet
        </Typography>
      )}
			{rating > 0 && (
				<Typography color={'text.secondary'} variant="caption">
					({rating})
				</Typography>
			)}
			{rating > 0 && enableTotal && (
				<Typography color={'text.secondary'} variant="caption">
					{numReviews} reviews
				</Typography>
			)}
		</Stack>
	)
}

export default ProductRating

const sx = {
  noReviews: {
    fontStyle: 'italic',
  }
}
