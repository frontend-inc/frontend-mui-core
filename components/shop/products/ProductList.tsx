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
	ProductListItem,
	ProductListItems,
	ProductHeader,
	ProductShow,
	ProductEmpty,
} from '../..'
import { useApp } from '../../../hooks'

export type ProductListProps = {
	grid?: boolean
	selectable?: boolean
	url?: string
	href?: string
	displayFields: DisplayFieldType[]
	enableLikes?: boolean
	enableFavorites?: boolean
	enableRatings?: boolean
	enableUsers?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableShow?: boolean
	fields?: FormFieldType[]
	buttons?: ButtonType[]
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
	empty?: React.FC<any>
	slots?: {
		header?: any
		list?: any
		show?: any
		empty?: any
		item?: any
	}
	foreignUrl?: string
	query?: any
	resource: any
	filterSimilar?: boolean
}

const ProductList: React.FC<ProductListProps> = (props) => {
	const { apiUrl } = useApp()

	let { url } = props || {}
	const {
		grid = true,
		selectable = false,
		foreignUrl,
		query,
		resource,
		perPage = 9,
		filterSimilar,

		enableLikes,
		enableFavorites,
		enableRatings,
		enableUsers,
		enableGradient,
		enableOverlay,

		href,
		buttons = [],
		displayFields = [],
		enableShow,
		fields = [],
		enableSearch,
		enableFilters,
		enableSorting,
		header: Header = ProductHeader,
		list: List = ProductListItems,
		component: Component = ProductListItem,
		show: Show = ProductShow,
		empty: Empty = ProductEmpty,
		slots: defaultSlots = {
			header: {},
			list: {},
			item: {},
			show: {},
			empty: {},
		},
	} = props || {}

	const searchQuery = buildSearchQuery({
		query,
		resource,
		perPage,
		filterSimilar,
	})

	const slots = {
		list: {
			...defaultSlots.list,
			href,
			enableLikes,
			enableFavorites,
			enableRatings,
			enableUsers,
			enableGradient,
			enableOverlay,
		},
		show: {
			...defaultSlots.show,
			selectable,
			displayFields,
			buttons,
			enableLikes,
			enableFavorites,
			enableRatings,
			enableUsers,
			enableGradient,
			enableOverlay,
		},
		header: defaultSlots.header,
		empty: defaultSlots.empty,
		item: {
			...defaultSlots.item,
			href,
			buttons,
			displayFields,
			enableLikes,
			enableFavorites,
			enableRatings,
			enableUsers,
			enableGradient,
			enableOverlay,
		},
	}

	if (!url) {
		url = `${apiUrl}/shop/products`
	}

	const filterOptions = [
		{
			field: 'average_rating',
			label: 'Rating',
			variant: 'ratings_scale',
		},
	]

	const sortOptions = [
		{ name: 'created_at', label: 'Newest' },
		{ name: 'price', label: 'Price' },
		{ name: 'title', label: 'Title' },
	]

	return (
		<DataList
			selectable={selectable}
			grid={grid}
			url={url}
			foreignUrl={foreignUrl}
			name="product"
			query={searchQuery}
			fields={fields}
			enableShow={enableShow}
			enableSearch={enableSearch}
			enableFilters={enableFilters}
			enableSorting={enableSorting}
			sortOptions={sortOptions}
			//@ts-ignore
			filterOptions={filterOptions}
			header={Header}
			list={List}
			component={Component}
			show={Show}
			empty={Empty}
			slots={slots}
		/>
	)
}

export default ProductList
