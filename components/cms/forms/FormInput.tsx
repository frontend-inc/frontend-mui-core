'use client'

import React from 'react'
import {
	AttachmentInput,
	Autosuggest,
	ArrayInput,
	CountryInput,
	DateInput,
	DividerInput,
	EmailInput,
	ImageInput,
	LocationInput,
	PhoneInput,
	RatingInput,
	StateInput,
	SwitchInput,
	TextInput,
	TextArea,
	URLInput,
	SnakeCaseInput,
	ShopifyProductInput,
	ShopifyProductsInput,
	RemoteAutosuggest,
	MediaInput,
} from '../../../components'
import { OptionType, SyntheticEventType } from '../../../types'

type FormInputProps = {
	variant: any
	name: string
	label?: string
	errors?: any
	value?: any | any[]
	options: any
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	handleRemove?: (name: string) => void
	handleAddAttachment?: (name: string, attachmentId: number) => void
	handleRemoveAttachment?: (name: string) => void
	url?: string
	query?: any
	displayField?: string //Autosuggest has an optional display field param
	valueParam?: string // MetafieldAutosuggest has an optional value param
	inputOptions?: Record<string, React.FC>
	inputParams?: Record<string, any>
}

const FormInput: React.FC<FormInputProps> = (props) => {
	const {
		variant,
		name,
		label,
		errors,
		value,
		options,
		placeholder,
		handleChange,
		handleRemove,
		handleAddAttachment,
		handleRemoveAttachment,
		url,
		query = {},
		displayField,
		valueParam,
		inputOptions: defaultInputOptions = {},
		inputParams: defaultInputParams = {},
	} = props

	let componentMapper = {
		autosuggest: RemoteAutosuggest,
		array: ArrayInput,
		country: CountryInput,
		string: TextInput,
		file: AttachmentInput,
		email: EmailInput,
		phone: PhoneInput,
		url: URLInput,
		text: TextArea,
		snake_case: SnakeCaseInput,
		location: LocationInput,
		number: TextInput,
		price: TextInput,
		date: DateInput,
		datetime: DateInput,
		boolean: SwitchInput,
		select: Autosuggest,
		state: StateInput,
		rating: RatingInput,
		image: ImageInput,
		media: MediaInput,
		divider: DividerInput,
		shopify_product: ShopifyProductInput,
		shopify_products: ShopifyProductsInput,
		single_choice: Autosuggest,
		multiple_choice: ArrayInput,
		...defaultInputOptions,
	}

	let inputProps = {
		autosuggest: {
			url,
			displayField,
			valueParam,
			defaultQuery: query,
		},
		string: {
			disableDebounce: true,
		},
		text: {
			disableDebounce: true,
		},
		select: {
			// Handle both array of strings and array of objects
			options: options?.map((option: OptionType) => ({
				icon: option.icon,
				label: option.label || option,
				value: option.value || option,
			})),
		},
		single_choice: {
			// Handle both array of strings and array of objects
			options: options?.map((option: OptionType) => ({
				icon: option.icon,
				label: option.label || option,
				value: option.value || option,
			})),
		},
		number: {
			type: 'number',
		},
		boolean: {
			label: null,
			placeholder: label,
		},
		price: {
			type: 'number',
		},
		media: {
			handleRemove: handleRemove,
		},
		...defaultInputParams,
	}

	let InputComponent = componentMapper[variant] || TextInput

	return (
		<InputComponent
			errors={errors}
			label={label}
			name={name}
			value={value || ''}
			handleChange={handleChange}
			handleRemove={handleRemove}
			handleAddAttachment={handleAddAttachment}
			handleRemoveAttachment={handleRemoveAttachment}
			placeholder={placeholder}
			{...inputProps[variant]}
		/>
	)
}

export default FormInput
