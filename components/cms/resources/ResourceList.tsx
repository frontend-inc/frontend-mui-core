'use client'

import React, { useEffect, useState } from 'react'
import { useFilters } from '../../../hooks'
import { useResource } from 'frontend-js'
import { SortableListItems, AlertModal, Placeholder } from '../..'
import {
	FormFieldType,
	FilterOptionType,
	SearchFilterOptionType,
	TableHeaderType,
	DisplayFieldType,
} from '../../../types'
import { SortOptionType, SyntheticEventType } from '../../../types'
import ResourceForm from './ResourceForm'
import ResourceShow from './ResourceShow'
import ResourceItem from './ResourceItem'
import ResourceListItems from './ResourceListItems'
import ResourceHeader from './ResourceHeader'
import ResourceToolbar from './ResourceToolbar'
import { ToolbarButtonType } from '../../../types'
import { cn } from '../../../shadcn/lib/utils'

export type ResourceListProps = {
	grid?: boolean
	sortable?: boolean
	selectable?: boolean
	header?: React.FC<any>
	list?: React.FC<any>
	edit?: React.FC<any>
	create?: React.FC<any>
	show?: React.FC<any>
	pagination?: React.FC<any>
	toolbar?: React.FC<any>
	url: string
	name: string
	component?: React.FC<any>
	layout?: 'list' | 'grid'
	dense?: boolean
	handleClick?: (resource: any) => void
	enableInfiniteLoad?: boolean
	enableLoadMore?: boolean
	perPage?: number
	query?: any
	headers?: TableHeaderType[]
	fields?: FormFieldType[]
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	displayFields?: DisplayFieldType[]
	enableSearch?: boolean
	buttonText?: string
	enableShow?: boolean
	enableEdit?: boolean
	enableCreate?: boolean
	enableDelete?: boolean
	enableBorder?: boolean
	direction?: 'row' | 'column'
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
	itemProps?: any
	disableInfiniteLoad?: boolean
	buttons?: ToolbarButtonType[]
	defaultValue?: any
	slots?: {
		list?: any
		item?: any
		edit?: any
		create?: any
		show?: any
		header?: any
		toolbar?: any
		pagination?: any
	}
}

