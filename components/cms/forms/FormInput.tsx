import React from 'react'
import {
	AttachmentInput,
	Autosuggest,
	ArrayInput,
	CountryInput,
	DateInput,
	EmailInput,
	ImageInput,
	JSONInput,
	LocationInput,
	PhoneInput,
	RatingInput,
	StateInput,
	SwitchInput,
	TextInput,
	URLInput,
	NoSpaceInput,
	ShopifyProductInput,
	ShopifyProductsInput,
	ReferenceInput,
	RemoteAutosuggest,
} from '../../../components'
import { FormFieldType, OptionType, SyntheticEventType } from '../../../types'
import { STATES, COUNTRIES } from '../../../constants'

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
	resource?: any
	url?: string
	foreignUrl?: string
	contentType?: string
	query?: any
	displayField?: string //Autosuggest has an optional display field param
	valueParam?: string // MetafieldAutosuggest has an optional value param
	fields?: FormFieldType[]
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
		resource,
		url,
		foreignUrl,
		fields,
		contentType,
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
		text: TextInput,
		nospace: NoSpaceInput,
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
		json: JSONInput,
		shopify: ShopifyProductInput,
		shopify_products: ShopifyProductsInput,
		habtm: ReferenceInput,
		...defaultInputOptions,
	}

	let inputProps = {
		autosuggest: {
			url,
			displayField,
			valueParam,
			defaultQuery: query,
		},
		text: {
			multiline: true,
			rows: 6,
		},
		select: {
			// Handle both array of strings and array of objects
			options: options?.map((option: OptionType) => ({
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
		habtm: {
			resource,
			url,
			foreignUrl,
			contentType,
			fields,
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
