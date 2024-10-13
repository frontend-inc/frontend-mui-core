'use client'

import React from 'react'
import { Label, ResourceListItem } from '../../../components'

type AdminZapItemProps = {
	resource: any
	sortable?: boolean
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminZapItem: React.FC<AdminZapItemProps> = (props) => {
	const {
		resource: zap,
		sortable,
		handleClick,
		handleEdit,
		handleDelete,
	} = props

	return (
		<ResourceListItem
			enableBorder
			sortable={sortable}
			icon={zap.zap_type === 'email' ? 'Mail' : 'Webhook'}
			color="primary.main"
			primary={zap?.zap_type}
			secondary={zap?.url || zap?.email?.name}
			secondaryAction={<Label label={zap?.event_type} />}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminZapItem
