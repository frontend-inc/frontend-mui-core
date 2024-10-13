'use client'

import React, { useState, useContext } from 'react'
import { useLoadingWrapper } from '..'
import { BrandfetchContext } from '../../context'

type TBrandfetchBrand = {
	id: string
	logos: {
		domain: string
		formats: {
			src: string
			format: 'png' | 'jpg' | 'svg' | 'webp'
		}[]
	}[]
}

type TBrandfetchLogo = {
	brandId: string
	claimed: boolean
	domain: string
	icon: string
	_score: number
	qualityScore: number
}

const useBrandfetch = () => {
	const { apiKey } = useContext(BrandfetchContext) as any
	const { loading, loadingWrapper } = useLoadingWrapper()

	const [brand, setBrand] = useState<TBrandfetchBrand>()
	const [brands, setBrands] = useState<TBrandfetchLogo[]>([])

	const fetchBrand = async (domain) => {
		let resp = await loadingWrapper(() =>
			fetch(`https://api.brandfetch.io/v2/brands/${domain}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${apiKey}`,
				},
			})
		)
		const data = await resp?.json()
		setBrand(data)
		return data
	}

	const fetchBrands = async (keywords) => {
		setBrands([])
		let resp = await loadingWrapper(() =>
			fetch(
				`https://api.brandfetch.io/v2/search/${encodeURIComponent(keywords)}`,
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${apiKey}`,
					},
				}
			)
		)
		const data = await resp?.json()
		setBrands(data)
		return data
	}

	const resizeLogo = (icon: string, options) => {
		const { height = 128, width = 128 } = options || {}
		const url = icon
			?.replace(/w\/\d+/, `w/${width}`)
			.replace(/h\/\d+/, `h/${height}/type/logo`)
		return url
	}

	return {
		loading,
		resizeLogo,
		brand,
		setBrand,
		brands,
		setBrands,
		fetchBrand,
		fetchBrands,
	}
}

export default useBrandfetch
