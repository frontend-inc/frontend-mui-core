'use client'

import React from 'react'
import { SortableList } from '../../..'
import { ReferenceType } from '../../../../types'
import SortableReferenceItem from './SortableReferenceItem'

type SortableReferencesProps = {
	references: ReferenceType[]
	handleDrop: (sorted: any) => void
	handleDelete: (resource: any) => void
	handleEdit: (resource: any) => void
}

const SortableReferences: React.FC<SortableReferencesProps> = (props) => {
	const { references, handleDrop, handleDelete, handleEdit } = props || {}

	const sorted = references?.sort((a, b) => a.position - b.position)

	if (!sorted) return null
	return (
		<SortableList
			droppableId="document-references"
			items={sorted}
			handleDrop={handleDrop}
			renderItem={(reference) => (
				<SortableReferenceItem
					key={reference.id}
					image={reference?.target?.image?.url}
					title={reference?.target?.title}
					isDragging={reference?.isDragging}
					handleDelete={() => handleDelete(reference?.target)}
					handleEdit={() => handleEdit(reference?.target)}
				/>
			)}
		/>
	)
}

export default SortableReferences
