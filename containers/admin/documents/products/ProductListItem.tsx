'use client'

import React from 'react'
import { ResourceListItem } from '../../../../components'
import { ResourceItemProps } from '../../../../components/cms/resources/ResourceItem'

type ProductListItemProps = ResourceItemProps & {
	enableDelete?: boolean
}

const ProductListItem: React.FC<ProductListItemProps> = (props) => {
	const {
		resource: product,
		enableDelete,
		sortable,
		selectable,
		handleSelect,
		selected,
		handleDelete,
	} = props || {}

	return (
		<ResourceListItem
			sortable={sortable}
			selectable={selectable}
			image={product?.image?.url}
			primary={product?.title}
			selected={selected}
			handleSelect={handleSelect}
			handleDelete={enableDelete ? handleDelete : undefined}
		/>
	)
}

export default ProductListItem
