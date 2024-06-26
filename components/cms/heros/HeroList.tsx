import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import {
	DisplayFields,
	BuyNowButton,
	StripePaymentLink,
	SocialButtons,
	Actions,
	Image,
  AvgRating,
  ExpandableText,
} from '../..'
import { HeroProps } from './Hero'
import { flattenDocument } from 'frontend-js'
import { buildActions } from '../../../helpers'

const HeroList: React.FC<HeroProps> = (props) => {
	const {
		actions,
		displayFields = [],
		resource,
    enableOverlay,
		enableEdit,
		handleEdit,
		enableFavorites,
		enableLikes,
		enableSharing,
    enableRatings,
		enableBuyNow,
		enableStripePaymentLink,
	} = props || {}
	const { label, title, image, description } = resource || {}
	return (
		<Stack
			sx={ sx.root }
			spacing={4}
		>
			{(actions || enableEdit) && (
				<Box sx={sx.actions}>
					<Actions
						actions={buildActions({
							enableEdit,
							handleEdit,
							actions,
						})}
						numVisible={4}
						resource={flattenDocument(resource)}
						justifyContent="center"
					/>
				</Box>
			)}
			<Stack spacing={3} sx={sx.header}>
				<Typography color="text.primary" variant="h3">
					{title}
				</Typography>
        { enableRatings == true && (
          <AvgRating 
            justifyContent="center"
            resource={resource} 
            enableTotal
          />
        )}
        { displayFields?.length > 0 && (
          <DisplayFields
            alignItems="center"
            fields={displayFields}
            resource={resource}
          />
        )}
				{enableBuyNow == true && (
					<BuyNowButton
						resource={resource}
						buttonText="Buy Now"
						justifyContent="center"
					/>
				)}
				{enableStripePaymentLink == true && (
					<StripePaymentLink
						resource={resource}
						buttonText="Checkout"
						justifyContent="center"
					/>
				)}
			</Stack>
      <Box sx={sx.imageContainer}>
        <Image
          src={image?.url}
          alt={title}
          height={400}
          label={label}          
        />
      </Box>
			<SocialButtons
				handle={resource?.handle}
				enableLikes={enableLikes}
				enableFavorites={enableFavorites}
				enableSharing={enableSharing}
			/>
			<Box sx={sx.content}>
				<Typography variant="body1" color="text.primary" sx={sx.text}>
					{description}
				</Typography>
			</Box>
		</Stack>
	)
}

export default HeroList

const sx = {
	root: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
		pb: 2,
	},
	header: {
		maxWidth: 500,
		width: '100%',
		textAlign: 'center',
	},
	content: {
		width: '100%',
		maxWidth: {
			sm: 500,
			xs: '100%',
		},
	},
	text: {
		width: '100%',
		whiteSpace: 'pre-line',
	},
	caption: {
		color: 'text.secondary',
	},
	actions: {
		justifyContent: 'center',
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
	imageContainer: {
		width: '100%',
		borderRadius: 1,
	},
}
