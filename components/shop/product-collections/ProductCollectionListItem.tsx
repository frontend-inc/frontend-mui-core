'use client'

import React from 'react'
import { ProductCollectionCard } from '../..'
import { useApp } from '../../../hooks'
import { useRouter, useParams } from 'next/navigation'

type ProductCollectionListItemProps = {
	resource: any
	href?: string
	handleClick: () => void
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const ProductCollectionListItem: React.FC<ProductCollectionListItemProps> = (
	props
) => {
	const {
		resource,
		href,
		handleClick,
		enableGradient = false,
		enableOverlay = false,
		...rest
	} = props

	const { clientUrl } = useApp()
	const router = useRouter()

	const handleShowClick = () => {
		if (clientUrl && href && resource?.handle) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${href}/${resource?.handle}`)
		} else if (handleClick) {
			handleClick()
		}
	}

	return (
		<ProductCollectionCard
			label={resource?.label}
			image={resource?.image?.url}
			primary={resource?.title}
			handleClick={handleShowClick}
			slots={{
				image: {
					enableGradient,
					enableOverlay,
				},
			}}
		/>
	)
}

export default ProductCollectionListItem
