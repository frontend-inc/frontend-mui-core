'use client'

import React, { useEffect, useState } from 'react'
import { useDocuments } from '../../../../hooks'
import { SortableList } from '../../../../components'
import { Button } from '../../../../tailwind'
import { Search } from 'lucide-react'
import DocumentList from './DocumentList'
import DocumentEdit from './DocumentEdit'
import ReferenceItem from './ReferenceItem'
import { filterReferences } from '../../../../helpers'

type ReferenceInputProps = {
	field: any
	document: any
	collection: any
	handleAddReferences: (resources: any[]) => void
	handleRemoveReferences: (resources: any[]) => void
	enableMultipleSelect?: boolean
}

const ReferenceInput: React.FC<ReferenceInputProps> = (props) => {
	const {
		field,
		document,
		collection,
		handleAddReferences,
		handleRemoveReferences,
		enableMultipleSelect = false,
	} = props

	const [resources, setResources] = useState()
	const [open, setOpen] = useState(false)
	const [openEdit, setOpenEdit] = useState(false)
	const [foreignDocument, setForeignDocument] = useState<any>({})

	const { updateReferencePositions } = useDocuments({
		collection: collection?.name,
	})

	const handleSubmit = async (resources) => {
		const resourceIds = resources.map((resource) => resource?.id)
		await handleAddReferences(resourceIds)
		setOpen(false)
	}

	const handleAddClick = () => {
		setForeignDocument({})
		setOpenEdit(true)
	}

	const handleEdit = (resource) => {
		setForeignDocument(resource)
		setOpenEdit(true)
	}

	const handleRemove = async (resource) => {
		await handleRemoveReferences([resource?.target_id])
		setOpen(false)
	}

	const handleDrop = async (sorted) => {
		let sortedReferences = sorted.map((reference, index) => ({
			...reference,
			position: index,
		}))
		updateReferencePositions(document?.id, sortedReferences)
	}

	useEffect(() => {
		if (field && document) {
			if (field?.variant == 'habtm') {
				let references = filterReferences(
					document,
					field?.foreign_collection?.class_name
				)
				setResources(references || [])
			}
		}
	}, [field, document])

	return (
		<div className="w-full">
			{resources && field && (
				<SortableList
					droppableId={'sortable-documents'}
					items={resources}
					handleDrop={handleDrop}
					renderItem={(item, idx) => (
						<ReferenceItem
							key={idx}
							item={item}
							handleEditItem={handleEdit}
							handleRemoveItem={handleRemove}
						/>
					)}
				/>
			)}
			<div className="flex flex-row space-x-1">
				<Button
					color="secondary"
					variant="contained"
					onClick={() => setOpen(true)}
					startIcon={<Search className="w-5 h-5 text-foreground" />}
				>
					Choose {field?.foreign_collection?.plural_name}
				</Button>
				<Button color="secondary" variant="contained" onClick={handleAddClick}>
					Add {field?.foreign_collection?.singular_name}
				</Button>
			</div>
			<DocumentList
				enableMultipleSelect={enableMultipleSelect}
				open={open}
				field={field}
				handleSubmit={handleSubmit}
				handleClose={() => setOpen(false)}
			/>
			<DocumentEdit
				open={openEdit}
				handleClose={() => setOpenEdit(false)}
				handleSubmit={handleSubmit}
				documentId={foreignDocument?.id}
				collectionId={field?.foreign_collection?.name}
			/>
		</div>
	)
}

export default ReferenceInput
