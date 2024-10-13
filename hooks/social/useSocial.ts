'use client'

import React from 'react'
import { useApi } from 'frontend-js'
import { useLoaders } from '..'

const useSocial = () => {
	const { api } = useApi()

	const params = {
		url: `/api/v1/social`,
	}

	const { loading, loadingWrapper } = useLoaders()

	const like = async (itemId) => {
		return await loadingWrapper(() => api.like(itemId, params))
	}

	const unlike = async (itemId) => {
		return await loadingWrapper(() => api.unlike(itemId, params))
	}

	const favorite = async (itemId) => {
		return await loadingWrapper(() => api.favorite(itemId, params))
	}

	const unfavorite = async (itemId) => {
		return await loadingWrapper(() => api.unfavorite(itemId, params))
	}

	const likeProduct = async (productId) => {
		return await loadingWrapper(() => api.likeProduct(productId, params))
	}

	const unlikeProduct = async (productId) => {
		return await loadingWrapper(() => api.unlikeProduct(productId, params))
	}

	const favoriteProduct = async (productId) => {
		return await loadingWrapper(() => api.favoriteProduct(productId, params))
	}

	const unfavoriteProduct = async (productId) => {
		return await loadingWrapper(() => api.unfavoriteProduct(productId, params))
	}

	const shopifyFavorite = async (handle) => {
		return await loadingWrapper(() => api.shopifyFavorite(handle, params))
	}

	const shopifyUnfavorite = async (handle) => {
		return await loadingWrapper(() => api.shopifyUnfavorite(handle, params))
	}

	return {
		loading,
		like,
		unlike,
		favorite,
		unfavorite,
		likeProduct,
		unlikeProduct,
		favoriteProduct,
		unfavoriteProduct,
		shopifyFavorite,
		shopifyUnfavorite,
		loadingWrapper,
	}
}

export default useSocial
