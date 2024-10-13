import React, { useState, useEffect } from 'react'
import { IconButton, Button } from '../../../tailwind'
import {
	AdminHeader,
	AdminLayoutLeft,
	AdminLayoutCenter,
} from '../../../components'
import { LayoutEmpty, Icon, AlertModal } from '../../../components'
import { useTabs, useAdmin, useCollections, useViews } from '../../../hooks'
import { useRouter } from 'next/router'
import AdminViewEdit from '../views/AdminViewEdit'
import { ApiQuery } from 'frontend-js'
import AdminCollectionTable from './AdminCollectionTable'
import CollectionSchemaToggle from './CollectionSchemaToggle'
import AdminCollectionMenu from './AdminCollectionMenu'
import { RouterParams } from '../../../types'
import { Plus } from 'lucide-react'

const AdminCollectionPage: React.FC = () => {
	useTabs('collections')

	const apiQuery = new ApiQuery()
	const router = useRouter()
	let { collection_id: collectionId, app_id: appId } =
		router?.query as RouterParams
	if (collectionId == 'index') collectionId = ''

	const { clientUrl } = useAdmin()

	const [openAiModal, setOpenAiModal] = useState(false)
	const [showViewModal, setShowViewModal] = useState(false)

	const {
		loading: viewLoading,
		errors: viewErrors,
		view,
		findViews,
		createView,
		handleChange: handleChangeView,
		setView,
	} = useViews()

	const { loading, collection, findCollection, aiGenerateData } =
		useCollections()

	const handleSaveView = async () => {
		const viewQuery = apiQuery.parseURL(router.query).query()
		setView({
			collection_id: collectionId,
			query: viewQuery,
		})
		setShowViewModal(true)
	}

	const handleSubmitView = async () => {
		try {
			let resp = await createView({
				...view,
				collection_id: collectionId,
			})
			if (resp?.id) {
				setShowViewModal(false)
				findViews()
				setView({})
				apiQuery.where(resp?.query)
				router.push(
					`${clientUrl}/collections/${
						resp?.collection?.name
					}?${apiQuery.url()}&view_id=${resp?.id}`
				)
			}
		} catch (e) {
			console.log(e)
		}
	}

	const handleAiGenerateMockData = async () => {
		await aiGenerateData(collectionId)
		setOpenAiModal(false)
		router.push(`${clientUrl}/collections/${collectionId}?page=1&per_page=10`)
	}

	const handleAddClick = () => {
		router.push(`${clientUrl}/collections/${collectionId}/documents/new`)
	}

	useEffect(() => {
		if (collectionId?.length > 0) {
			findCollection(collectionId)
		}
	}, [collectionId])

	return (
		<>
			<AdminLayoutLeft>
				<AdminCollectionMenu />
			</AdminLayoutLeft>
			<AdminLayoutCenter>
				<AdminHeader
					enableExpandLeftPanel
					buttons={
						collectionId && (
							<div className="flex flex-row items-center space-x-2">
								<Button
									variant="contained"
									color="primary"
									onClick={handleAddClick}
									startIcon={
										<Plus className="w-5 h-5 text-primary-foreground" />
									}
								>
									Add
								</Button>
								<IconButton onClick={() => setOpenAiModal(true)}>
									<Icon name="Wand" color="text.primary" />
								</IconButton>
							</div>
						)
					}
					secondaryActions={<CollectionSchemaToggle tab='content' />}
				/>
				{collectionId ? (
					<AdminCollectionTable
						collection={collection}
						handleSaveView={handleSaveView}
					/>
				) : (
					<LayoutEmpty
						icon={'Database'}
						title="No collection."
						description="Select or create a CMS collection."
					/>
				)}
			</AdminLayoutCenter>
			<AdminViewEdit
				loading={viewLoading}
				errors={viewErrors}
				open={showViewModal}
				handleClose={() => setShowViewModal(false)}
				view={view}
				handleSubmit={handleSubmitView}
				handleChange={handleChangeView}
			/>
			<AlertModal
				loading={loading}
				open={openAiModal}
				handleClose={() => setOpenAiModal(false)}
				icon="Sparkles"
				title="Generate data using AI"
				description="Are you sure? This may take a few minutes."
				handleConfirm={handleAiGenerateMockData}
			/>
		</>
	)
}

export default AdminCollectionPage
