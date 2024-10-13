'use client'

import React from 'react'
import { MenuListItem } from '../../../components'
import { FIELD_VARIANTS } from '../../../constants'

type AdminFieldVariantItemProps = {
	field: any
	handleClick: any
}

const AdminFieldVariantItem: React.FC<AdminFieldVariantItemProps> = (props) => {
	const { field, handleClick } = props

	const fieldVariant = FIELD_VARIANTS.find((f) => f.variant === field?.variant)

	return (
		<MenuListItem
			icon={fieldVariant?.icon}
			color={field.color}
			title={field.label}
			description={field.description}
			handleClick={() => handleClick(field)}
		/>
	)
}

export default AdminFieldVariantItem
