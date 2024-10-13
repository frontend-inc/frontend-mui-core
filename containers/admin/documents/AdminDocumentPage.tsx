'use client'

import React, { useEffect, useState } from 'react'
import {
	AdminHeader,
	AdminLayoutCenter,
	AdminLayoutRight,
} from '../../../components'
import { PublishLabel } from '../../../components'
import { IconButton } from '../../../tailwind'
import AdminDocumentForm from './AdminDocumentForm'
import AdminDocumentRightPanel from './AdminDocumentRightPanel'
import { ChevronLeft } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAdmin, useDocuments, useCollections } from '../../../hooks'
import { truncate } from '../../../helpers'
import { ScrollArea } from '../../../shadcn/ui/scroll-area'

type DocumentEditProps = {
	appId: string | number
	collectionId: string | number
	documentId: string | number
	errors?: any
	enableUsers?: boolean
	enableShopify?: boolean
}

const DocumentEdit: React.FC<DocumentEditProps> = (props) => {
	const router = useRouter()

	const { appId, documentId, collectionId, enableUsers } = props

	const [saveLoading, setSaveLoading] = useState(false)
	const [publishLoading, setPublishLoading] = useState(false)
	const [title, setTitle] = useState('')
	const [activeFields, setActiveFields] = useState([])
	const [documentIds, setDocumentIds] = useState()

	const { clientUrl } = useAdmin()
	const { collection, findCollection } = useCollections()

	const {
		loading,
		errors,
		document,
		setDocument,
		findDocument,
		updateDocument,
		createDocument,
		reloadDocument,
		addReferences,
		removeReferences,
		addProductReferences,
		removeProductReferences,
		updateProductReferencePositions,
		addAttachment,
		removeAttachment,
		updateDocuments,
		handleChange,
	} = useDocuments({
		collection: collectionId,
	})

	const handleSubmit = async () => {
		let resp
		setSaveLoading(true)
		if (document?.id) {
			resp = await updateDocument(document)
		} else {
			resp = await createDocument({
				...document,
				content_type: collectionId,
			})
			if (resp?.id) {
				router.push(
					`${clientUrl}/collections/${collectionId}/documents/${resp?.id}`
				)
			}
		}
		setSaveLoading(false)
		return resp
	}

	const handleTogglePublish = async () => {
		setPublishLoading(true)
		await updateDocument({
			...document,
			published: !document.published,
		})
		setPublishLoading(false)
	}

	const handleSortFields = (unsortedFields) => {
		let sortedFields = unsortedFields.filter((field) => field.editable == true)
		setActiveFields(sortedFields)
	}

	const handleAddReferences = async (documentIds) => {
		if (document?.id) {
			await addReferences(document?.id, documentIds)
			reloadDocument(document?.id)
		}
	}

	const handleRemoveReferences = async (documentIds) => {
		if (document?.id) {
			await removeReferences(document.id, documentIds)
			reloadDocument(document.id)
		}
	}

	const handleAddProducts = async (productIds) => {
		if (document?.id) {
			await addProductReferences(document?.id, productIds)
			reloadDocument(document?.id)
		}
	}

	const handleRemoveProducts = async (productIds) => {
		if (document?.id) {
			await removeProductReferences(document.id, productIds)
			reloadDocument(document.id)
		}
	}

	const handleUpdateProductPositions = async (sorted) => {
		await updateProductReferencePositions(document?.id, sorted)
	}

	const handleAddAttachment = async (field, documentId) => {
		if (document?.id) {
			await addAttachment(document?.id, field, documentId)
			reloadDocument(document?.id)
		}
	}

	const handleRemoveAttachment = async (field: string) => {
		if (document?.id) {
			await removeAttachment(document?.id, field)
			reloadDocument(document?.id)
		}
	}

	useEffect(() => {
		const { singular_name, plural_name } = collection || {}
		if (document?.id) {
			setTitle(truncate(document.title, 20))
		} else if (documentId && singular_name) {
			setTitle(`Edit ${singular_name}`)
		} else if (documentIds && plural_name) {
			setTitle(`Edit ${plural_name}`)
		} else if (!documentId && !documentIds && singular_name) {
			setTitle(`Add ${singular_name}`)
		}
	}, [document, documentId, documentIds, collection])

	useEffect(() => {
		if (collectionId) {
			findCollection(collectionId)
		}
	}, [collectionId])

	useEffect(() => {
		if (documentId) {
			findDocument(documentId)
		} else {
			setDocument({})
		}
	}, [documentId])


  const searchParams = useSearchParams() 

	useEffect(() => {
		if (searchParams) {
			//@ts-ignore
			setDocumentIds(searchParams?.ids?.split(',') || [])
		}
	}, [searchParams])

	useEffect(() => {
		if (collection?.fields) {
			handleSortFields(collection?.fields)
		}
	}, [collection?.fields])

	const handleBackClick = () => {
		router.push(`${clientUrl}/collections/${collection?.name}`)
	}

	const { setOpenLayoutRight } = useAdmin()

	useEffect(() => {
		setOpenLayoutRight(true)
	}, [])

	return (
		<>
			<AdminLayoutCenter>
				<AdminHeader
					enableExpandRightPanel
					title={title}
					primaryActions={
						<IconButton className="mr-2" onClick={handleBackClick}>
							<ChevronLeft className="text-foreground" />
						</IconButton>
					}
					buttons={<PublishLabel published={document?.published} />}
				/>
				<ScrollArea>
					<div className="p-4">
						<AdminDocumentForm
							errors={errors}
							document={document}
							fields={activeFields}
							collection={collection}
							//@ts-ignore
							handleChange={handleChange}
							handleAddReferences={handleAddReferences}
							handleRemoveReferences={handleRemoveReferences}
							handleAddAttachment={handleAddAttachment}
							handleRemoveAttachment={handleRemoveAttachment}
							handleAddProducts={handleAddProducts}
							handleRemoveProducts={handleRemoveProducts}
							handleUpdateProductPositions={handleUpdateProductPositions}
						/>
					</div>
				</ScrollArea>
			</AdminLayoutCenter>
			<AdminLayoutRight>
				<AdminHeader title="Publish" />
				<AdminDocumentRightPanel
					appId={appId}
					loading={loading}
					publishLoading={publishLoading}
					errors={errors}
					title={title}
					document={document}
					setDocument={setDocument}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleTogglePublish={handleTogglePublish}
					enableUsers={enableUsers}
				/>
			</AdminLayoutRight>
		</>
	)
}

export default DocumentEdit
