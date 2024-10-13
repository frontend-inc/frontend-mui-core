'use client'

import React, { useEffect, useState } from 'react'
import AdminDocumentInput from './AdminDocumentInput'
import { FieldType, ProductType } from '../../../types'
import { get } from 'lodash'

type AdminDocumentFormProps = {
	errors?: any
	fields: FieldType[]
	document: any
	collection: any
	handleChange: (e: any) => void
	handleAddReferences: (items: any[]) => void
	handleRemoveReferences: (items: any[]) => void
	handleAddAttachment: (field: string, id: number) => void
	handleRemoveAttachment: (field: string) => void
	handleAddProducts: (products: ProductType[]) => void
	handleRemoveProducts: (products: ProductType[]) => void
	handleUpdateProductPositions: (sorted: number[]) => void
}

const AdminDocumentForm: React.FC<AdminDocumentFormProps> = (props) => {
	const {
		errors,
		fields,
		document,
		collection,
		handleChange,
		handleAddReferences,
		handleRemoveReferences,
		handleAddAttachment,
		handleRemoveAttachment,
		handleAddProducts,
		handleRemoveProducts,
		handleUpdateProductPositions,
	} = props

	const [editableFields, setEditableFields] = useState<FieldType[]>([])

	useEffect(() => {
		if (fields) {
			let sortedFields = fields.sort((a, b) => a.position - b.position)
			setEditableFields(sortedFields)
		}
	}, [fields])

	if (!document) return null
	return (
		<div className="flex flex-col space-y-3">
			{editableFields?.map((field, i) => (
				<AdminDocumentInput
					key={i}
					errors={errors}
					field={field}
					value={get(document, field?.name)}
					placeholder={field.label?.toLowerCase()}
					handleChange={handleChange}
					document={document}
					collection={collection}
					handleAddReferences={handleAddReferences}
					handleRemoveReferences={handleRemoveReferences}
					handleAddAttachment={handleAddAttachment}
					handleRemoveAttachment={handleRemoveAttachment}
					handleAddProducts={handleAddProducts}
					handleRemoveProducts={handleRemoveProducts}
					handleUpdateProductPositions={handleUpdateProductPositions}
				/>
			))}
		</div>
	)
}

export default AdminDocumentForm
