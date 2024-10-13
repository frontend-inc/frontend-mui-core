'use client'

import React, { useEffect, useState } from 'react'
import { AlertModal } from '../../../components'
import { useAlerts } from '../../../hooks'
import { useDocuments, useAdmin } from '../../../hooks'
import { Table } from '../../../components'
import { ImageModal, AdminVideoModal } from '../../../components'
import { TableFilterDrawer } from '../../../components'
import AdminToolbarMenu from './AdminToolbarMenu'
import { useRouter, useParams, usePathname, useSearchParams } from 'next/navigation'
import copy from 'copy-to-clipboard'
import { USER_FIELD, ID_FIELD, PUBLISHED_FIELD } from '../../../constants'
import { ApiQuery } from 'frontend-js'


type AdminCollectionTableProps = {
	collection: any
	handleSaveView: () => void
}

const AdminCollectionTable: React.FC<AdminCollectionTableProps> = (props) => {
	const { collection, handleSaveView } = props

	const apiQuery = new ApiQuery()

	const router = useRouter()
	const { collection_id: collectionId } = useParams() as any

	const { fields } = collection || {}
	const [selected, setSelected] = useState([])

	const [showDeleteModal, setShowDeleteModal] = useState(false)

	const [activeSrc, setActiveSrc] = useState('')
	const [activeImage, setActiveImage] = useState('')

	const [showImageModal, setShowImageModal] = useState(false)
	const [showVideoModal, setShowVideoModal] = useState(false)
	const [showFilters, setShowFilters] = useState(false)
	const [visibleFields, setVisibleFields] = useState<any[]>()

	const { clientUrl } = useAdmin()

	const {
		query,
		setQuery,
		loading,
		delayedLoading,
		documents,
		findDocuments,
		deleteDocument,
		deleteDocuments,
		publish,
		unpublish,
		paginate,
		page,
		perPage,
		numPages,
		totalCount,
	} = useDocuments({
		collection: collectionId,
	})

	const { showAlertSuccess } = useAlerts()

	const handleDeleteSelectedClick = (items) => {
		setSelected(items)
		setShowDeleteModal(true)
	}

	const handleEditSelectedClick = (items) => {
		let itemIds = items.map((item) => item.id)
		router.push(
			`${clientUrl}/collections/${collection.name}/documents/edit?ids=${itemIds}`
		)
	}

	const handleEditClick = (row) => {
		router.push(
			`${clientUrl}/collections/${collection.name}/documents/${row.id}`
		)
	}

	const handleDeleteRow = async () => {
		if (selected?.length === 1) {
			await deleteDocument(selected[0].id)
		} else if (selected?.length > 1) {
			const selectedIds = selected.map((row) => row.id)
			await deleteDocuments(selectedIds)
		}
		setSelected([])
		setShowDeleteModal(false)
		findDocuments()
	}

	const handlePublish = async (items) => {
		const selectedIds = items.map((row) => row.id)
		await publish(selectedIds)
		setSelected([])
		findDocuments()
	}

	const handleUnpublish = async (items) => {
		const selectedIds = items.map((row) => row.id)
		await unpublish(selectedIds)
		setSelected([])
		findDocuments()
	}

	const handlePaginate = async (page) => {
		await paginate(page)
	}

	const handleCellClick = (value, row, field) => {
		switch (field.variant) {
			case 'habtm':
				handleCellHABTMClick({
					values: value.map((v) => v.id),
					collection: field?.foreign_collection,
				})
				break
			case 'user':
				handleCellBelongsToClick({ value, field: 'user_id' })
				break
			case 'team':
				handleCellBelongsToClick({ value, field: 'team_id' })
				break
			case 'url':
				handleCellLinkClick(value)
				break
			case 'image':
				handleCellImageClick(value)
				break
			case 'video':
				handleCellVideoClick(value)
				break
			case 'file':
				handleCellFileClick(value)
				break
		}
	}

	const handleCellImageClick = (image) => {
		if (image?.url) {
			setActiveImage(image)
			setShowImageModal(true)
		}
	}

	const handleCellVideoClick = (video) => {
		if (video?.url) {
			setShowVideoModal(true)
			setActiveSrc(video.url)
		}
	}

	const handleCellFileClick = (file) => {
		if (file?.url) {
			window.open(file.url, '_blank')
		}
	}

	const handleCellBelongsToClick = async (params) => {
		const { value: resource, field: belongsToField } = params || {}
		const filters = {
			AND: [
				{
					[belongsToField]: { eq: resource?.id },
				},
			],
		}
		apiQuery.filter(filters)
		router.push(
			`${clientUrl}/collections/${collection?.name}?${apiQuery.url()}`
		)
	}

	const handleCellHABTMClick = async (params) => {
		const { values, collection } = params || {}
		const filters = {
			AND: [
				{
					id: { in: values },
				},
			],
		}
		apiQuery.filter(filters)
		router.push(
			`${clientUrl}/collections/${collection?.name}?${apiQuery.url()}`
		)
	}

	const handleQueryChange = (ev) => {
		const { value, name } = ev.target
		setQuery({
			...query,
			[name]: value,
		})
	}

	const handleKeywordSearch = (searchTerm) => {
		let searchQuery = {
			...query,
			keywords: searchTerm,
		}
		handleSearch(searchQuery)
	}

	const handleSearch = (searchQuery) => {
		setShowFilters(false)
		let query = {
			...searchQuery,
			page: 1,
			per_page: 20,
		}
		apiQuery.where(query)
		router.push(`${clientUrl}/collections/${collection.name}?${apiQuery.url()}`)
	}

	const handleClearFilters = () => {
		setShowFilters(false)
		let query = {
			...useParams() as any,
			filters: {
				AND: [],
				OR: [],
			},
			keywords: '',
		}
		apiQuery.where(query)
		router.push(`${clientUrl}/collections/${collection.name}?${apiQuery.url()}`)
	}

	const handleSort = (field) => {
		apiQuery.parseURL(useParams() as any)
		apiQuery.sort(field?.name)
		router.push(`${clientUrl}/collections/${collection.name}?${apiQuery.url()}`)
	}

	const handleCellLinkClick = async (value) => {
		copy(value)
		showAlertSuccess('Link copied to clipboard')
	}

	const handleSetVisibleFields = (fields) => {
		let startFields = [ID_FIELD, USER_FIELD]
		let endFields = [PUBLISHED_FIELD]
		let customFields = fields.filter((f) => f.visible)
		let allFields = [...startFields, ...customFields, ...endFields]
		setVisibleFields(allFields)
	}

	useEffect(() => {
		if (fields) {
			handleSetVisibleFields(fields)
		}
	}, [fields])

  const searchParams = useSearchParams()

	useEffect(() => {    
		if (searchParams) {
      const queryObject = {};
      searchParams.forEach((value, key) => {
        queryObject[key] = value;
      });    

			let parsedQuery = apiQuery.parseURL(queryObject).query()
			findDocuments(parsedQuery)
		}
	}, [searchParams])

	return (
		<div>
			<Table
				enableSelect
				enableEdit
				enableDelete
				loading={documents && delayedLoading}
				//@ts-ignore
				headers={visibleFields}
				rows={documents}
				handleClick={handleCellClick}
				handleEdit={handleEditClick}
				handleEditSelected={handleEditSelectedClick}
				handleDelete={handleDeleteSelectedClick}
				handlePublish={handlePublish}
				handleUnpublish={handleUnpublish}
				//selected={selected}
				query={query}
				handleClearQuery={handleClearFilters}
				handleQueryChange={handleQueryChange}
				handleSearch={handleSearch}
				handleKeywordSearch={handleKeywordSearch}
				handleSort={handleSort}
				page={page}
				perPage={perPage}
				numPages={numPages}
				totalCount={totalCount}
				handlePaginate={handlePaginate}
				disableBorderRadius
				secondaryActions={<AdminToolbarMenu handleSaveView={handleSaveView} />}
			/>
			{fields && (
				<TableFilterDrawer
					loading={loading}
					open={showFilters}
					handleClose={() => setShowFilters(false)}
					fields={fields}
					handleSearch={handleSearch}
					query={query}
					handleChange={handleQueryChange}
					handleClearFilters={handleClearFilters}
				/>
			)}
			<ImageModal
				open={showImageModal}
				image={activeImage}
				handleClose={() => setShowImageModal(false)}
			/>
			<AdminVideoModal
				enableCopy
				enableDownload
				open={showVideoModal}
				src={activeSrc}
				handleClose={() => setShowVideoModal(false)}
			/>
			<AlertModal
				open={showDeleteModal}
				handleClose={() => setShowDeleteModal(false)}
				handleConfirm={handleDeleteRow}
			/>
		</div>
	)
}

export default AdminCollectionTable
