import React from 'react'
import {
	ArrayInput,
	DateInput,
	ImageInput,
	JSONInput,
	RatingInput,
	SwitchInput,
	TextInput,
} from '../..'
import { SyntheticEventType } from '../../../types'

type FormInputProps = {
	variant: any
	name: string
	label?: string
	errors?: any
	value?: any | any[]
	placeholder?: string
	handleChange?: (e: SyntheticEventType) => void
	handleRemove?: (name: string) => void
}

const FormInput: React.FC<FormInputProps> = (props) => {
	const {
		variant,
		name,
		label,
		errors,
		value,
		placeholder,
		handleChange,
		handleRemove,
	} = props

	return (
		<>
			{variant === 'array' && (
				<ArrayInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}
			{variant === 'string' && (
				<TextInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}
			{variant === 'url' && (
				<TextInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}
			{variant === 'text' && (
				<TextInput
					multiline
					rows={6}
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}
			{variant === 'number' && (
				<TextInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}
			{variant === 'date' && (
				<DateInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}

			{variant === 'boolean' && (
				<SwitchInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}
			{variant === 'select' && (
				<ArrayInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}
			{variant === 'rating' && (
				<RatingInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}
			{variant === 'image' && (
				<ImageInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					handleRemove={handleRemove}
				/>
			)}
			{variant === 'json' && (
				<JSONInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}
		</>
	)
}

export default FormInput
