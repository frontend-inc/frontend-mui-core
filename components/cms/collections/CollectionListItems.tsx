'use client'

import React from 'react'
import { LoadMore } from '../..'
import { useResourceContext } from 'frontend-js'
import { useApp } from '../../../hooks'
import { useRouter, useParams } from 'next/navigation'
import { CollectionListItem, DataLayout } from '../..'
import { ButtonType, DisplayFieldType } from '../../../types'

export type CollectionListItemsProps = {
	grid?: boolean
	selectable?: boolean
	href?: string
	style?: 'list' | 'card' | 'avatar' | 'cover' | 'text'
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	handleClick?: (resource: any) => void
	enableGradient?: boolean
	enableOverlay?: boolean
	enableComments?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	slots?: {
		list?: any
		item?: any
	}
}

const CollectionListItems: React.FC<CollectionListItemsProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const {
		setResource,
		loading,
		resources,
		page,
		numPages,
		loadMore,
		setOpenShow,
	} = useResourceContext()

	const {
		selectable,
		grid = false,
		buttons = [],
		style = 'list',
		href,
		handleClick,
		displayFields = [],
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
		enableLikes = false,
		enableComments = false,
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
		<div className="flex flex-col w-full space-y-2">
			<DataLayout {...slots.list} grid={grid} loading={loading}>
				{resources?.map((resource, index) => (
					<CollectionListItem
						key={index}
						style={style}
						selectable={selectable}
						resource={resource}
						displayFields={displayFields}
						handleClick={() => handleShowClick(resource)}
						buttons={buttons}
						enableComments={enableComments}
						enableFavorites={enableFavorites}
						enableLikes={enableLikes}
						enableGradient={enableGradient}
						enableOverlay={enableOverlay}
						{...slots.item}
					/>
				))}
			</DataLayout>
			<LoadMore
				page={page}
				numPages={numPages}
				handlePaginate={handlePaginate}
			/>
		</div>
	)
}

export default CollectionListItems
