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

type HeroArticleProps = HeroProps & {
	disableImage?: boolean
	direction?: 'column' | 'column-reverse'
}

const HeroArticle: React.FC<HeroArticleProps> = (props) => {
	const {
		actions,
		displayFields = [],
		direction = 'column',
		resource,
		disableImage = false,
		enableBorder,
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
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
			}}
			spacing={4}
		>
			{(actions || enableEdit) && (
				<Box pt={enableBorder ? 4 : 0} sx={sx.actions}>
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
			{!disableImage && direction == 'column-reverse' && (
				<Box sx={sx.imageContainer}>
					<Image
						src={image?.url}
						alt={title}
						height={400}
						label={label}
            enableOverlay={enableOverlay}
						disableBorderRadius={enableBorder}
					/>
				</Box>
			)}
			<Stack spacing={3} sx={sx.header}>
				<Typography color="text.primary" variant="h3">
					{title}
				</Typography>
        { enableRatings && (
          <AvgRating 
            justifyContent="center"
            resource={resource} 
            enableTotal
          />
        )}
				<DisplayFields
					alignItems="center"
					fields={displayFields}
					resource={resource}
				/>
				{enableBuyNow && (
					<BuyNowButton
						resource={resource}
						buttonText="Buy Now"
						justifyContent="center"
					/>
				)}
				{enableStripePaymentLink && (
					<StripePaymentLink
						resource={resource}
						buttonText="Checkout"
						justifyContent="center"
					/>
				)}
			</Stack>
			{!disableImage && direction == 'column' && (
				<Box sx={sx.imageContainer}>
					<Image
						src={image?.url}
						alt={title}
						height={400}
						label={label}
						disableBorderRadius={enableBorder}
					/>
				</Box>
			)}
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

export default HeroArticle

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
