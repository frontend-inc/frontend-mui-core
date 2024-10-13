'use client'

import React from 'react'
import { LoadMore } from '../..'
import { useResourceContext } from 'frontend-js'
import { useApp } from '../../../hooks'
import { useRouter, useParams } from 'next/navigation'
import { CollectionListItem, DataLayout } from '../..'
import { ButtonType, DisplayFieldType } from '../../../types'

export type ReferenceCollectionListItemsProps = {
	href?: string
	grid?: boolean
	style?: 'list' | 'avatar' | 'cover' | 'table' | 'text'
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

const ReferenceCollectionListItems: React.FC<
	ReferenceCollectionListItemsProps
> = (props) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const {
		loading,
		setResource,
		resources: references,
		page,
		numPages,
		loadMore,
		setOpenShow,
	} = useResourceContext()

	const {
		grid = false,
		buttons = [],
		style = 'card',
		href,
		handleClick,
		displayFields = [],
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
		enableLikes = false,
		enableComments = false,
		slots = {
			list: {},
			item: {},
		},
	} = props

	const handleShowClick = (target) => {
		if (handleClick) {
			handleClick(target)
		} else if (href) {
			if (clientUrl && href && target?.handle) {
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				})
				router.push(`${clientUrl}${href}/${target?.handle}`)
			}
		} else {
			setResource(target)
			setOpenShow(true)
		}
	}

	const handlePaginate = async () => {
		await loadMore()
	}

	return (
		<div className="flex flex-col space-y-2 w-full">
			<DataLayout {...slots.list} grid={grid}>
				{references?.map((reference, index) => {
					const target = reference?.target
					return (
						<CollectionListItem
							key={index}
							style={style}
							resource={target}
							displayFields={displayFields}
							handleClick={() => handleShowClick(target)}
							buttons={buttons}
							enableFavorites={enableFavorites}
							enableComments={enableComments}
							enableLikes={enableLikes}
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

export default ReferenceCollectionListItems
