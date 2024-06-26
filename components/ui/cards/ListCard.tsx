import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Box, Stack, Typography } from '@mui/material'
import {
	Image,
	DisplayFields,
	TouchableOpacity,
	FavoriteButton,
  AvgRating,
  UserButton
} from '../..'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../types'
import { Actions } from '../..'

const CardList: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		actions,
		resource,
		displayFields = [],
		href,
		height = 180,
		textVariant = 'subtitle1',
		handleClick,
		objectFit = 'cover',
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
    enableRatings = false,
    enableUsers = false 
	} = props || {}

	const router = useRouter()

	const { label, title, image } = resource || {}

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<Box
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
			}}
		>
			<Stack
				sx={sx.container}
				spacing={1}
				flexDirection={{ xs: 'column', sm: 'row' }}
			>
				<Box sx={sx.image}>
					<TouchableOpacity handleClick={handleItemClick}>
						<Image
							label={label}
							src={image?.url}
							height={height}
							objectFit={objectFit}
							alt={title}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
						/>
					</TouchableOpacity>
				</Box>
				<Stack
					direction="row"
					spacing={1}
					sx={{
						...sx.contentArea,
						...(enableBorder && sx.contentAreaBorder),
					}}
				>
					<Stack
						direction="column"
						spacing={0.5}
						sx={{
							...sx.content,
							...(enableBorder && sx.contentBorder),
						}}
					>            
            <Typography color="textPrimary" variant={textVariant}>
							{truncate(title)}
						</Typography>
            { enableRatings == true && (
              <AvgRating resource={resource} size="small" />
            )}
						<DisplayFields fields={displayFields} resource={resource} />
            { enableUsers == true && (
              <UserButton 
                user={ resource?.user }
              />            
            )}
					</Stack>
					<Stack direction="row" justifyContent="flex-end">
						{enableFavorites == true && <FavoriteButton handle={resource?.handle} />}
						<Actions numVisible={0} actions={actions} resource={resource} />
					</Stack>
				</Stack>
			</Stack>
		</Box>
	)
}

export default CardList

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
    pt: 1,
    pb: 2,
		overflow: 'hidden',    
    borderBottom: '1px solid',
    borderColor: 'divider',
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
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
	container: {
		width: '100%',
	},
	image: {
		pr: {
			sm: 2,
			xs: 0,
		},
		mr: {
			sm: 2,
			xs: 0,
		},
		width: {
			sm: 220,
			xs: '100%',
		},
		minWidth: {
			sm: 220,
			xs: '100%',
		},
		height: '100%',
	},
	contentArea: {
		width: '100%',
	},
	contentAreaBorder: {
		pr: 1,
	},
	content: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		height: '100%',
		py: {
			sm: 0,
			xs: 1,
		},
	},
	contentBorder: {		
		px: {
			sm: 0,
			xs: 2,
		},
	},
	description: {
		maxWidth: '320px',
	},
	actions: {
		display: 'flex',
		flexDirection: 'column',
	},
	actionsBorder: {
		px: 1,
		pb: {
			sm: 0,
			xs: 1,
		},
	},
}
