'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminProductCollectionItem from './AdminProductCollectionItem'
import AdminProductCollectionCreate from './AdminProductCollectionCreate'
import AdminProductCollectionEdit from './AdminProductCollectionEdit'
import AdminProductCollectionShow from './AdminProductCollectionShow'
import AdminProductCollectionToolbar from './AdminProductCollectionToolbar'
import AdminProductCollectionHeader from './AdminProductCollectionHeader'
import { useRouter, useParams } from 'next/navigation'

const AdminProductCollectionsList: React.FC = () => {
	const router = useRouter()
	const { clientUrl } = useAdmin()
	const { apiUrl } = useAdmin()

	const handleClick = (productCollection) => {
		router.push(
			`${clientUrl}/shop/product-collections/${productCollection.handle}/products`
		)
	}

	return (
		<ResourceList
			selectable
			sortable
			url={`${apiUrl}/product_collections`}
			name={'product_collection'}
			enableSearch
			enableEdit
			enableDelete
			enableCreate
			handleClick={handleClick}
			sortOptions={[
				{ name: 'title', label: 'Title' },
				{ name: 'created_at', label: 'Date' },
			]}
			create={AdminProductCollectionCreate}
			edit={AdminProductCollectionEdit}
			show={AdminProductCollectionShow}
			header={AdminProductCollectionHeader}
			toolbar={AdminProductCollectionToolbar}
			component={AdminProductCollectionItem}
			emptyIcon="ShoppingCard"
			emptyTitle="No product collections"
			emptyDescription="No products collections added yet."
		/>
	)
}

export default AdminProductCollectionsList
