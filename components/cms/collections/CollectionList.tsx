'use client'

import React from 'react'
import { DataList } from '../../../components'
import { buildSearchQuery } from '../../../helpers'
import {
	ButtonType,
	DisplayFieldType,
	FormFieldType,
	SearchFilterOptionType,
	SortOptionType,
} from '../../../types'
import {
	CollectionListItem,
	CollectionListItems,
	CollectionHeader,
	CollectionShow,
	CollectionEmpty,
} from '../..'

export type CollectionListProps = {
	grid?: boolean
	style: string
	href?: string
	displayFields: DisplayFieldType[]
	enableLikes?: boolean
	enableFavorites?: boolean
	enableComments?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean

	enableShow?: boolean
	fields?: FormFieldType[]
	buttons?: ButtonType[]
	headers?: {
		label: string
		value: string
	}[]
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	perPage?: number
	loadMore?: boolean
	list: React.FC<any>
	component?: React.FC<any>
	header?: React.FC<any>
	show?: React.FC<any>
	edit?: React.FC<any>
	create?: React.FC<any>
	destroy?: React.FC<any>
	empty?: React.FC<any>
	slots?: {
		header?: any
		toolbar?: any
		list?: any
		show?: any
		edit?: any
		create?: any
		destroy?: any
		empty?: any
		item?: any
	}
	circular?: boolean
	disableImage?: boolean
	url: string
	foreignUrl?: string
	query?: any
	resource: any
	filterSimilar?: boolean
	filterGeo?: boolean
}

const CollectionList: React.FC<CollectionListProps> = (props) => {
	const {
		url,
		foreignUrl,
		query,
		resource,
		perPage = 12,
		filterSimilar,
		filterGeo,

		enableLikes,
		enableFavorites,
		enableComments,
		enableGradient,
		enableOverlay,

		style = 'card',
		href,
		buttons = [],
		displayFields = [],
		circular,
		disableImage,
		enableShow,

		fields = [],
		enableSearch,
		enableFilters,
		enableSorting,
		filterOptions = [],
		sortOptions = [],
		headers = [], // Used by KanBan
		header: Header = CollectionHeader,
		list: List = CollectionListItems,
		component: Component = CollectionListItem,
		show: Show = CollectionShow,
		empty: Empty = CollectionEmpty,
		slots: defaultSlots = {
			header: {},
			toolbar: {},
			list: {},
			item: {},
			show: {},
			edit: {},
			create: {},
			destroy: {},
			empty: {},
		},
	} = props || {}

	const searchQuery = buildSearchQuery({
		query,
		resource,
		perPage,
		filterSimilar,
		filterGeo,
	})

	const slots = {
		list: {
			...defaultSlots.list,
			headers,
			style,
			href,
			enableLikes,
			enableFavorites,
			enableComments,
			enableGradient,
			enableOverlay,
		},
		show: {
			...defaultSlots.show,
			displayFields,
			buttons,
			enableLikes,
			enableFavorites,
			enableComments,
			enableGradient,
			enableOverlay,
		},
		edit: {
			...defaultSlots.edit,
			fields,
		},
		create: {
			...defaultSlots.create,
			fields,
		},
		destroy: defaultSlots.destroy,
		header: defaultSlots.header,
		toolbar: {
			...defaultSlots.toolbar,
		},
		empty: defaultSlots.empty,
		item: {
			...defaultSlots.item,
			href,
			circular,
			disableImage,
			style,
			buttons,
			displayFields,
			enableLikes,
			enableFavorites,
			enableComments,
			enableGradient,
			enableOverlay,
		},
	}

	const grid =
		{
			avatar: false,
			list: false,
			text: false,
			card: true,
			cover: true,
		}[style] || false

	return (
		<DataList
			grid={grid}
			url={url}
			foreignUrl={foreignUrl}
			name="document"
			query={searchQuery}
			fields={fields}
			enableShow={enableShow}
			enableSearch={enableSearch}
			enableFilters={enableFilters}
			enableSorting={enableSorting}
			filterOptions={filterOptions}
			sortOptions={sortOptions}
			header={Header}
			list={List}
			component={Component}
			show={Show}
			empty={Empty}
			slots={slots}
		/>
	)
}

export default CollectionList
