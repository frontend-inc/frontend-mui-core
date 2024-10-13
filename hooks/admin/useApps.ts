'use client'

import React from 'react'
import { useApi, useResource } from 'frontend-js'
import { useAdmin } from '../../hooks'

function useApps(): Record<string, any> {
	const { api } = useApi()
	const { apiUrl } = useAdmin()

	const {
		errors,
		loading,
		delayedLoading,
		loaded,
		empty,
		editing,
		isValid,
		resource: app,
		resources: apps,
		findOne: findApp,
		findMany: findApps,
		update: updateApp,
		create: createApp,
		save: saveApp,
		destroy: deleteApp,
		handleChange,
		handleChangeApp,
		reloadOne: reloadApp,
		reloadMany: reloadApps,
		query,
		app: currentApp,
		numApps,
		perApp,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
		addAttachment,
		removeAttachment,
		setResource: setApp,
		setResources: setApps,
		loadingWrapper,
	} = useResource({
		url: '/api/v1/admin/apps',
		name: 'app',
	})

	const publishApp = async () => {
		return await loadingWrapper(() => api.post(`${apiUrl}/publish`))
	}

	const buildApp = async () => {
		return await loadingWrapper(() => api.post(`${apiUrl}/build`))
	}

	const generateAI = async (appId) => {
		return await loadingWrapper(() =>
			api.post(`/api/v1/admin/apps/${appId}/generate_ai`)
		)
	}

	return {
		errors,
		loading,
		delayedLoading,
		loaded,
		empty,
		editing,
		isValid,
		app,
		apps,
		findApp,
		findApps,
		saveApp,
		updateApp,
		createApp,
		deleteApp,
		handleChange,
		handleChangeApp,
		addAttachment,
		removeAttachment,
		query,
		currentApp,
		numApps,
		perApp,
		totalCount,
		reloadApp,
		reloadApps,
		sortBy,
		sortDirection,
		handleSort,
		setApp,
		setApps,

		generateAI,
		publishApp,
		buildApp,
	}
}

export default useApps
