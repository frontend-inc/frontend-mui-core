'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '../../../tailwind'
import { InputPropsType } from '../../../types'
import { Plus } from 'lucide-react'
import { useMenu } from '../../../hooks'
import { SortableList, InputLabel, Drawer } from '../..'
import {
	Icon,
	ArrayInput,
	Autosuggest,
	BooleanInput,
	RatingInput,
	TextInput,
} from '../..'

type JsonbFieldProps = {
	index: number
	item: any
	handleChange: any
	field: any
	direction?: 'column' | 'row'
	handleRemove?: () => void
}

const JsonbField: React.FC<JsonbFieldProps> = (props) => {
	const { item, handleChange, field, direction = 'column' } = props

	const Component = {
		boolean: BooleanInput,
		string: TextInput,
		array: ArrayInput,
		text: TextInput,
		number: TextInput,
		select: Autosuggest,
		rating: RatingInput,
	}[field.type]

	const { label, name, placeholder, options } = field || {}
	const value = item[field.name]

	if (!Component) return null
	return (
		<Component
			label={label}
			name={name}
			value={value}
			handleChange={handleChange}
			placeholder={placeholder}
			direction={direction}
			options={options}
		/>
	)
}

type JsonbItemProps = {
	index: number
	item: any
	titleField: string
	handleClick: (event: React.MouseEvent, item: any, index: number) => void
	handleRemove: (index: number) => void
}

function JsonbItem({
	index,
	item,
	titleField,
	handleClick,
	handleRemove,
}: JsonbItemProps) {
	return (
		<li
			className={`p-0 w-full rounded border border-gray-200 bg-white my-1 ${
				item.isDragging ? 'shadow-lg' : ''
			}`}
		>
			<div className="flex items-center">
				<button
					className="flex-grow flex items-center py-2 px-4 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
					onClick={(ev) => handleClick(ev, item, index)}
				>
					<span className="mr-2 cursor-grab">
						<Icon name="GripVertical" />
					</span>
					{item?.icon && (
						<span className="mr-2">
							<Icon name={item.icon} />
						</span>
					)}
					<span className="text-gray-900">{item[titleField]}</span>
				</button>
				<button
					className="p-2 text-gray-400 hover:text-gray-600 focus:outline-none"
					onClick={() => handleRemove(index)}
				>
					<Icon name="X" />
				</button>
			</div>
		</li>
	)
}

type JsonbInputProps = InputPropsType & {
	title?: string
	fields: Record<string, any>[]
	name: string
	label?: string
	info?: string
	value: any[]
	handleChange: any
}

const JsonbInput: React.FC<JsonbInputProps> = (props) => {
	const {
		title,
		name,
		label,
		fields = [],
		value: items = [],
		handleChange,
		info,
	} = props

	const { open, openMenu, closeMenu } = useMenu()
	const [activeItem, setActiveItem] = useState({})
	const [currentIndex, setCurrentIndex] = useState(0)
	const [titleField, setTitleField] = useState('title')

	const buildEmptyItem = (fields) => {
		let emptyItem = {}
		fields.forEach((field) => {
			emptyItem[field.name] = field.default
		})
		return emptyItem || {}
	}

	const handleEditClick = (ev, value, index) => {
		openMenu(ev)
		setActiveItem(value)
		setCurrentIndex(index)
	}

	const handleAddClick = (ev) => {
		setActiveItem(buildEmptyItem(fields))
		setCurrentIndex(-1)
		openMenu(ev)
	}

	const handleSubmit = () => {
		let newItems = [...items]
		let index = currentIndex
		if (index == -1) {
			newItems = [...items, activeItem]
		} else {
			newItems[index] = activeItem
		}
		closeMenu()
		handleChange({
			target: {
				name: name,
				value: newItems,
			},
		})
	}

	const handleRemove = (index: number) => {
		let newValues = [...items]
		newValues = newValues.filter((_, i) => i !== index)
		handleChange({
			target: {
				name: name,
				value: newValues,
			},
		})
	}

	const handleInputChange = (ev) => {
		const { name, value } = ev.target
		setActiveItem({
			...activeItem,
			[name]: value,
		})
	}

	const handleDrop = (sorted) => {
		handleChange({
			target: {
				name: name,
				value: sorted,
			},
		})
	}

	useEffect(() => {
		if (fields?.length > 0) {
			setTitleField(fields?.find((f) => f.titleField)?.name || 'title')
		}
	}, [fields])

	return (
		<div className="flex flex-col space-y-2">
			<InputLabel label={label} info={info} />
			<SortableList
				droppableId={`json-array-${name}`}
				handleDrop={handleDrop}
				items={items}
				renderItem={(item, index) => (
					<JsonbItem
						key={index}
						index={index}
						item={item}
						titleField={titleField}
						handleClick={handleEditClick}
						handleRemove={handleRemove}
					/>
				)}
			/>
			<div>
				<Button
					color="secondary"
					variant="contained"
					onClick={handleAddClick}
					startIcon={<Plus size={24} />}
				>
					Add
				</Button>
			</div>
			<Drawer
				title={title}
				open={open}
				handleClose={closeMenu}
				buttons={
					<Button
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleSubmit}
					>
						Save
					</Button>
				}
			>
				<div className="flex flex-col space-y-2">
					{fields.map((field, i) => (
						<JsonbField
							key={i}
							index={i}
							item={activeItem}
							field={field}
							handleChange={handleInputChange}
							direction="column"
						/>
					))}
				</div>
			</Drawer>
		</div>
	)
}

export default JsonbInput
