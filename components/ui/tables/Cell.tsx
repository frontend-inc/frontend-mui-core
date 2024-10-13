'use client'

import React from 'react'
import {
	CellArray,
	CellBoolean,
	CellDate,
	CellFile,
	CellHABTM,
	CellImage,
	CellLink,
	CellLocation,
	CellString,
	CellShopify,
	CellProducts,
	CellText,
	CellPrice,
	CellRating,
	CellVideo,
	CellUser,
} from '../../../components'

type CellProps = {
	field: any
	row: any
	value: any
	handleClick?: (value: any, row: any, field: any) => void
}

const Cell: React.FC<CellProps> = (props) => {
	let { field, row, value, handleClick } = props

	const componentMapper = {
		array: CellArray,
		boolean: CellBoolean,
		date: CellDate,
		datetime: CellDate,
		email: CellString,
		phone: CellString,
		image: CellImage,
		video: CellVideo,
		url: CellLink,
		rating: CellRating,
		number: CellString,
		text: CellText,
		location: CellLocation,
		price: CellPrice,
		shopify: CellShopify,
		habtm: CellHABTM,
		string: CellString,
		select: CellString,
		user: CellUser,
		file: CellFile,
		multiple_choice: CellArray,
		single_choice: CellString,
		products: CellProducts,
		shopify_products: CellArray,
	}

	const CellComponent = componentMapper[field.variant]

	return (
		<CellComponent
			value={value}
			row={row}
			field={field}
			handleClick={handleClick}
		/>
	)
}

export default Cell
