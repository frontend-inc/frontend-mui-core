'use client'

import React from 'react'
import { useResource, useApi } from 'frontend-js'
import { useApp } from '..'

const useForms = () => {
	const { apiUrl } = useApp()

	const url = `${apiUrl}/cms/forms`
	const apiParams = {
		url,
		name: 'form',
	}

	const {
		loading,
		delayedLoading,
		loaded,
		errors,
		empty,
		editing,
		isValid,
		resource: form,
		resources: forms,
		findOne: findForm,
		findMany: findForms,
		update: updateForm,
		updateMany: updateForms,
		create: createForm,
		save: saveForm,
		destroy: deleteForm,
		deleteMany: deleteForms,
		loadMore,
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
		reloadOne: reloadForm,
		reloadMany: reloadForms,
		setResource: setForm,
		setResources: setForms,
		startIndex,
		endIndex,
		paginate,
		loadingWrapper,
	} = useResource(apiParams)

	return {
		paginate,
		loading,
		loaded,
		delayedLoading,
		errors,
		empty,
		editing,
		isValid,
		form,
		forms,
		findForm,
		findForms,
		saveForm,
		updateForm,
		updateForms,
		createForm,
		deleteForm,
		deleteForms,
		loadMore,
		addAttachment,
		removeAttachment,
		handleChange,
		handleChangePage,
		query,
		setQuery,
		reloadForm,
		reloadForms,
		page,
		numPages,
		perPage,
		totalCount,
		updatePositions,
		sortBy,
		sortDirection,
		handleSort,
		setForm,
		setForms,
		startIndex,
		endIndex,
	}
}

export default useForms
