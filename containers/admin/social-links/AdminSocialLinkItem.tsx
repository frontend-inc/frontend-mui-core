'use client'

import React from 'react'
import { SocialLink, ResourceListItem } from '../../../components'

type AdminSocialLinkItemProps = {
	resource: any
	sortable?: boolean
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminSocialLinkItem: React.FC<AdminSocialLinkItemProps> = (props) => {
	const { resource: socialLink, handleEdit, handleDelete } = props || {}

	return (
		<ResourceListItem
			sortable
			avatar={<SocialLink size={32} provider={socialLink?.provider} />}
			color="primary.main"
			primary={socialLink?.label}
			secondary={socialLink?.url}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminSocialLinkItem
