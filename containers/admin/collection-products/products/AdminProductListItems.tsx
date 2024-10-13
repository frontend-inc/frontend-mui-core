'use client'

import React from 'react'
import { ResourceList } from '../../../../components'
import { useAdmin } from '../../../../hooks'
import AdminProductListItem from './AdminProductListItem'
import AdminProductListToolbar from './AdminProductListToolbar'
import { useResource } from 'frontend-js'
import { ResourceListProps } from '../../../../components/cms/resources/ResourceList'

type AdminProductListItemsProps = ResourceListProps & {
	url: string
	productCollectionId: string
	handleSuccess: () => void
}

const AdminProductListItems: React.FC<AdminProductListItemsProps> = (props) => {
	const { url, handleSuccess, productCollectionId } = props || {}
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			direction="column"
			selectable
			enableSearch
			url={`${apiUrl}/products`}
			name={'product'}
			toolbar={AdminProductListToolbar}
			component={AdminProductListItem}
			emptyIcon="Search"
			emptyTitle="No products"
			emptyDescription="No products yet."
			slots={{
				toolbar: {
					url,
					productCollectionId,
					handleSuccess,
				},
			}}
		/>
	)
}

export default AdminProductListItems
