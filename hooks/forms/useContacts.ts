'use client'

import React from 'react'
import { SyntheticEventType, useResource } from 'frontend-js'
import { useApp } from '..'
import { useApi } from 'frontend-js'

type UseContactParams = {
	formId?: number | string
}

const useContacts = (params: UseContactParams) => {
	const { formId } = params || {}
	const { apiUrl } = useApp()

	const { api } = useApi()
	const url = `${apiUrl}/cms/contacts`
	const apiParams = {
		url,
		name: 'contact',
	}

	const {
		loading,
		delayedLoading,
		loaded,
		errors,
		empty,
		editing,
		isValid,
		handleChange,
		resource: contact,
		resources: contacts,
		findOne: findContact,
		findMany: findContacts,
		update: updateContact,
		updateMany: updateContacts,
		create: createContact,
		save: saveContact,
		destroy: deleteContact,
		deleteMany: deleteContacts,
		loadMore,
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
		reloadOne: reloadContact,
		reloadMany: reloadContacts,
		setResource: setContact,
		setResources: setContacts,
		startIndex,
		endIndex,
		paginate,
		loadingWrapper,
	} = useResource(apiParams)

	const submitForm = async (contact) => {
		const url = `${apiUrl}/cms/forms/${formId}/form_responses`
		const payload = {
			contact,
		}
		return await loadingWrapper(() => api.post(url, payload))
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
		contact,
		contacts,
		findContact,
		findContacts,
		saveContact,
		updateContact,
		updateContacts,
		createContact,
		deleteContact,
		deleteContacts,
		submitForm,
		loadMore,
		addAttachment,
		removeAttachment,
		handleChange,
		handleChangePage,
		query,
		setQuery,
		reloadContact,
		reloadContacts,
		page,
		numPages,
		perPage,
		totalCount,
		updatePositions,
		sortBy,
		sortDirection,
		handleSort,
		setContact,
		setContacts,
		startIndex,
		endIndex,
		loadingWrapper,
	}
}

export default useContacts
