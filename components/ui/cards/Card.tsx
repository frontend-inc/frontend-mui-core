import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Box, Stack, Typography } from '@mui/material'
import { Image, UserChip, AvgRating, DisplayFields, SocialActions } from '../..'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../types'
import { Actions } from '../../../components'

const Card: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		ref,
		buttons,
		resource,
		displayFields = [],
		href,
		handleClick,
		height = 240,
		enableGradient = false,
		enableOverlay = false,
		enableComments = false,
		enableFavorites = false,
		enableLikes = false,
		enableRatings = false,
	} = props || {}

	const { label, title, image } = resource || {}

	const router = useRouter()

	const handleItemClick = () => {
		if (handleClick) {
			handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<Stack
			ref={ref}
			spacing={0}
			sx={{
				...sx.root,
				width: '100%',
				minHeight: height + 80,
			}}
		>
			<Box sx={sx.imageContainer}>
				<Image
					src={image?.url}
					height={height}
					alt={title}
					label={label}
					disableBorderRadius
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
					handleClick={handleItemClick}
				/>
			</Box>
			<Stack spacing={0} sx={sx.cardContent}>
				<Box sx={sx.content}>
					<Typography sx={sx.title} color="text.primary" variant="subtitle2">
						{truncate(title)}
					</Typography>
					{enableRatings == true && (
						<AvgRating resource={resource} size="small" />
					)}
					{displayFields?.length > 0 && (
						<DisplayFields fields={displayFields} resource={resource} />
					)}
					<UserChip user={resource?.user} />
				</Box>
				<Stack direction="row" justifyContent="space-between">
					<SocialActions
						resource={resource}
						enableLikes={enableLikes}
						enableFavorites={enableFavorites}
						enableComments={enableComments}
					/>
					{buttons?.length > 0 && (
						<Actions numVisible={0} buttons={buttons} resource={resource} />
					)}
				</Stack>
			</Stack>
		</Stack>
	)
}

export default Card

const sx = {
	root: {
		overflow: 'hidden',
		borderRadius: 1,
		width: '100%',
		minWidth: 280,
		bgcolor: 'background.default',
		transition: 'box-shadow 0.3s',
		border: '1px solid',
		borderColor: 'divider',
		'&:hover': {
			boxShadow: 2,
		},
	},
	imageContainer: {
		height: 230,
		minHeight: 230,
		width: '100%',
		position: 'relative',
		flexDirection: 'column',
		overflow: 'hidden',
	},
	gradient: {
		'&::after': {
			content: '""',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '50%',
			background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
		},
	},
	cardHeader: {
		p: 1,
		minHeight: 36,
	},
	cardHeaderBorder: {
		px: 1,
	},
	cardContent: {
		p: 1,
		width: '100%',
		display: 'flex',
		height: '100%',
		justifyContent: 'space-between',
		alignItems: 'space-between',
		bgcolor: 'background.default',
	},
	content: {
		height: '100%',
	},
	title: {
		width: '100%',
	},
	user: {},
}
