import React, { useState } from 'react'
import { Box, Link, Stack, Typography } from '@mui/material'
import { Label, Actions } from '../../../components'
import { CollectionShowItemProps } from './CollectionShow'
import { flattenDocument } from 'frontend-js'
import { buildActions } from '../../../helpers'

const Document: React.FC<CollectionShowItemProps> = (props) => {
	const MAX_CHARS = 500

	const { actions, resource, enableBorder, enableEdit, handleEdit } =
		props || {}

	const { label, title, description } = resource || {}
	const [open, setOpen] = useState(false)
	return (
		<Box
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
			}}
		>
			<Stack
				spacing={2}
				sx={{ ...sx.content, ...(enableBorder && sx.contentBorder) }}
			>
				{label && (
					<Box>
						<Label label={label} />
					</Box>
				)}
				<Typography color="text.primary" variant="h4">
					{title}
				</Typography>
				<Box>
					{open ? (
						<Typography variant="body1" color="text.primary" sx={sx.text}>
							{description}
						</Typography>
					) : (
						<Typography variant="body1" color="text.primary" sx={sx.text}>
							{description?.slice(0, MAX_CHARS)}
						</Typography>
					)}
					{description?.length > MAX_CHARS && (
						<Link onClick={() => setOpen(!open)} sx={sx.link}>
							{open ? 'See less' : '... See all'}
						</Link>
					)}
				</Box>
			</Stack>
			{(actions || enableEdit) && (
				<Stack
					direction={{ sm: 'row', xs: 'column' }}
					spacing={1}
					p={enableBorder ? 1 : 0}
				>
					<Box>
						<Actions
							actions={buildActions({
								enableEdit,
								handleEdit,
								actions,
							})}
							resource={flattenDocument(resource)}
							justifyContent="flex-end"
						/>
					</Box>
				</Stack>
			)}
		</Box>
	)
}

export default Document

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
	},
	rootBorder: {
		overflow: 'hidden',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
		border: '1px solid',
		borderColor: 'divider',
	},
	container: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: {
			sm: 'flex-start',
			xs: 'center',
		},
	},
	imageContainer: {
		width: '100%',
		height: '100%',
		maxHeight: {
			sm: 240,
			xs: 240,
		},
		maxWidth: {
			sm: 240,
			xs: '100%',
		},
	},
	header: {
		width: '100%',
		textAlign: 'center',
	},
	content: {
		width: '100%',
	},
	contentBorder: {
		p: 2,
	},
	text: {
		width: '100%',
		whiteSpace: 'pre-line',
	},
	caption: {
		color: 'text.secondary',
	},
	link: {
		cursor: 'pointer',
		color: 'text.secondary',
	},
	socialUrls: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
}