import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { Actions, ActionButton, Image } from '../../../components'
import moment from 'moment'
import { ShowItemProps } from './Show'
import { flattenDocument } from 'frontend-js'

const Article: React.FC<ShowItemProps> = (props) => {
	const { actions, resource, enableBorder, enableEdit, handleEdit } = props || {}
	const { label, title, image, description, data } = resource || {}
	const { published_at } = data || {}
	return (
		<Stack 
      sx={{
        ...sx.root,
        ...(enableBorder && sx.rootBorder)
      }} 
      spacing={7}
    >
			<Stack spacing={3} sx={sx.header}>
				<Typography color="text.primary" variant="h3">
					{title}
				</Typography>
				<Typography color="text.secondary" variant="caption">
					{moment(published_at).format('MMMM D, YYYY')}
				</Typography>
        {(actions || enableEdit) && (
          <Stack direction={{ xs: 'column', sm: 'row' }} sx={ sx.actions } spacing={1}>
            { enableEdit && (
              <ActionButton 
                resource={flattenDocument(resource)} 
                action={{ 
                  label: 'Edit', 
                  color: 'secondary', 
                  name: 'click', 
                  onClick: handleEdit 
                }} 
              /> 
            )}
            <Actions 
              actions={actions} 
              resource={flattenDocument(resource)} 
            />
          </Stack> 
        )}
			</Stack>
			<Image 
        src={image?.url} 
        alt={title} height={400} 
        label={label}
        disableBorderRadius={enableBorder}
      />
			<Box sx={sx.content}>
				<Typography variant="body1" color="text.primary" sx={sx.text}>
					{description}
				</Typography>
			</Box>
		</Stack>
	)
}

export default Article

const sx = {
	root: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
  rootBorder: {
    py: 2,
    border: '1px solid',
    borderColor: 'divider',
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
      xs: '100%'
    }
  }
}
