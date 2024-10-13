'use client'

import React, { useEffect, useState } from 'react'
import { Drawer } from '../../../../components'
import { useCollections, useDocuments } from '../../../../hooks'
import AdminDocumentForm from '../AdminDocumentForm'
import PublishButton from '../inputs/PublishButton'
import SaveButton from '../inputs/SaveButton'
import { FieldType } from '../../../../types'

type DocumentEditProps = {
	open: boolean
	handleClose: () => void
	documentId?: string
	collectionId: string
	handleSubmit: (items: any[]) => void
}

const DocumentEdit: React.FC<DocumentEditProps> = (props) => {
	const {
		open,
		handleClose,
		documentId,
		collectionId,
		handleSubmit: handleSubmitItems,
	} = props

	const [title, setTitle] = useState<string>(null)
	const [activeFields, setActiveFields] = useState<FieldType[]>(null)

	const { collection, findCollection } = useCollections()

	const {
		loading,
		errors,
		document,
		setDocument,
		findDocument,
		updateDocument,
		createDocument,
		addAttachment,
		removeAttachment,
		addReferences,
		removeReferences,
		addProductReferences,
		removeProductReferences,
		updateProductReferencePositions,
		handleChange,
	} = useDocuments({
		collection: collectionId,
	})

	const handleSubmit = async (document) => {
		let resp
		if (document?.id) {
			resp = await updateDocument(document)
		} else {
			resp = await createDocument({
				...document,
				content_type: collection?.name,
			})
		}
		if (resp?.id) {
			handleSubmitItems([resp])
			findDocument(resp?.data?.id)
			setDocument({})
			handleClose()
		}
		return resp
	}

	const handleSubmitAndPublish = async () => {
		handleSubmit({
			...document,
			published: !document.published,
		})
	}

	const handleSortFields = (unsortedFields) => {
		let sortedFields = unsortedFields
			.filter((field) => field.visible === true)
			.sort((a, b) => a.position - b.position)
		setActiveFields(sortedFields)
	}

	const handleAddReferences = async (documentIds) => {
		await addReferences(document?.id, documentIds)
		findDocument(document?.id)
	}

	const handleRemoveReferences = async (documentIds) => {
		await removeReferences(document?.id, documentIds)
		findDocument(document?.id)
	}

	const handleAddProducts = async (productIds) => {
		await addProductReferences(document?.id, productIds)
		findDocument(document?.id)
	}

	const handleRemoveProducts = async (productIds) => {
		await removeProductReferences(document?.id, productIds)
		findDocument(document?.id)
	}

	const handleUpdateProductPositions = async (productIds) => {
		await updateProductReferencePositions(document?.id, productIds)
		findDocument(document?.id)
	}

	const handleAddAttachment = async (contentType, documentId) => {
		await addAttachment(document?.id, contentType, documentId)
		setDocument(null)
		findDocument(document?.id)
	}

	const handleRemoveAttachment = async (field: string) => {
		await removeAttachment(document?.id, field)
		setDocument({})
		findDocument(document?.id)
	}

	useEffect(() => {
		if (collection?.fields) {
			handleSortFields(collection?.fields)
		}
	}, [collection?.fields])

	useEffect(() => {
		const { singular_name } = collection || {}
		if (document?.id) {
			setTitle(`Edit ${singular_name}`)
		} else if (!document?.id) {
			setTitle(`Add ${singular_name}`)
		}
	}, [documentId, collection])

	useEffect(() => {
		if (open && collectionId) {
			findCollection(collectionId)
		}
	}, [open, collectionId])

	useEffect(() => {
		setDocument({})
		if (open && documentId && collection?.name) {
			findDocument(documentId)
		}
	}, [open, collection?.name, documentId])

	return (
		<Drawer mode="editor" open={open} handleClose={handleClose} title={title}>
			{document && activeFields && (
				<>
					<div className="w-screen sm:w-auto">
						<AdminDocumentForm
							errors={errors}
							document={document}
							fields={activeFields}
							collection={collection}
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
					<div className="flex flex-col space-y-3">
						<SaveButton
							fullWidth
							loading={loading}
							document={document}
							handleSubmit={() => handleSubmit(document)}
						/>
						<PublishButton
							fullWidth
							loading={loading}
							document={document}
							handleTogglePublish={handleSubmitAndPublish}
						/>
					</div>
				</>
			)}
		</Drawer>
	)
}

export default DocumentEdit
