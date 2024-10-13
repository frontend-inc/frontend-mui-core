'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminProductItem from './AdminCollectionProductItem'
import AdminProductToolbar from './AdminCollectionProductToolbar'
import AdminCollectionProductsAdd from './AdminCollectionProductsAdd'

type AdminCollectionProductsListProps = {
	productCollectionId: string
}

const AdminCollectionProductsList: React.FC<
	AdminCollectionProductsListProps
> = (props) => {
	const { productCollectionId } = props
	const { apiUrl } = useAdmin()
	const url = `${apiUrl}/product_collections/${productCollectionId}/collection_products`
	return (
		<ResourceList
			selectable
			sortable
			url={url}
			name={'collection_products'}
			enableSearch
			enableDelete
			enableCreate
			toolbar={AdminProductToolbar}
			component={AdminProductItem}
			create={AdminCollectionProductsAdd}
			emptyIcon="Shirt"
			emptyTitle="No products"
			emptyDescription="No products added yet."
			slots={{
				toolbar: {
					url,
					productCollectionId,
				},
				create: {
					url: `${apiUrl}/product_collections`,
					productCollectionId,
				},
			}}
		/>
	)
}

export default AdminCollectionProductsList
