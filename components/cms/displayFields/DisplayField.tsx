'use client'

import React from 'react'
import {
	FieldArray,
	FieldBoolean,
	FieldDate,
	FieldFile,
	FieldLocation,
	FieldImage,
	FieldJSON,
	FieldURL,
	FieldPrice,
	FieldRating,
	FieldString,
	FieldText,
	FieldVideo,
} from '../..'
import { DisplayFieldType, TypographyVariantsType } from '../../../types'
import { get } from 'lodash'
import { truncate } from '../../../helpers'
import { cn } from '../../../shadcn/lib/utils'

type FieldProps = {
	label?: string
	color?: string
	direction?: 'row' | 'column'
	placeholder?: string
	field: DisplayFieldType
	resource?: any
	disableBorder?: boolean
	disableLabel?: boolean
}

const DisplayField: React.FC<FieldProps> = (props) => {
	const {
		field,
		resource,
		disableBorder = false,
		disableLabel = false,
		color = 'text.secondary',

		...rest
	} = props
	const { name, label, variant: fieldVariant, icon } = field
	let value = get(resource, name)
	if (!value || value?.length == 0) return null

	const components = {
		boolean: FieldBoolean,
		date: FieldDate,
		datetime: FieldDate,
		file: FieldFile,
		location: FieldLocation,
		image: FieldImage,
		video: FieldVideo,
		json: FieldJSON,
		url: FieldURL,
		rating: FieldRating,
		text: FieldText,
		number: FieldText,
		array: FieldArray,
		string: FieldString,
		select: FieldString,
		price: FieldPrice,
		email: FieldString,
		phone: FieldString,
		single_choice: FieldString,
		multiple_choice: FieldArray,
	}

	const variantProps = {
		string: {
			value: truncate(value),
		},
		text: {
			variant: 'body1',
		},
		image: {
			height: 64,
			width: 64,
		},
	}

	const Component = components[fieldVariant] || FieldString
	const componentProps = variantProps?.[fieldVariant] || {}

	if (!value || value == '') return null
	return (
		<div
			className={cn(!disableBorder && 'border border-border p-2 rounded-md')}
		>
			<Component
				label={label}
				icon={icon}
				variant="caption"
				color={color}
				value={value}
				disableLabel={disableLabel}
				{...componentProps}
				{...rest}
			/>
		</div>
	)
}

export default DisplayField
