'use client'

import React from 'react'
import { useApi, useResource } from 'frontend-js'
import { SubscriptionType } from '../../types'

const useSubscriptions = () => {
	const { api } = useApi()

	const apiParams = {
		name: 'subscription',
		url: '/api/v1/shop/subscriptions',
	}

	const {
		loading,
		delayedLoading,
		errors,
		resource: subscription,
		resources: subscriptions,
		findOne: findSubscription,
		findMany: findSubscriptions,
		handleChange,
		handleChangePage,
		reloadMany: reloadSubscriptions,
		query,
		setQuery,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
		loadMore,
		loadingWrapper,
		paginate,
	} = useResource(apiParams)

	type SubscriptionOptionsType = {
		success_url: string
		cancel_url: string
	}

	const subscribe = async (
		subscriptionId,
		options: SubscriptionOptionsType
	) => {
		return await loadingWrapper(() =>
			api.subscribe(subscriptionId, options, apiParams)
		)
	}

	const unsubscribe = async () => {
		return await loadingWrapper(() => api.unsubscribe(apiParams))
	}

	return {
		loading,
		delayedLoading,
		errors,
		subscription,
		subscriptions,
		findSubscription,
		findSubscriptions,
		subscribe,
		unsubscribe,

		handleChange,
		handleChangePage,
		reloadSubscriptions,
		query,
		setQuery,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
		loadMore,
		loadingWrapper,
		paginate,
	}
}

export default useSubscriptions
