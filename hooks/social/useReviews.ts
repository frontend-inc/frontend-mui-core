'use client'

import React from 'react'
import { useResource } from 'frontend-js'

type UseReviewsProps = {
	url: string
	handle: string
}

const useReviews = (props: UseReviewsProps) => {
	const { url, handle } = props

	const {
		loading,
		delayedLoading,
		loaded,
		errors,
		empty,
		meta,
		resource: review,
		resources: reviews,
		findOne: findReview,
		findMany: findReviews,
		update: updateReview,
		create: createReview,
		destroy: deleteReview,
		setResource: setReview,
		handleChange,
		handleChangePage,
		reloadMany: reloadReviews,
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
	} = useResource({
		url: `${url}/${handle}/reviews`,
		name: 'review',
	})

	return {
		loading,
		delayedLoading,
		errors,
		loaded,
		empty,
		meta,
		review,
		reviews,
		findReview,
		findReviews,
		createReview,
		updateReview,
		deleteReview,
		handleChange,
		handleChangePage,
		reloadReviews,
		setReview,
		query,
		setQuery,
		paginate,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
		loadMore,
		loadingWrapper,
	}
}

export default useReviews
