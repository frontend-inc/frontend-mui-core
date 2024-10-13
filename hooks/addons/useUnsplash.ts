'use client'

import React, { useState, useContext } from 'react'
import { UnsplashContext } from '../../context'
import { useLoadingWrapper } from '../../hooks'
import { UnsplashImageType } from '../../types'

const useUnsplash = () => {
	const { unsplashApiKey: apiKey } = useContext(UnsplashContext)
	const { loading, loadingWrapper } = useLoadingWrapper()

	const [page, setPage] = useState(1)
	const [images, setImages] = useState<UnsplashImageType[]>([])

	const handleSearch = async (keywords, page) => {
		let resp = await loadingWrapper(() =>
			fetch(
				`https://api.unsplash.com/search/photos?query=${keywords}&page=${page}&client_id=${apiKey}`
			)
		)
		return resp?.json()
	}

	const fetchDownloadLocation = async (image) => {
		let downloadLocation = image?.links?.download_location
		let resp = await fetch(`${downloadLocation}?client_id=${apiKey}`)
		let data = await resp.json()
		return data?.url
	}

	const search = async (keywords, page = 1) => {
		setPage(page)
		let resp = await handleSearch(keywords, page)
		if (resp?.results) {
			setImages(resp.results)
		}
		return resp?.results
	}

	const loadMore = async (keywords) => {
		const newPage = page + 1
		setPage(newPage)
		let resp = await handleSearch(keywords, newPage)
		let newImages = <UnsplashImageType[]>[]
		if (resp?.results) {
			newImages = [...images, ...resp.results]
			setImages(newImages)
		}
		return resp?.results
	}

	return {
		loading,
		images,
		search,
		loadMore,
		fetchDownloadLocation,
	}
}

export default useUnsplash
