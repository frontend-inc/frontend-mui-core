'use client'

import React, { useEffect, useState } from 'react'
import { Typography } from '../../../tailwind'
import { useProductCollections } from '../../../hooks'
import {
	AdminProductCollectionEdit,
	AdminProductCollectionDetails,
	AdminCollectionProductList,
} from '../../../containers'

type AdminProductCollectionProps = {
	productCollectionId: string
}

const AdminProductCollection: React.FC<AdminProductCollectionProps> = (
	props
) => {
	const [open, setOpen] = useState(false)

	const { productCollectionId } = props || {}

	const {
		loading,
		errors,
		productCollection,
		setProductCollection,
		handleChange,
		updateProductCollection,
		findProductCollection,
		reloadProductCollection,
		addAttachment,
		removeAttachment,
	} = useProductCollections()

	const handleEdit = () => {
		setOpen(true)
	}

	const handleAddAttachment = async (name, attachmentId) => {
		await addAttachment(productCollection?.id, name, attachmentId)
		reloadProductCollection()
	}

	const handleRemoveAttachment = async (name) => {
		await removeAttachment(productCollection?.id, name)
		reloadProductCollection()
	}

	const handleSubmit = async () => {
		await updateProductCollection(productCollection)
		reloadProductCollection()
		setOpen(false)
	}

	useEffect(() => {
		if (productCollectionId) {
			findProductCollection(productCollectionId)
		}
	}, [productCollectionId])

	return (
		<div className="flex flex-col space-y-3">
			<AdminProductCollectionDetails
				productCollection={productCollection}
				handleEdit={handleEdit}
			/>
			<Typography variant="subtitle1" >
				Products
			</Typography>
			<AdminCollectionProductList productCollectionId={productCollection?.id} />
			<AdminProductCollectionEdit
				open={open}
				handleClose={() => setOpen(false)}
				loading={loading}
				errors={errors}
				resource={productCollection}
				setResource={setProductCollection}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				handleReload={reloadProductCollection}
				handleAddAttachment={handleAddAttachment}
				handleRemoveAttachment={handleRemoveAttachment}
			/>
		</div>
	)
}

export default AdminProductCollection
