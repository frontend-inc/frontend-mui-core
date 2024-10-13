'use client'

import React from 'react'
import {
	DataFetcher,
	DataItem,
	DataListItems,
	DataHeader,
	DataForm,
	DataDelete,
	DataShow,
	DataEmpty,
	DataToolbar,
} from '../..'
import { ResourceProvider } from 'frontend-js'
import {
	ToolbarButtonType,
	FormFieldType,
	QueryParamsType,
	SearchFilterOptionType,
	SortOptionType,
	ButtonType,
} from '../../../types'

export type DataListProps = {
	grid?: boolean
	selectable?: boolean
	sortable?: boolean
	url: string
	foreignUrl?: string
	name: string
	query?: QueryParamsType
	resource?: any
	fields: FormFieldType[]
	filterOptions: SearchFilterOptionType[]
	sortOptions: SortOptionType[]
	buttons?: ButtonType[]
	href?: string
	enableSearch?: boolean
	enableShow?: boolean
	enableCreate?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	perPage?: number
	loadMore?: boolean
	list?: React.FC<any>
	sortableList?: React.FC<any>
	header?: React.FC<any>
	toolbar?: React.FC<any>
	show?: React.FC<any>
	edit?: React.FC<any>
	empty?: React.FC<any>
	create?: React.FC<any>
	destroy?: React.FC<any>
	component?: React.FC<any>
	toolbarButtons?: ToolbarButtonType[]
	slots?: {
		header?: any
		toolbar?: any
		list?: any
		item?: any
		show?: any
		edit?: any
		create?: any
		destroy?: any
		empty?: any
	}
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
}

const DataList: React.FC<DataListProps> = (props) => {
	const SLOT_PROPS = {
		header: {},
		toolbar: {},
		list: {},
		item: {},
		show: {},
		edit: {},
		create: {},
		destroy: {},
		empty: {},
	}

	const {
		grid = false,
		selectable,
		resource,
		enableSearch,
		enableShow,
		enableCreate,
		enableEdit,
		enableDelete,
		enableFilters,
		enableSorting,
		href,
		url,
		foreignUrl,
		name,
		query = {},
		fields = [],
		filterOptions = [],
		sortOptions = [],
		perPage,
		emptyIcon,
		emptyTitle,
		emptyDescription,
		buttons = [],
		header: Header = DataHeader,
		toolbar: Toolbar = DataToolbar,
		list: List = DataListItems,
		component: Component = DataItem,
		show: Show = DataShow,
		edit: Edit = DataForm,
		create: Create = DataForm,
		destroy: Delete = DataDelete,
		empty: Empty = DataEmpty,
		slots = SLOT_PROPS,
		loadMore,
		...rest
	} = props

	return (
		<ResourceProvider name={name} url={url} foreignUrl={foreignUrl}>
			<DataFetcher query={query}>
				<div className="flex flex-col space-y-2">
					<Header
						url={url}
						query={query}
						enableSearch={enableSearch}
						enableCreate={enableCreate}
						enableFilters={enableFilters}
						enableSorting={enableSorting}
						filterOptions={filterOptions}
						sortOptions={sortOptions}
						{...slots.header}
					/>
					<Toolbar {...slots.toolbar} buttons={buttons} />
					<List
						grid={grid}
						selectable={selectable}
						href={href}
						enableEdit={enableEdit}
						enableDelete={enableDelete}
						component={Component}
						{...slots.list}
						slots={{
							item: slots.item,
						}}
					/>
					<Edit fields={fields} parentResource={resource} {...slots.edit} />
					<Create fields={fields} parentResource={resource} {...slots.create} />
					<Empty
						icon={emptyIcon}
						title={emptyTitle}
						description={emptyDescription}
						{...slots.empty}
					/>
					<Show
						enableEdit={enableEdit}
						enableDelete={enableDelete}
						{...slots.show}
					/>
					<Delete
						icon={emptyIcon}
						title={emptyTitle}
						description={emptyDescription}
						{...slots.destroy}
					/>
				</div>
			</DataFetcher>
		</ResourceProvider>
	)
}

export default DataList
