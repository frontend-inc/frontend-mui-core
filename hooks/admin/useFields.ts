'use client'

import React from 'react'
import { useResource } from 'frontend-js'
import { useApi } from 'frontend-js'
import { useAdmin } from '..'

type UseFieldsParams = {
	collectionId: string
}

const useFields = (props: UseFieldsParams) => {
	const { collectionId } = props || {}
	const { apiUrl } = useAdmin()

	const {
		loading,
		errors,
		empty,
		editing,
		isValid,
		resource: field,
		resources: fields,
		findOne: findField,
		findMany: findFields,
		update: updateField,
		updateMany: updateFields,
		create: createField,
		save: saveField,
		destroy: deleteField,
		deleteMany: deleteFields,
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
		reloadOne: reloadField,
		reloadMany: reloadFields,
		setResource: setField,
		setResources: setFields,
		startIndex,
		endIndex,
		paginate,
	} = useResource({
		url: `${apiUrl}/collections/${collectionId}/fields`,
		name: 'field',
	})

	return {
		paginate,
		loading,
		errors,
		empty,
		editing,
		isValid,
		field,
		fields,
		findField,
		findFields,
		saveField,
		updateField,
		updateFields,
		createField,
		deleteField,
		deleteFields,
		loadMore,
		publish,
		unpublish,
		addAttachment,
		removeAttachment,
		handleChange,
		handleChangePage,
		query,
		setQuery,
		reloadField,
		reloadFields,
		page,
		numPages,
		perPage,
		totalCount,
		updatePositions,
		sortBy,
		sortDirection,
		handleSort,
		setField,
		setFields,
		startIndex,
		endIndex,
	}
}

export default useFields
