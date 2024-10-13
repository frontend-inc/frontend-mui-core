'use client'

import React from 'react'
import AdminProductListItems from './products/AdminProductListItems'
import { Drawer } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

type AdminCollectionProductsAddProps = ResourceFormProps & {
	url: string
	productCollectionId: string
}

const AdminCollectionProductsAdd: React.FC<AdminCollectionProductsAddProps> = (
	props
) => {
	const { open, handleClose, handleReload, url, productCollectionId } =
		props || {}

	return (
		<Drawer
			mode="editor"
			open={open}
			handleClose={handleClose}
			title="Add Products"
		>
			<AdminProductListItems
				name={'collection_product'}
				url={url}
				productCollectionId={productCollectionId}
				handleSuccess={handleReload}
			/>
		</Drawer>
	)
}

export default AdminCollectionProductsAdd
