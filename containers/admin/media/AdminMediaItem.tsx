'use client'

import React from 'react'
import { Label, ResourceGridItem } from '../../../components'
import { resizeCloudinaryImage } from '../../../helpers'

type AdminMediaItemProps = {
	resource: any
	sortable?: boolean
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminMediaItem: React.FC<AdminMediaItemProps> = (props) => {
	const { resource, sortable, handleClick, handleDelete } = props
	return (
		<ResourceGridItem
			enableBorder
			sortable={sortable}
			//@ts-ignore
			image={resource?.url}      
			secondaryAction={
				<Label variant="secondary" label={resource?.content_type} />
			}
			handleClick={handleClick}
			handleDelete={handleDelete}
			slots={{
				image: {
					height: 160,
					width: 320,
					objectFit: 'contain',
				},
			}}
		/>
	)
}

export default AdminMediaItem
