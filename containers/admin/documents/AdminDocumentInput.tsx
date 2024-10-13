'use client'

import React from 'react'
import {
	Autosuggest,
	LocationInput,
	ArrayInput,
	CheckboxInput,
	DateInput,
	RatingInput,
	TextInput,
	TextArea,
	StateInput,
	CountryInput,
	ShopifyProductsInput,
} from '../../../components'
import ReferenceInput from './references/ReferenceInput'
import ProductsInput from './products/ProductsInput'
import { MediaInput, AiChatModal } from '../../../components'
import { ProductType } from '../../../types'

type DocumentInputProps = {
	errors?: any
	field: any
	value: any
	placeholder?: string
	handleChange: (e: any) => void
	document?: any
	collection?: any
	handleAddReferences?: (items: any[]) => void
	handleRemoveReferences?: (items: any[]) => void
	handleAddAttachment?: (field: any, file: any) => void
	handleRemoveAttachment?: (field: any, file: any) => void
	handleAddProducts?: (products: ProductType[]) => void
	handleRemoveProducts?: (products: ProductType[]) => void
	handleUpdateProductPositions?: (sorted: number[]) => void
}

const AdminDocumentInput: React.FC<DocumentInputProps> = (props) => {
	const {
		errors,
		field,
		value,
		handleChange,
		document,
		collection,
		handleAddReferences,
		handleRemoveReferences,
		handleAddAttachment,
		handleRemoveAttachment,
		handleAddProducts,
		handleRemoveProducts,
		handleUpdateProductPositions,
	} = props

	const { variant, name, label, options } = field || {}

	let componentMapper = {
		array: ArrayInput,
		country: CountryInput,
		state: StateInput,
		string: TextInput,
		url: TextInput,
		text: TextArea,
		location: LocationInput,
		number: TextInput,
		price: TextInput,
		date: DateInput,
		datetime: DateInput,
		boolean: CheckboxInput,
		select: Autosuggest,
		rating: RatingInput,
		products: ProductsInput,
		shopify_products: ShopifyProductsInput,
		file: MediaInput,
		image: MediaInput,
		video: MediaInput,
		habtm: ReferenceInput,
	}

	const Component = componentMapper[variant] || TextInput

	let inputProps = {
		array: {
			value: value || [],
		},
		shopify_products: {
			value: value || [],
			height: 180,
			width: 180,
		},
		location: {
			enablePosition: true,
			lat: document?.lat,
			lng: document?.lng,
			darkTheme: true,
			height: 180,
			width: 180,
			zoom: 15,
		},
		tags: {
			value: value || [],
			freeSolo: true,
		},
		select: {
			options:
				options?.map((opt) => ({
					value: opt,
					label: opt,
				})) || [],
		},
		products: {
			document,
			value: value || [],
			handleAddProducts,
			handleRemoveProducts,
			handleUpdateProductPositions,
		},
		number: {
			type: 'number',
		},
		price: {
			type: 'number',
		},
		habtm: {
			field,
			document,
			collection,
			handleAddReferences,
			handleRemoveReferences,
			enableMultipleSelect: true,
		},
		image: {
			field,
			collection,
			handleAddAttachment,
			handleRemoveAttachment,
		},
		file: {
			field,
			collection,
			handleAddAttachment,
			handleRemoveAttachment,
		},
		video: {
			field,
			collection,
			handleAddAttachment,
			handleRemoveAttachment,
		},
	}[variant]

	return (
		<div className="flex flex-row justify-between items-start space-x-2">
			<Component
				label={label}
				errors={errors}
				name={name}
				value={value}
				handleChange={handleChange}
				{...inputProps}
			/>
			{variant == 'text' && (
				<div className="mt-6">
					<AiChatModal name={name} value={value} handleChange={handleChange} />
				</div>
			)}
		</div>
	)
}

export default AdminDocumentInput
