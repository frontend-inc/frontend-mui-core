'use client'

import React, { useEffect } from 'react'
import { useCollections } from 'frontend-shopify'
import { useRouter, useParams } from 'next/navigation'
import { useApp } from '../../../hooks'
import { ShopifyCollectionCard } from '../../../components'
import { cn } from '../../../shadcn/lib/utils'

export type ShopifyCollectionsProps = {
	href: string
	enableGradient?: boolean
	enableOverlay?: boolean
}

const ShopifyCollections: React.FC<ShopifyCollectionsProps> = (props) => {
	const { href, enableGradient = false, enableOverlay = false } = props

	const router = useRouter()

	const { loading, collections, findCollections } = useCollections()

	const { clientUrl } = useApp()

	const handleClick = (collection) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		if (href) {
			router.push(`${clientUrl}${href}/${collection?.handle}`)
		}
	}

	useEffect(() => {
		findCollections()
	}, [])

	return (
		<div
			className={cn(
				'w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-4 pb-1',
				loading && 'opacity-50'
			)}
		>
			{collections?.map((collection, index) => (
				<ShopifyCollectionCard
					key={index}
					collection={collection}
					handleClick={() => handleClick(collection)}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
				/>
			))}
		</div>
	)
}

export default ShopifyCollections
