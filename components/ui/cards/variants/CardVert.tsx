import React, { useContext } from 'react'
import { AppContext } from '../../../../context'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Image, TouchableOpacity, MenuButton } from '../../..'
import { truncate } from '../../../../helpers'
import { useRouter } from 'next/router'
import { CARD_VERT_HEIGHT, CARD_VERT_WIDTH } from '../../../../constants/index'
import { CardProps } from '../../../../types'

const CardVert: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		label,
		title,
		image = '',
		href,
		handleClick,
		buttonText,
		objectFit = 'cover',
		height = CARD_VERT_HEIGHT,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
    enableEdit,
    enableDelete,
    handleEdit,
    handleDelete,
	} = props || {}

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
			spacing={1}
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
				minWidth: `${CARD_VERT_WIDTH}px`,
				minHeight: height + 80,
			}}
		>
			<Box sx={sx.imageContainer}>
				<TouchableOpacity handleClick={handleItemClick}>
					<Image
						src={image}
						height={height}
						objectFit={objectFit}
						alt={title}
						label={label}
						enableGradient={enableGradient}
						disableBorderRadius={enableBorder}
						enableOverlay={enableOverlay}
					/>
				</TouchableOpacity>
			</Box>
			<Stack
				spacing={1}
				sx={{
					...sx.content,
					...(enableBorder && sx.contentBorder),
				}}
			>
				<Stack sx={ sx.contentArea } direction="row" spacing={0}>
					<Typography sx={ sx.title } color="textPrimary" variant="subtitle2">
						{truncate(title)}
					</Typography>
          {(enableEdit || enableDelete) && (
            <MenuButton
              icon='EllipsisVertical'
              handleEdit={ enableEdit ? handleEdit : undefined }
              handleDelete={ enableDelete ? handleDelete : undefined }
            />
          )}
				</Stack>
				{buttonText && (
					<Box>
						<Button
							color="secondary"
							variant="contained"
							onClick={handleItemClick}
						>
							{buttonText}
						</Button>
					</Box>
				)}
			</Stack>
		</Stack>
	)
}

export default CardVert

const sx = {
	root: {
		width: '100%',
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
		borderRadius: 1,
		overflow: 'hidden',
	},
	imageContainer: {
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
	content: {
    width: '100%',
		minHeight: '60px',
	},
  contentArea: {
    width: '100%',
  },
	contentBorder: {
		p: 1,
		pt: 0,
	},
	title: {
    width: '100%',
		minHeight: '50px',
	},
	description: {
		maxWidth: '320px',
	},
}
