'use client'

import React from 'react'
import { useResource, useApi } from 'frontend-js'
import { useAdmin } from '../../hooks'

const useProductCollections = () => {
	const { apiUrl } = useAdmin()
	const { api } = useApi()

	const url = `${apiUrl}/product_collections`
	const apiParams = {
		url,
		name: 'product_collection',
	}

	const {
		loading,
		delayedLoading,
		loaded,
		errors,
		empty,
		editing,
		isValid,
		resource: productCollection,
		resources: productCollections,
		findOne: findProductCollection,
		findMany: findProductCollections,
		update: updateProductCollection,
		updateMany: updateProductCollections,
		create: createProductCollection,
		save: saveProductCollection,
		destroy: deleteProductCollection,
		deleteMany: deleteProductCollections,
		loadMore,
		publish,
		unpublish,
		handleChange,
		handleChangePage,
		updatePositions,
		addAttachment,
		removeAttachment,
		query,
		setQuery,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
		reloadOne: reloadProductCollection,
		reloadMany: reloadProductCollections,
		setResource: setProductCollection,
		setResources: setProductCollections,
		startIndex,
		endIndex,
		paginate,
		loadingWrapper,
	} = useResource(apiParams)

	const addProducts = async (
		productCollectionId: number,
		productIds: number[]
	) => {
		return await loadingWrapper(() =>
			api.addProducts(productCollectionId, productIds, {
				url,
				name: 'products',
			})
		)
	}

	const removeProducts = async (
		productCollectionId: number,
		productIds: number[]
	) => {
		return await loadingWrapper(() =>
			api.removeProducts(productCollectionId, productIds, {
				url,
				name: 'products',
			})
		)
	}

	const aiGenerate = async (prompt) => {
		return loadingWrapper(() =>
			api.post(`${apiUrl}/product_collections/ai_generate`, {
				ai: {
					prompt: prompt,
				},
			})
		)
	}

	return {
		paginate,
		loading,
		loaded,
		delayedLoading,
		errors,
		empty,
		editing,
		isValid,
		productCollection,
		productCollections,
		findProductCollection,
		findProductCollections,
		saveProductCollection,
		updateProductCollection,
		updateProductCollections,
		createProductCollection,
		deleteProductCollection,
		deleteProductCollections,
		loadMore,
		publish,
		unpublish,

		addProducts,
		removeProducts,

		addAttachment,
		removeAttachment,
		handleChange,
		handleChangePage,
		query,
		setQuery,
		reloadProductCollection,
		reloadProductCollections,
		page,
		numPages,
		perPage,
		totalCount,
		updatePositions,
		sortBy,
		sortDirection,
		handleSort,
		setProductCollection,
		setProductCollections,
		startIndex,
		endIndex,

		aiGenerate,
	}
}

export default useProductCollections
