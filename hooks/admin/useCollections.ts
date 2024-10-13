'use client'

import React from 'react'
import { useResource, useApi } from 'frontend-js'
import { useAdmin } from '../../hooks'

const useCollections = () => {
	const { api } = useApi()
	const { apiUrl } = useAdmin()

	const {
		loading,
		loaded,
		errors,
		empty,
		editing,
		isValid,
		resource: collection,
		resources: collections,
		findOne: findCollection,
		findMany: findCollections,
		update: updateCollection,
		create: createCollection,
		save: saveCollection,
		destroy: deleteCollection,
		handleChange,
		handleChangePage,
		reloadOne: reloadCollection,
		reloadMany: reloadCollections,
		query,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
		setResource: setCollection,
		setResources: setCollections,
		loadingWrapper,
	} = useResource({
		url: `${apiUrl}/collections`,
		name: 'collection',
	})

	const exportCSV = async (collectionId) => {
		return await loadingWrapper(() =>
			api.post(`${apiUrl}/collections/${collectionId}/export_csv`)
		)
	}

	const aiGenerateData = async (collectionId) => {
		return await loadingWrapper(() =>
			api.post(`${apiUrl}/collections/${collectionId}/ai_generate`)
		)
	}

	return {
		loading,
		loaded,
		errors,
		empty,
		editing,
		isValid,
		collection,
		collections,
		findCollection,
		findCollections,
		saveCollection,
		updateCollection,
		createCollection,
		deleteCollection,
		handleChange,
		handleChangePage,
		query,
		page,
		numPages,
		perPage,
		totalCount,
		reloadCollection,
		reloadCollections,
		sortBy,
		sortDirection,
		handleSort,
		setCollection,
		setCollections,
		exportCSV,
		aiGenerateData,
	}
}

export default useCollections
