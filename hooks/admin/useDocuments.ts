'use client'

import React from 'react'
import { useApi, useResource } from 'frontend-js'
import { useAdmin } from '../../hooks'

type UseDocumentProps = {
	collection: string | number
}

const useDocuments = (props: UseDocumentProps) => {
	const { apiUrl } = useAdmin()
	const { api } = useApi()
	const { collection } = props

	const apiParams = {
		url: `${apiUrl}/cms/${collection}`,
		name: 'document',
	}

	const {
		loading,
		delayedLoading,
		loaded,
		errors,
		empty,
		editing,
		isValid,
		resource: document,
		resources: documents,
		findOne: findDocument,
		findMany: findDocuments,
		update: updateDocument,
		updateMany: updateDocuments,
		create: createDocument,
		save: saveDocument,
		destroy: deleteDocument,
		deleteMany: deleteDocuments,
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
		reloadOne: reloadDocument,
		reloadMany: reloadDocuments,
		setResource: setDocument,
		setResources: setDocuments,
		startIndex,
		endIndex,
		paginate,
		loadingWrapper,
	} = useResource(apiParams)

	const addReferences = async (sourceId: number, targetIds: number[]) => {
		return await loadingWrapper(() =>
			api.addReferences(sourceId, targetIds, apiParams)
		)
	}

	const removeReferences = async (sourceId: number, targetIds: number[]) => {
		return await loadingWrapper(() =>
			api.removeReferences(sourceId, targetIds, apiParams)
		)
	}

	const updateReferencePositions = async (id: number, sorted: any[]) => {
		return await api.updateReferencePositions(id, sorted, apiParams)
	}

	const addProductReferences = async (
		documentId: number,
		productIds: number[]
	) => {
		return await loadingWrapper(() =>
			api.addProductReferences(documentId, productIds, apiParams)
		)
	}

	const removeProductReferences = async (
		documentId: number,
		productIds: number[]
	) => {
		return await loadingWrapper(() =>
			api.removeProductReferences(documentId, productIds, apiParams)
		)
	}

	const updateProductReferencePositions = async (id: number, sorted: any[]) => {
		return await api.updateProductReferencePositions(id, sorted, apiParams)
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
		document,
		documents,
		findDocument,
		findDocuments,
		saveDocument,
		updateDocument,
		updateDocuments,
		createDocument,
		deleteDocument,
		deleteDocuments,
		loadMore,
		publish,
		unpublish,

		addReferences,
		removeReferences,
		updateReferencePositions,
		addProductReferences,
		removeProductReferences,
		updateProductReferencePositions,

		addAttachment,
		removeAttachment,
		handleChange,
		handleChangePage,
		query,
		setQuery,
		reloadDocument,
		reloadDocuments,
		page,
		numPages,
		perPage,
		totalCount,
		updatePositions,
		sortBy,
		sortDirection,
		handleSort,
		setDocument,
		setDocuments,
		startIndex,
		endIndex,
	}
}

export default useDocuments