const ResourceList: React.FC<ResourceListProps> = (props) => {
	const SLOT_PROPS = {
		list: {},
		item: {},
		edit: {},
		create: {},
		show: {},
		header: {},
		toolbar: {},
		pagination: {},
	}

	const {
		grid = false,
		sortable = false,
		selectable = false,
		header: Header = ResourceHeader,
		toolbar: Toolbar = ResourceToolbar,
		list: List = ResourceListItems,
		component: Component = ResourceItem,
		edit: EditForm = ResourceForm,
		create: CreateForm = ResourceForm,
		show: ShowModal = ResourceShow,
		disableInfiniteLoad = false,
		url,
		name,
		headers = [],
		fields = [],
		filterOptions = [],
		sortOptions = [],
		displayFields = [],
		buttons = [],
		query: defaultQuery = {},
		perPage = 20,
		enableSearch = false,
		enableEdit,
		enableDelete,
		enableCreate,
		enableShow,
		handleClick,
		slots = SLOT_PROPS,
		enableBorder = false,
		direction = 'row',
		emptyIcon = 'Search',
		emptyTitle = 'No results found',
		emptyDescription = 'Try adjusting your search or filters',
		defaultValue = {},
	} = props

	const [openShow, setOpenShow] = useState(false)
	const [openCreate, setOpenCreate] = useState(false)
	const [openEdit, setOpenEdit] = useState(false)
	const [openDelete, setOpenDelete] = useState(false)

	const {
		delayedLoading: loading,
		errors,
		resource,
		resources,
		setResource,
		update,
		create,
		destroy,
		updatePositions,
		handleChange,
		query,
		findMany,
		reloadMany,
		addAttachment,
		removeAttachment,
		page,
		numPages,
		totalCount,
		loadMore,
		paginate,

		reloadOne,
		selected,
		selectedIds,
		handleSelect,
		handleClear,
	} = useResource({
		name,
		url,
	})

	const [keywords, setKeywords] = useState('')

	const handleKeywordChange = (ev: SyntheticEventType) => {
		setKeywords(ev.target.value)
	}

	const handleSearch = (keywords: string) => {
		findMany({
			...query,
			...defaultQuery,
			keywords: keywords,
			page: 1,
			per_page: perPage,
		})
	}

	const handlePaginate = async (page) => {
		if (!disableInfiniteLoad) {
			await loadMore()
		} else {
			await paginate(page)
		}
	}

	const handleSort = (field: SortOptionType) => {
		let sortBy = field?.name
		let sortDir = query?.sort_direction
		if (sortBy == query?.sort_by) {
			sortDir = query?.sort_direction == 'asc' ? 'desc' : 'asc'
		}
		findMany({
			...query,
			sort_by: sortBy,
			sort_direction: sortDir,
		})
	}

	const handleSortDirection = (sortDirection: 'asc' | 'desc') => {
		findMany({
			...query,
			sort_direction: sortDirection,
		})
	}

	const {
		activeFilters,
		setActiveFilters,
		handleAddFilter,
		buildQueryFilters,
	} = useFilters({
		query,
	})

	// Filter methods
	const handleClearFilters = () => {
		setActiveFilters([])
		findMany({
			filters: {
				...defaultQuery?.filters,
			},
			sort_by: 'id',
			sort_direction: 'desc',
			keywords: '',
			page: 1,
			per_page: perPage,
		})
	}

	const handleFilter = (filter: FilterOptionType) => {
		handleAddFilter(filter)
	}

	const handleAdd = () => {
		setResource({})
		setOpenShow(false)
		setOpenEdit(false)
		setOpenCreate(true)
	}

	const handleEdit = async (resource) => {
		let resp = await reloadOne(resource?.id)
		setResource(resp)
		setOpenShow(false)
		setOpenCreate(false)
		setOpenEdit(true)
	}

	const handleSubmit = async () => {
		try {
			let resp
			if (resource?.id) {
				resp = await update(resource)
			} else {
				resp = await create({
					...defaultValue,
					...resource,
				})
			}
			if (resp?.id) {
				setResource({})
				setOpenShow(false)
				setOpenCreate(false)
				setOpenEdit(false)
				reloadMany()
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

	const handleShowClick = async (resource) => {
		if (handleClick) {
			handleClick(resource)
		} else if (enableShow) {
			let resp = await reloadOne(resource?.id)
			setResource(resp)
			setOpenShow(true)
			setOpenEdit(false)
			setOpenCreate(false)
		}
	}

	const handleDeleteClick = (resource) => {
		setResource(resource)
		setOpenEdit(false)
		setOpenCreate(false)
		setOpenDelete(true)
	}

	const handleDelete = async () => {
		await destroy(resource?.id)
		setOpenShow(false)
		setOpenEdit(false)
		setOpenDelete(false)
		setResource({})
		await reloadMany()
	}

	const handleRemove = async (name) => {
		await removeAttachment(resource?.id, name)
	}

	const handleRemoveAttachment = async (name) => {
		await removeAttachment(resource?.id, name)
	}

	const handleAddAttachment = async (name, attachmentId) => {
		await addAttachment(resource?.id, name, attachmentId)
	}

	const handleDrop = async (sorted) => {
		await updatePositions(sorted)
	}

	const handleSuccess = async () => {
		await reloadMany()
		handleClear()
	}

	useEffect(() => {
		if (activeFilters) {
			findMany({
				...query,
				filters: buildQueryFilters(activeFilters),
				...defaultQuery,
			})
		}
	}, [activeFilters?.length])

	useEffect(() => {
		if (url && name && perPage) {
			findMany({
				...defaultQuery,
				per_page: perPage,
			})
		}
	}, [url, name, perPage])

	const enableFilters = filterOptions?.length > 0
	const enableSorting = sortOptions?.length > 0

	return (
		<>
			<Toolbar
				selected={selected}
				selectedIds={selectedIds}
				open={selected?.length > 0}
				handleClose={handleClear}
				buttons={buttons}
				onSuccess={handleSuccess}
				handleReload={reloadMany}
				{...slots.toolbar}
			/>
			<div className="flex flex-col space-y-3">
				<Header
					selected={selected}
					direction={direction}
					enableSearch={enableSearch}
					enableFilters={enableFilters}
					enableSorting={enableSorting}
					enableCreate={enableCreate}
					handleSearch={handleSearch}
					handleKeywordChange={handleKeywordChange}
					handleFilter={handleFilter}
					handleClearFilters={handleClearFilters}
					handleSort={handleSort}
					handleSortDirection={handleSortDirection}
					handleAdd={handleAdd}
					keywords={keywords}
					handleReload={reloadMany}
					activeFilters={activeFilters}
					filterOptions={filterOptions}
					sortOptions={sortOptions}
					query={query}
					{...slots.header}
				/>
				<div className={cn(loading && 'opacity-50')}>
					{!sortable ? (
						<List
							grid={grid}
							query={query}
							headers={headers}
							page={page}
							numPages={numPages}
							totalCount={totalCount}
							handlePaginate={handlePaginate}
							handleSort={handleSort}
							enableEdit={enableEdit}
							enableDelete={enableDelete}
							enableShow={enableShow}
							handleEdit={handleEdit}
							handleShow={handleShowClick}
							handleDelete={handleDeleteClick}
							resources={resources}
							renderItem={(resource, props) => (
								<Component
									key={resource?.id}
									selectable={selectable}
									resource={resource}
									selected={
										//@ts-ignore
										selectedIds?.includes(resource?.id)
									}
									enableSelect={selectable}
									enableBorder={enableBorder}
									enableEdit={enableEdit}
									enableDelete={enableDelete}
									handleClick={() => handleShowClick(resource)}
									handleEdit={() => handleEdit(resource)}
									handleDelete={() => handleDeleteClick(resource)}
									handleSelect={() => handleSelect(resource)}
									handleReload={reloadMany}
									{...slots.item}
								/>
							)}
							{...slots.list}
						/>
					) : (
						<SortableListItems
							droppableId="sortable"
							resources={resources}
							handleDrop={handleDrop}
							page={page}
							numPages={numPages}
							totalCount={totalCount}
							handlePaginate={handlePaginate}
							handleReload={reloadMany}
							renderItem={(resource, index) => (
								<Component
									key={index}
									sortable
									selectable={selectable}
									selected={
										// @ts-ignore
										selectedIds?.includes(resource?.id)
									}
									resource={resource}
									enableBorder={enableBorder}
									enableEdit={enableEdit}
									enableDelete={enableDelete}
									handleClick={
										handleClick
											? () => handleClick(resource)
											: () => handleShowClick(resource)
									}
									handleEdit={() => handleEdit(resource)}
									handleDelete={() => handleDeleteClick(resource)}
									handleSelect={() => handleSelect(resource)}
									handleReload={reloadMany}
									{...slots.item}
								/>
							)}
							{...slots.list}
						/>
					)}
					{!loading && resources?.length == 0 && (
						<Placeholder
							icon={emptyIcon}
							title={emptyTitle}
							description={emptyDescription}
						/>
					)}
				</div>
				<CreateForm
					open={openCreate}
					handleClose={() => setOpenCreate(false)}
					loading={loading}
					errors={errors}
					resource={resource}
					setResource={setResource}
					handleChange={handleChange}
					handleRemove={handleRemove}
					handleAddAttachment={handleAddAttachment}
					handleRemoveAttachment={handleRemoveAttachment}
					handleSubmit={handleSubmit}
					handleReload={reloadMany}
					fields={fields}
					{...slots.create}
				/>
				<EditForm
					open={openEdit}
					handleClose={() => setOpenEdit(false)}
					loading={loading}
					errors={errors}
					resource={resource}
					setResource={setResource}
					handleChange={handleChange}
					handleRemove={handleRemove}
					handleAddAttachment={handleAddAttachment}
					handleRemoveAttachment={handleRemoveAttachment}
					handleSubmit={handleSubmit}
					handleReload={reloadMany}
					handleReloadOne={reloadOne}
					fields={fields}
					{...slots.edit}
				/>
				<ShowModal
					loading={loading}
					open={openShow}
					handleClose={() => setOpenShow(false)}
					fields={displayFields}
					resource={resource}
					enableEdit={enableEdit}
					enableDelete={enableDelete}
					handleEdit={() => handleEdit(resource)}
					handleDelete={() => handleDeleteClick(resource)}
					handleReload={reloadMany}
					{...slots.show}
				/>
				<AlertModal
					open={openDelete}
					handleClose={() => setOpenDelete(false)}
					title="Are you sure you want to delete this item?"
					description="This action cannot be reversed."
					handleConfirm={handleDelete}
				/>
			</div>
		</>
	)
}

export default ResourceList
