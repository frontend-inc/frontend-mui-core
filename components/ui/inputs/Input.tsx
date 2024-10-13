'use client'

import React from 'react'
import {
	ArrayInput,
	AttachmentInput,
	AutocompleteInput,
	BooleanInput,
	CheckboxGroupInput,
	CheckboxInput,
	ColorInput,
	DateInput,
	EmailInput,
	ErrorInput,
	ImageInput,
	JsonArrayInput,
	SnakeCaseInput,
	NumberRangeInput,
	NumberSliderInput,
	PhoneInput,
	PriceRangeInput,
	RadioInput,
	RatingInput,
	SearchInput,
	SelectInput,
	ShopifyProductsInput,
	SwitchInput,
	TabsInput,
	TextInput,
	TextArea,
	URLInput,
} from './index'
import { OptionType } from 'frontend-js'

type InputVariantType =
	| 'array'
	| 'attachment'
	| 'autocomplete'
	| 'boolean'
	| 'checkboxGroup'
	| 'checkbox'
	| 'color'
	| 'date'
	| 'email'
	| 'error'
	| 'file'
	| 'image'
	| 'jsonArray'
	| 'noSpace'
	| 'numberRange'
	| 'numberSlider'
	| 'phone'
	| 'priceRange'
	| 'radio'
	| 'search'
	| 'select'
	| 'shopify_products'
	| 'switch'
	| 'tabs'
	| 'text'
	| 'url'

export type InputProps = any & {
	variant: InputVariantType
	errors?: any
	value?: any
	handleChange: (e: any) => void
	label?: string
	info?: string
	placeholder?: string
	options: OptionType[]
}

const Input: React.FC<InputProps> = (props) => {
	const { variant, ...rest } = props

	const COMPONENTS = {
		array: ArrayInput,
		attachment: AttachmentInput,
		autocomplete: AutocompleteInput,
		boolean: BooleanInput,
		checkboxGroup: CheckboxGroupInput,
		checkbox: CheckboxInput,
		color: ColorInput,
		date: DateInput,
		email: EmailInput,
		error: ErrorInput,
		image: ImageInput,
		jsonArray: JsonArrayInput,
		noSpace: SnakeCaseInput,
		numberRange: NumberRangeInput,
		numberSlider: NumberSliderInput,
		phone: PhoneInput,
		priceRange: PriceRangeInput,
		radio: RadioInput,
		search: SearchInput,
		select: SelectInput,
		shopify_products: ShopifyProductsInput,
		switch: SwitchInput,
		ratings: RatingInput,
		tabs: TabsInput,
		text: TextArea,
		url: URLInput,
	}

	const Component = COMPONENTS[variant]

	return <Component {...rest} />
}

export default Input
