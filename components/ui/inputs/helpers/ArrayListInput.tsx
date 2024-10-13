'use client'

import React, { useState } from 'react'
import { Typography, IconButton, Button } from '../../../../tailwind'
import { InputPropsType } from '../../../../types'
import { X, Plus } from 'lucide-react'
import { TextInput } from '../../..'

type ArrayItemInputProps = {
	index: number
	value: string
	handleChange: any
	handleRemove: any
}

const ArrayItemInput: React.FC<ArrayItemInputProps> = (props) => {
	const { index, value = '', handleChange, handleRemove } = props

	const [_value, setValue] = useState('')

	const handleInputChange = (ev) => {
		let { value = '' } = ev.target
		setValue(value)
		handleChange(value, index)
	}

	return (
		<div className="flex flex-row gap-2 items-center">
			<TextInput
				name="value"
				value={value}
				placeholder="Enter..."
				//@ts-ignore
				handleChange={handleInputChange}
			/>
			<div>
				<IconButton onClick={() => handleRemove(index)}>
					<X />
				</IconButton>
			</div>
		</div>
	)
}

const ArrayListInput: React.FC<InputPropsType> = (props) => {
	const { name, label, value: values = [], handleChange } = props

	const handleAddClick = () => {
		let newValues = [...values, '']
		handleChange({
			target: {
				name: name,
				value: newValues,
			},
		})
	}

	const handleRemove = (index: number) => {
		let newValues = [...values]
		newValues = newValues.filter((_, i) => i !== index)
		handleChange({
			target: {
				name: name,
				value: newValues,
			},
		})
	}

	const handleInputChange = (value, index) => {
		let newValues = [...values]
		newValues[index] = value
		handleChange({
			target: {
				name: name,
				value: newValues,
			},
		})
	}

	return (
		<div className="flex flex-col gap-2">
			{label && (
				<Typography variant="caption" color="text.secondary">
					{label}
				</Typography>
			)}
			{Array.isArray(values) &&
				values?.map((value, index) => (
					<ArrayItemInput
						key={index}
						index={index}
						value={value}
						handleChange={handleInputChange}
						handleRemove={handleRemove}
					/>
				))}
			<div>
				<Button
					variant="contained"
					color="secondary"
					onClick={handleAddClick}
					startIcon={<Plus className="w-5 h-5 text-foreground" />}
				>
					Add
				</Button>
			</div>
		</div>
	)
}

export default ArrayListInput
