import React from 'react'
import {
	AttachmentInput,
	Autosuggest,
	ArrayInput,
	LocationInput,
	DateInput,
	ImageInput,
	JSONInput,
	RatingInput,
	SwitchInput,
	TextInput,
	ShopifyProductInput,
} from '../../../components'
import { SyntheticEventType } from '../../../types'

type FormInputProps = {
	variant: any
	name: string
	label?: string
	errors?: any
	value?: any | any[]
	options: any
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	handleRemove: (name: string) => void
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
	} = props

	let componentMapper = {
		array: ArrayInput,
		string: TextInput,
		file: AttachmentInput,
		url: TextInput,
		text: TextInput,
		location: LocationInput,
		number: TextInput,
		price: TextInput,
		date: DateInput,
		datetime: DateInput,
		boolean: SwitchInput,
		select: Autosuggest,
		rating: RatingInput,
		image: ImageInput,
		json: JSONInput,
		shopify: ShopifyProductInput,
	}

	let inputProps = {
		text: {
			multiline: true,
			rows: 6,
		},
		select: {
			options: options,
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
		image: {
			handleRemove,
		},
		video: {
			handleRemove,
		},
		audio: {
			handleRemove,
		},
		file: {
			handleRemove,
		},
	}

	let InputComponent = componentMapper[variant]

	return (
		<InputComponent
			errors={errors}
			label={label}
			name={name}
			value={value || ''}
			handleChange={handleChange}
			placeholder={placeholder}
			{...inputProps[variant]}
		/>
	)
}

export default FormInput
