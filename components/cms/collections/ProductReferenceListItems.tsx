'use client'

import React from 'react'
import { LoadMore } from '../..'
import { useResourceContext } from 'frontend-js'
import { useApp } from '../../../hooks'
import { useRouter, useParams } from 'next/navigation'
import { ProductListItem, DataLayout } from '../..'
import { ButtonType, DisplayFieldType } from '../../../types'

export type ProductReferenceListItemsProps = {
	href?: string
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	handleClick?: (resource: any) => void
	enableGradient?: boolean
	enableOverlay?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableRatings?: boolean
	enableSharing?: boolean
	slots?: {
		list?: any
		item?: any
	}
}

const ProductReferenceListItems: React.FC<ProductReferenceListItemsProps> = (
	props
) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const {
		setResource,
		loading,
		resources: productReferences,
		page,
		numPages,
		loadMore,
		setOpenShow,
	} = useResourceContext()

	const {
		buttons = [],
		href,
		handleClick,
		displayFields = [],
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
		enableLikes = false,
		enableRatings = false,
		slots = {
			item: {},
		},
	} = props

	const handleShowClick = (resource) => {
		if (handleClick) {
			handleClick(resource)
		} else if (href) {
			if (clientUrl && href && resource?.handle) {
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				})
				router.push(`${clientUrl}${href}/${resource?.handle}`)
			}
		} else {
			setResource(resource)
			setOpenShow(true)
		}
	}

	const handlePaginate = async () => {
		await loadMore()
	}

	return (
		<div className="flex flex-col space-y-2">
			<DataLayout {...slots.list} grid loading={loading}>
				{productReferences?.map((reference, index) => {
					const resource = reference?.product
					return (
						<ProductListItem
							key={index}
							resource={resource}
							displayFields={displayFields}
							handleClick={() => handleShowClick(resource)}
							buttons={buttons}
							enableFavorites={enableFavorites}
							enableLikes={enableLikes}
							enableRatings={enableRatings}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
							{...slots.item}
						/>
					)
				})}
			</DataLayout>
			<LoadMore
				page={page}
				numPages={numPages}
				handlePaginate={handlePaginate}
			/>
		</div>
	)
}

export default ProductReferenceListItems
